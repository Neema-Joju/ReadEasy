// Handle messages from popup
browser.runtime.onMessage.addListener((message) => {
    if (message.action === "toggleImages") {
      // Enable image removal
      browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: "removeElements" });
      });
    }
  
    if (message.action === "toggleAds") {
      // Enable webRequest to block ads
      browser.webRequest.onBeforeRequest.addListener(
        blockAds,
        { urls: ["<all_urls>"] },
        ["blocking"]
      );
      // Start content script to remove DOM elements
      browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: "removeAds" });
      });
    } else {
      browser.webRequest.onBeforeRequest.removeListener(blockAds);
    }
  });
  
  // WebRequest function to block ads
  function blockAds(details) {
    if (details.url.includes('ads') || details.url.includes('banner')) {
      return { cancel: true };  // Block ad-related requests
    }
  }
  