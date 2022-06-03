(() => {
  'use strict'
  chrome.runtime.onInstalled.addListener(() => {
    const color = '#3aa757'
    console.log('chrome.storage set to %cgreen', `color: ${color}`)

    chrome.storage.sync.set({ color })
  })
})()
