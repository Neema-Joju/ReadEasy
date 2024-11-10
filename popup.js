document.addEventListener("DOMContentLoaded", () => {
  const imageToggle = document.getElementById("imageToggle");
  const adBlockToggle = document.getElementById("adBlockToggle");

  // Event listener for "Enable clean reading"
  imageToggle.addEventListener("change", () => {
      browser.runtime.sendMessage({ action: "toggleImages", enabled: imageToggle.checked });
  });

  // Event listener for "Enable Ad Blocker"
  adBlockToggle.addEventListener("change", () => {
      browser.runtime.sendMessage({ action: "toggleAds", enabled: adBlockToggle.checked });
  });
});

  