const { assertEqual, assertTrue } = require('../assert');

module.exports = [
  {
    name: 'hex 1A AND 0F = A, and only the Programmer panel is visible',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="programmer"]');
      await page.click('.base-btn[data-base="16"]');
      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="1"]');
      await page.click('#progRow [data-action="progdigit"][data-value="A"]');
      await page.click('#progRow [data-action="bitop"][data-value="and"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="0"]');
      await page.click('#progRow [data-action="progdigit"][data-value="F"]');
      await page.click('#progKeys [data-action="progequals"]');
      assertEqual(await page.textContent('#result'), 'A', '1A AND 0F result');

      const onlyProgVisible = await page.evaluate(() => {
        const ids = ['statPanel', 'solverPanel', 'complexPanel', 'regrPanel', 'financeInputPanel'];
        return ids.every((id) => getComputedStyle(document.getElementById(id)).display === 'none');
      });
      assertTrue(onlyProgVisible, 'other modes\' panels must stay hidden while in Programmer mode');
    },
  },
];
