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
  {
    name: 'bitwise NOT of 5 is -6 (two\'s complement)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="programmer"]');
      await page.click('.base-btn[data-base="10"]');
      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="5"]');
      await page.click('#progRow [data-action="bitop"][data-value="not"]');
      assertEqual(await page.textContent('#result'), '-6', 'NOT 5 result');
    },
  },
  {
    name: 'left shift: 1 << 4 = 0x10 in hex',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="programmer"]');
      await page.click('.base-btn[data-base="16"]');
      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="1"]');
      await page.click('#progRow [data-action="bitop"][data-value="lsh"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="4"]');
      await page.click('#progKeys [data-action="progequals"]');
      assertEqual(await page.textContent('#result'), '10', '1 << 4 in hex result');
    },
  },
  {
    name: 'right shift: 16 >> 2 = 4 in decimal, and preserves sign for negatives (-8 >> 1 = -4)',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="programmer"]');
      await page.click('.base-btn[data-base="10"]');
      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="1"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="6"]');
      await page.click('#progRow [data-action="bitop"][data-value="rsh"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="2"]');
      await page.click('#progKeys [data-action="progequals"]');
      assertEqual(await page.textContent('#result'), '4', '16 >> 2 result');

      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="0"]');
      await page.click('#progKeys [data-action="progop"][data-value="sub"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="8"]');
      await page.click('#progKeys [data-action="progequals"]');
      await page.click('#progRow [data-action="bitop"][data-value="rsh"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="1"]');
      await page.click('#progKeys [data-action="progequals"]');
      assertEqual(await page.textContent('#result'), '-4', '-8 >> 1 arithmetic shift result');
    },
  },
  {
    name: 'negative values display correctly as two\'s complement across HEX/OCT/BIN',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="programmer"]');
      await page.click('.base-btn[data-base="10"]');
      await page.click('#progKeys [data-action="clear"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="0"]');
      await page.click('#progKeys [data-action="progop"][data-value="sub"]');
      await page.click('#progKeys [data-action="progdigit"][data-value="1"]');
      await page.click('#progKeys [data-action="progequals"]');
      assertEqual(await page.textContent('#result'), '-1', 'decimal -1 result');
      assertEqual(await page.textContent('#convHex'), 'FFFFFFFF', 'hex two\'s-complement of -1');
      assertEqual(await page.textContent('#convOct'), '37777777777', 'octal two\'s-complement of -1');
      const bin = await page.textContent('#convBin');
      assertEqual(bin.length, 32, 'binary two\'s-complement of -1 is 32 bits');
    },
  },
];
