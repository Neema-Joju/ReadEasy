// Listen for messages from background script
browser.runtime.onMessage.addListener((message) => {
  if (message.action === "removeElements") {
    removeElements(['img', 'video', 'iframe', 'figure', 'figcaption','ad','in-article-adx']);
  }

  if (message.action === "removeAds") {
    removeElements(['.ad', '.sidebar', '.footer', 'iframe']);
  }
});

// Function to remove specified elements from the DOM
function removeElements(selectors) {
  const elementsToRemove = document.querySelectorAll(selectors.join(', '));
  elementsToRemove.forEach(element => element.remove());
}



