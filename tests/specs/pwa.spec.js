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
];
