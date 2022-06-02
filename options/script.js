(() => {
  'use strict'
  const divHTMLElement = document.getElementById('options')
  const selector = 'current'

  function handleButtonClick (event) {
    const parentElement = event.target.parentElement
    const current = parentElement.querySelector(`.${selector}`) || event.target
    if (current !== event.target) {
      current.classList.remove(selector)
    }

    const color = event.target.dataset.color
    event.target.classList.add(selector)
    chrome.storage.sync.set({ color })
  }

  const colors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
  chrome.storage.sync.get('color', (data) => {
    for (const color of colors) {
      const buttonHTMLElement = document.createElement('button')
      buttonHTMLElement.dataset.color = color
      buttonHTMLElement.style.backgroundColor = color

      if (color === data.color) {
        buttonHTMLElement.classList.add(selector)
      }

      buttonHTMLElement.addEventListener('click', handleButtonClick)
      divHTMLElement.appendChild(buttonHTMLElement)
    }
  })
})()
