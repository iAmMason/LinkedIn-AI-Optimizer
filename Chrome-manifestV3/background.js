// Execute content script when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content_script.js']
      });
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message) => {
  if (message.command === "hideLiElements") {
      chrome.scripting.executeScript({
          target: { tabId: message.tabId },
          function: hideLiElements
      });
  }
});

// Hide all <li> elements within <div class='display-flex align-items-center'>
function hideLiElements() {
  const divsWithLi = document.querySelectorAll('.display-flex.align-items-center');
  divsWithLi.forEach(div => {
      const liElements = div.querySelectorAll('ul');
      liElements.forEach(li => {
          li.style.display = 'none';
      });
  });
}
