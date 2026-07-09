const fs = require('fs');
const path = require('path');
const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'manifest link, theme-color, and icons are present and resolvable',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      assertEqual(
        await page.evaluate(() => document.querySelector('link[rel="manifest"]').getAttribute('href')),
        'manifest.json',
        'manifest link href'
      );
      assertEqual(
        await page.evaluate(() => document.querySelector('meta[name="theme-color"]').getAttribute('content')),
        '#7c5cff',
        'theme-color meta content'
      );
      const manifestCheck = await page.evaluate(async () => {
        const res = await fetch('manifest.json');
        const m = await res.json();
        const iconChecks = await Promise.all(m.icons.map(async (ic) => (await fetch(ic.src)).ok));
        return { name: m.name, display: m.display, iconsOk: iconChecks.every(Boolean), iconCount: m.icons.length };
      });
      assertEqual(manifestCheck.name, 'Advanced Calculator', 'manifest name');
      assertEqual(manifestCheck.display, 'standalone', 'manifest display mode');
      assertTrue(manifestCheck.iconsOk, 'all manifest icons resolve');
      assertTrue(manifestCheck.iconCount >= 2, 'manifest declares at least two icons');
    },
  },
  {
    name: 'service worker registers, activates, and caches the app shell for offline use',
    fn: async (page, baseURL) => {
      const context = page.context();
      await page.goto(`${baseURL}/index.html`);
      await page.waitForFunction(async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        return !!(reg && reg.active);
      }, { timeout: 10000 });

      await page.reload();
      await page.waitForFunction(() => !!navigator.serviceWorker.controller, { timeout: 10000 });
      const controlled = await page.evaluate(() => !!navigator.serviceWorker.controller);
      assertTrue(controlled, 'page is controlled by the service worker after reload');

      await context.setOffline(true);
      try {
        await page.reload();
        const calculatorPresent = await page.evaluate(() => !!document.getElementById('calculator'));
        assertTrue(calculatorPresent, 'app shell still renders while offline');
      } finally {
        await context.setOffline(false);
      }
    },
  },
  {
    name: 'service worker revalidates cached app-shell files in the background instead of serving them forever (stale-while-revalidate)',
    fn: async (page, baseURL) => {
      const scriptPath = path.join(__dirname, '..', '..', 'script.js');
      const original = fs.readFileSync(scriptPath, 'utf8');
      try {
        await page.goto(`${baseURL}/index.html`);
        await page.evaluate(async () => {
          const regs = await navigator.serviceWorker.getRegistrations();
          for (const r of regs) await r.unregister();
          const names = await caches.keys();
          for (const n of names) await caches.delete(n);
        });
        await page.reload();
        await page.waitForFunction(async () => {
          const reg = await navigator.serviceWorker.getRegistration();
          return !!(reg && reg.active);
        }, { timeout: 10000 });
        await page.waitForTimeout(500);

        const before = await page.evaluate(async () => {
          const names = await caches.keys();
          const cache = await caches.open(names[0]);
          const res = await cache.match('script.js');
          return (await res.text()).includes('SW-REVALIDATE-REGRESSION-MARKER');
        });
        assertEqual(before, false, 'marker absent before the simulated redeploy');

        fs.writeFileSync(scriptPath, `${original}\n// SW-REVALIDATE-REGRESSION-MARKER\n`);
        await page.reload();
        await page.waitForTimeout(1000);

        const after = await page.evaluate(async () => {
          const names = await caches.keys();
          const cache = await caches.open(names[0]);
          const res = await cache.match('script.js');
          return (await res.text()).includes('SW-REVALIDATE-REGRESSION-MARKER');
        });
        assertTrue(after, 'cache picked up the redeployed script.js in the background, proving it is not stuck on the first-cached version forever');
      } finally {
        fs.writeFileSync(scriptPath, original);
      }
    },
  },
];
