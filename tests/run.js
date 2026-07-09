const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');
const { startServer } = require('./server');

const PORT = process.env.CALC_TEST_PORT ? parseInt(process.env.CALC_TEST_PORT, 10) : 8935;
const BASE_URL = `http://127.0.0.1:${PORT}`;

function resolveExecutablePath() {
  const candidates = [process.env.PLAYWRIGHT_CHROMIUM_PATH, '/opt/pw-browsers/chromium'].filter(Boolean);
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return undefined;
}

function loadSpecs() {
  const specsDir = path.join(__dirname, 'specs');
  const only = process.argv[2];
  return fs.readdirSync(specsDir)
    .filter((f) => f.endsWith('.spec.js'))
    .filter((f) => !only || f.includes(only))
    .sort()
    .map((f) => ({ file: f, tests: require(path.join(specsDir, f)) }));
}

async function main() {
  const server = await startServer(PORT);
  const browser = await chromium.launch({ executablePath: resolveExecutablePath() });

  let pass = 0;
  let fail = 0;

  for (const { file, tests } of loadSpecs()) {
    for (const { name, fn } of tests) {
      const context = await browser.newContext({ viewport: { width: 380, height: 950 } });
      const page = await context.newPage();
      const pageErrors = [];
      page.on('pageerror', (err) => pageErrors.push(err.message));
      try {
        await fn(page, BASE_URL);
        if (pageErrors.length) throw new Error(`Uncaught page error(s): ${pageErrors.join('; ')}`);
        pass++;
        console.log(`  ✓ ${file} > ${name}`);
      } catch (err) {
        fail++;
        console.log(`  ✗ ${file} > ${name}`);
        console.log(`    ${String(err.message || err).split('\n').join('\n    ')}`);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));

  console.log('');
  console.log(`${pass} passed, ${fail} failed`);
  if (fail > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
