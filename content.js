// Select elements to remove
const elementsToRemove = document.querySelectorAll('img, video, iframe, .ad, .sidebar, .footer, figure, figcaption');

// Remove each element
elementsToRemove.forEach(element => {
  element.remove();
});

console.log("Content script is active on this page.");
