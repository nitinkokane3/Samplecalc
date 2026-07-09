const fs = require('fs');
const os = require('os');
const path = require('path');
const { assertEqual, assertTrue } = require('../assert');

async function importFile(page, jsonObject) {
  const filePath = path.join(os.tmpdir(), `calc-import-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
  fs.writeFileSync(filePath, JSON.stringify(jsonObject));
  await page.click('#dataToggle');
  await Promise.all([
    page.waitForNavigation({ timeout: 5000 }),
    page.setInputFiles('#importFileInput', filePath),
  ]);
}

module.exports = [
  {
    name: 'a malicious history entry imported via Backup & Restore cannot execute script (stored XSS)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);

      let xssFired = false;
      await page.exposeFunction('__xssProof', () => { xssFired = true; });

      await importFile(page, {
        app: 'Advanced Calculator',
        version: 1,
        data: {
          'calc-history': JSON.stringify([
            { expr: '<img src=x onerror="window.__xssProof()">', res: '1' },
          ]),
        },
      });

      await page.click('#historyToggle');
      await page.waitForTimeout(200);

      assertEqual(xssFired, false, 'imported history entry must not execute as script');
      const html = await page.evaluate(() => document.getElementById('historyList').innerHTML);
      assertTrue(html.includes('&lt;img'), 'malicious markup must render as escaped text, not be parsed as HTML');
    },
  },
  {
    name: 'a malicious __proto__ key in imported Solver coefficients does not pollute Object.prototype',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);

      await importFile(page, {
        app: 'Advanced Calculator',
        version: 1,
        data: {
          'calc-solver-coeffs': '{"a":"1","__proto__":{"polluted":"yes"}}',
        },
      });

      const polluted = await page.evaluate(() => ({}).polluted);
      assertEqual(polluted, undefined, 'Object.prototype must not be polluted by an imported __proto__ key');

      // the app should still function normally after the import
      await page.click('[data-mode="solver"]');
      const result = await page.textContent('#result');
      assertEqual(result, 'x = 0', 'solver mode still renders correctly after a hostile import');
    },
  },
];
