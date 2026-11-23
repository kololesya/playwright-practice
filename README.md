# Playwright in Node.js Fundamentals — Practice

This repository contains my practice work for the Playwright in Node.js Fundamentals course. The tests use the local Credit Association demo application included in this repository.

## What this repository covers

- Playwright Test basics: tests, fixtures, assertions, and async/await
- Locators and locator filtering
- Navigation, form filling, clicking, checkboxes, select controls, and other browser actions
- Dialogs, events, cookies, browser storage, page JavaScript, file downloads and uploads, and screenshots
- Test runner features: grouping, hooks, annotations, parameterization, and parallel execution
- Test-level and group-level configuration
- HTTP requests, network monitoring and interception, and combining API and UI testing

Examples are organized by course module in `tests/m3-core-concepts` through `tests/m9-networking`. The demo app is in `src`. The Playwright configuration uses `http://localhost:3000`, runs Chromium and Firefox projects, and starts the local server for test runs.

## Run the tests

You need Node.js and npm.

```bash
npm ci
npx playwright install
npx playwright test
```

Playwright starts the demo app with `npm start` before the tests and stops it when the run is complete. To browse the app separately, run `npm start` and open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npx playwright test --project=chromium
npx playwright test tests/m5-basic-actions
npx playwright show-report
```

## Test suite

The repository currently contains **55 declared tests**: **53 are active** and **2 are marked as skipped** in the test runner annotation examples. Chromium and Firefox are configured as browser projects; a separate setup project checks that the local app is available.

GitHub Actions installs the dependencies and browsers, then runs the suite on pushes and pull requests targeting `main`.
