(() => {
  'use strict'

  const buttonHTMLElement = document.getElementById('changeColor')
  chrome.storage.sync.get('color', ({ color }) => {
    buttonHTMLElement.style.backgroundColor = color
  })

  function on_click() {
    chrome.storage.sync.get('color', ({ color }) => {
      console.log('executeScript %cbackgroundColor', `color: ${color}`)
      document.body.style.backgroundColor = color
    })
  }

  buttonHTMLElement.addEventListener('click', async () => {
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      function: on_click
    })
  })
})()
