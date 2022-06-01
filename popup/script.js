(() => {
  'use strict'
  const changeColor = document.getElementById('changeColor')

  chrome.storage.sync.get('color', ({ color }) => {
    changeColor.style.backgroundColor = color
  })

  changeColor.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        chrome.storage.sync.get('color', ({ color }) => {
          console.log('executeScript %cbackgroundColor', `color: ${color}`)
          document.body.style.backgroundColor = color
        })
      }
    })
  })
})()
