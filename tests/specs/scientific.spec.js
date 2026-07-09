const { assertEqual } = require('../assert');

module.exports = [
  {
    name: 'sin(30) = 0.5 in degree mode',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="fn"][data-value="sin("]');
      await page.click('#keys [data-action="num"][data-value="3"]');
      await page.click('#keys [data-action="num"][data-value="0"]');
      await page.click('#sciRow [data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '0.5', 'sin(30) result');
    },
  },
  {
    name: 'sqrt(81) = 9',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="sqrt"]');
      await page.click('#keys [data-action="num"][data-value="8"]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '9', 'sqrt(81) result');
    },
  },
  {
    name: 'DEG/RAD toggle: sin(pi/2) = 1 in radian mode, and toggling back returns to DEG',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      assertEqual(await page.textContent('#degRadBtn'), 'DEG', 'starts in degree mode');

      await page.click('#sciRow [data-action="deg-rad"]');
      assertEqual(await page.textContent('#degRadBtn'), 'RAD', 'toggled to radian mode');

      await page.click('#sciRow [data-action="fn"][data-value="sin("]');
      await page.click('#sciRow [data-action="const"][data-value="π"]');
      await page.click('#keys [data-action="operator"][data-value="/"]');
      await page.click('#keys [data-action="num"][data-value="2"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '1', 'sin(pi/2) in radians');

      await page.click('#sciRow [data-action="deg-rad"]');
      assertEqual(await page.textContent('#degRadBtn'), 'DEG', 'toggled back to degree mode');
    },
  },
  {
    name: 'log(100) = 2 and ln(e) = 1',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="fn"][data-value="log("]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#keys [data-action="num"][data-value="0"]');
      await page.click('#keys [data-action="num"][data-value="0"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '2', 'log10(100) result');

      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="fn"][data-value="ln("]');
      await page.click('#sciRow [data-action="const"][data-value="e"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '1', 'ln(e) result');
    },
  },
  {
    name: 'asin(1) = 90 degrees',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');
      await page.click('#keys [data-action="clear"]');
      await page.click('#sciRow [data-action="fn"][data-value="asin("]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#sciRow [data-action="paren"][data-value=")"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '90', 'asin(1) in degrees');
    },
  },
  {
    name: 'combinatorics operators: nCr, nPr, gcd, lcm, and logb',
    fn: async (page, baseURL) => {
      await page.goto(`${baseURL}/index.html`);
      await page.click('[data-mode="scientific"]');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="5"]');
      await page.click('#sciRow [data-action="combin"][data-value="nCr"]');
      await page.click('#keys [data-action="num"][data-value="3"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '10', '5 nCr 3 result');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="5"]');
      await page.click('#sciRow [data-action="combin"][data-value="nPr"]');
      await page.click('#keys [data-action="num"][data-value="3"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '60', '5 nPr 3 result');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#keys [data-action="num"][data-value="2"]');
      await page.click('#sciRow [data-action="combin"][data-value="gcd"]');
      await page.click('#keys [data-action="num"][data-value="1"]');
      await page.click('#keys [data-action="num"][data-value="8"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '6', 'gcd(12,18) result');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="4"]');
      await page.click('#sciRow [data-action="combin"][data-value="lcm"]');
      await page.click('#keys [data-action="num"][data-value="6"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '12', 'lcm(4,6) result');

      await page.click('#keys [data-action="clear"]');
      await page.click('#keys [data-action="num"][data-value="8"]');
      await page.click('#sciRow [data-action="combin"][data-value="logb"]');
      await page.click('#keys [data-action="num"][data-value="2"]');
      await page.click('#keys [data-action="equals"]');
      assertEqual(await page.textContent('#result'), '3', 'logb(8,2) result');
    },
  },
];
