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
    if (message.command === "hideUlElements") {
      chrome.scripting.executeScript({
        target: { tabId: message.tabId },
        function: hideUlElements
      });
    }
  });
  
  // Hide all <ul> elements within <div class='display-flex align-items-center'>
  function hideUlElements() {
    const divsWithUl = document.querySelectorAll('.display-flex.align-items-center');
    divsWithUl.forEach(div => {
      const ulElements = div.querySelectorAll('ul');
      ulElements.forEach(ul => {
        ul.style.display = 'none';
      });
    });
  }
  