const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'a strict Content-Security-Policy is present and self-only',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      const content = await page.evaluate(() =>
        document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.getAttribute('content')
      );
      assertTrue(!!content, 'CSP meta tag is present');
      ['default-src', 'script-src', 'style-src', 'object-src'].forEach((directive) => {
        assertTrue(content.includes(directive), `CSP includes a ${directive} directive`);
      });
      assertEqual(content.includes('unsafe-inline'), false, 'CSP does not allow unsafe-inline');
      assertEqual(content.includes('unsafe-eval'), false, 'CSP does not allow unsafe-eval');
      assertTrue(content.includes("object-src 'none'"), 'CSP blocks plugin content via object-src');
    },
  },
  {
    name: 'exercising every mode, the canvas, backup export, and the service worker produces zero CSP violations',
    fn: async (page, baseURL) => {
      const violations = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error' && /content security policy/i.test(msg.text())) violations.push(msg.text());
      });

      await page.goto(`${baseURL}/index.html`);

      const modes = ['standard', 'scientific', 'programmer', 'converter', 'statistics', 'solver', 'graphing', 'matrix', 'vector', 'complex', 'regression', 'finance'];
      for (const mode of modes) {
        await page.click(`[data-mode="${mode}"]`);
      }

      await page.click('[data-mode="graphing"]');
      await page.click('#graphKeys [data-action="graphclear"]');
      await page.click('#graphRow [data-action="graphfn"][data-value="sin("]');
      await page.click('#graphRow [data-action="graphvar"]');
      await page.click('#graphRow [data-action="graphparen"][data-value=")"]');
      await page.click('[data-action="graphfindroots"]');

      await page.click('#themeToggle');
      await page.click('#langToggle');
      await page.click('#helpToggle');
      await page.click('#helpClose');

      await page.click('#dataToggle');
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#exportDataBtn'),
      ]);
      assertTrue(!!(await download.path()), 'backup export (Blob + download) still works under CSP');

      await page.waitForFunction(async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        return !!(reg && reg.active);
      }, { timeout: 10000 });

      assertEqual(violations.length, 0, `no CSP violations, got: ${violations.join('; ')}`);
    },
  },
];
