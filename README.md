# `chrome-extension-tutorials-app`

[![verify](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/verify.yml/badge.svg)](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/verify.yml) [![dependency review](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/dependency-review.yml)

This is a repo following the Google Developer [Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

Altho, since Edge works on chromium, `chrome` API is also available.

## Setup

### First time

```bash
$> npm run setup
```

### Dependencies

[![dependency review](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/dependency-review.yml)

```bash
$> npm install
```

## R&D

[![verify](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/verify.yml/badge.svg)](https://github.com/percebus/chrome-extension-tutorials-app/actions/workflows/verify.yml)

### Build

#### `dist/`

```bash
$> npm run dist
```

## Browser extension

For `chrome` | `edge`

1. `$> npm run dist`
1. Enable "Developer mode" 
1. [ Load unpacked ]
1. Select `dist/` contents

### Microsoft Edge

#### Load Extension

![extensions](./README/edge/extensions.png)

#### Popup: default (green background)

![green/before](./README/edge/green/before.png)

![green/after](./README/edge/green/after.png)

#### Options 

![options](./README/edge/options.png)

##### Popup: red background

![red/before](./README/edge/red/before.png)

![red/after](./README/edge/red/after.png)
