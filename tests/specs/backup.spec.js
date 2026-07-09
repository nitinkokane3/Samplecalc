const fs = require('fs');
const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'export includes memory and statistics state; reset clears it; import restores it',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);

      // Build up some state: memory = 7, one statistics data point.
      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="7"]');
      await page.click('#keys [data-action="mplus"]');

      await page.click('[data-mode="statistics"]');
      await page.click('#statKeys [data-action="clear"]');
      await page.click('#statKeys [data-action="statdigit"][data-value="5"]');
      await page.click('#statKeys [data-action="statadd"]');

      await page.click('#dataToggle');
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#exportDataBtn'),
      ]);
      const downloadPath = await download.path();
      const exported = JSON.parse(fs.readFileSync(downloadPath, 'utf-8'));
      assertEqual(exported.data['calc-memory'], '7', 'exported memory value');
      assertEqual(JSON.parse(exported.data['calc-stat-data']), [5], 'exported stat data content');

      // Reset all data (confirm() dialog), confirm memory is cleared after the reload.
      page.once('dialog', (dialog) => dialog.accept());
      await Promise.all([
        page.waitForNavigation({ timeout: 5000 }),
        page.click('#resetDataBtn'),
      ]);
      const memoryAfterReset = await page.evaluate(() => localStorage.getItem('calc-memory'));
      assertEqual(memoryAfterReset, null, 'memory cleared after reset');

      // Re-import the previously exported file and confirm it's restored after the reload.
      await page.click('#dataToggle');
      await Promise.all([
        page.waitForNavigation({ timeout: 5000 }),
        page.setInputFiles('#importFileInput', downloadPath),
      ]);
      const memoryAfterImport = await page.evaluate(() => localStorage.getItem('calc-memory'));
      assertEqual(memoryAfterImport, '7', 'memory restored after import');
      const statAfterImport = await page.evaluate(() => localStorage.getItem('calc-stat-data'));
      assertEqual(JSON.parse(statAfterImport), [5], 'stat data restored after import');
    },
  },
];
