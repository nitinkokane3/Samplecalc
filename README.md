# Advanced Calculator

A multi-mode calculator (Standard, Scientific, Programmer, Converter, Statistics, Equation Solver, Graphing, Matrix, Complex, Regression, and Finance) built with plain HTML/CSS/JS — no build step, no framework. Installable as a PWA and works offline after the first visit.

Open `index.html` directly, or serve the folder with any static file server.

## Running the test suite

The suite drives the app end-to-end in a real browser via Playwright.

```
npm install
npm test
```

Tests live in `tests/specs/*.spec.js`, one file per mode, and are run by `tests/run.js`, which spins up a local static server and a headless Chromium instance for each test case.
