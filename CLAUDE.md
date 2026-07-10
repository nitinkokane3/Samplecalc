# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Advanced Calculator

Multi-mode calculator: Standard, Scientific, Programmer, Converter, Statistics,
Solver, Graphing, Matrix, Vector, Complex, Regression, Finance. Plain HTML/CSS/JS,
**no build step, no framework, no dependencies at runtime**. Installable as a PWA,
works fully offline after the first visit (see `sw.js`).

`index.html` + `style.css` + `script.js` are the entire app. `script.js` is one
top-level IIFE; everything (state, DOM refs, functions) lives in its closure —
there is no module system to import from, just call functions directly.
`docs/user-manual.html` is a standalone, hand-maintained walkthrough of every
mode (with screenshots in `docs/manual-images/`) — it is not generated from
the app, so update it by hand when a mode's UI or behavior changes.

## Commands

```
npm install                 # installs playwright (devDependency only)
npm test                    # run the full test suite
node tests/run.js <substr>  # filter spec files by filename substring, e.g. `node tests/run.js matrix`
```

There is no build/lint step — open `index.html` directly, or serve the repo
root with any static file server, to run the app itself.

## No build step is deliberate

Don't introduce a bundler, transpiler, or npm runtime dependency for the app
itself. `package.json`'s only dependency is `playwright`, and it's a devDependency
for the test suite — never required to *run* the app. If you need a new file,
add a `<script>`/`<link>` tag; don't reach for a build tool to avoid one.

## Service worker: stale-while-revalidate, not cache-first

`sw.js` serves `index.html`/`style.css`/`script.js`/etc. from the Cache API
using **stale-while-revalidate**: return the cached copy instantly (so the app
stays fully usable offline), but always kick off a real network fetch in the
background via `event.waitUntil()` and overwrite the cache entry when it
resolves. Don't change this back to pure cache-first (`if (cached) return
cached;` with no network attempt) — that was a real, confirmed bug: for a
whole session's worth of feature work, `script.js`/`style.css`/`index.html`
changed on every push but `sw.js` itself never did, so any browser that had
already installed the PWA never re-fetched anything and would have stayed on
its first-ever-visit version forever, silently, with no error. Verified by
editing `script.js` on disk, reloading a page with an already-active service
worker, and confirming the cached copy updated — see the "stale-while-revalidate"
test in `tests/specs/pwa.spec.js`, which fails against a reverted cache-first
handler and passes against the current one.

The revalidation fetch uses `{ cache: 'no-store' }` deliberately — without it,
the *browser's* own HTTP cache can serve a heuristically-fresh response for a
file with a `Last-Modified` header and no `Cache-Control`, so the "background
fetch" never actually reaches the network and the Cache API entry never
updates. `no-store` forces every revalidation to genuinely ask the server.

## The isolated-mode architecture

Every mode (Solver, Matrix, Vector, Complex, Finance, etc.) follows the same
shape. When adding a new one, copy this pattern rather than inventing a new one:

- An `isXMode()` helper checking `calculator.classList.contains('x')`.
- A state object holding that mode's values, persisted to `localStorage` under
  its own `calc-x-*` key(s), loaded once at startup via `JSON.parse(... || 'null')`.
- `saveX()` / `renderX()` functions. `renderX()` is the single source of truth
  for updating the DOM from state — call it after every state mutation, don't
  update the DOM inline elsewhere.
- Its own keypad (`.keys.x-keys`) and panel, added to the `[keys, sciRow, ...]`
  container array (search for it in `script.js`) so its buttons get a click
  listener at all.
- Wired into: `handleAction()`'s switch (including the shared `clear`/
  `clear-entry`/`backspace`/`ans` branches, which dispatch per-mode), the global
  `keydown` handler (digit entry, Tab-to-next-field, Escape-to-clear), `switchToMode()`,
  `applyLanguage()`'s render-dispatch chain, `init()`'s `validModes` array, and
  `backupKeys` if it has persisted state.
- Translations in both `en` and `mr` blocks, plus a Help Guide entry
  (`guideText`) and a keyboard-shortcuts row (`helpText`) if the mode has a
  dedicated keypad.

**Every mode gets its own CSS classes — never reuse another mode's.** A shared
base class like `.conv-panel` is fine, but if a mode-specific "show" rule
targets that shared class instead of a mode-specific subclass, *every* mode
sharing it becomes visible at once. This caused a real bug (Programmer's panel
rule matched `.conv-panel` generically, showing Statistics/Solver/Complex/
Regression panels underneath it) — fixed by giving Programmer its own
`.prog-panel` class. The same applies to `document.querySelectorAll()` calls in
render functions: if two modes' interactive rows share a class, one mode's
render function will toggle the other's `.active` state by accident. Duplicate
the small amount of CSS; don't share the class.

Field-row controls that toggle an "active" state on click (Solver coefficients,
Matrix cells, Vector/Complex/Finance/Regression fields) are wired for
keyboard/screen-reader access generically: see `activeFieldSelector` near the
bottom of `script.js`. Add your mode's field-row class to that selector so it
picks up `role="button"`, `tabindex`, and Enter/Space activation automatically
— don't hand-roll it per mode.

**Toolbars (`.graph-toolbar`, `.matrix-toolbar`, `.complex-toolbar`,
`.vector-toolbar`) all have `flex-wrap: wrap` — keep it that way when adding
new ones.** Their buttons use `flex: 1`, which shrinks buttons to fill the
container but can't shrink a button below its text's min-content width.
Without wrap, a toolbar with a long label (e.g. "Intersect") can already be
near the edge at a narrow viewport, and one more button silently overflows
instead of wrapping to a second row. This caused a real bug: adding an 8th
button to `.graph-toolbar` overflowed at 350px because it had no `flex-wrap`
at the time (`.matrix-toolbar`/`.complex-toolbar` didn't either — they just
hadn't been pushed over the edge yet, confirmed by checking their `scrollWidth`
was exactly equal to `clientWidth` with zero margin). All four now have
`flex-wrap: wrap`. When adding a button to any toolbar, check
`scrollWidth <= clientWidth` at a narrow viewport (350px), not just that it
looks fine at desktop width.

## Security-relevant conventions

- **Never build DOM via `innerHTML` string interpolation with data that could
  originate from Backup & Restore's JSON import** (history entries, coefficient
  values, anything round-tripped through `localStorage` via the import flow).
  This was a real, confirmed, exploitable stored-XSS (`renderHistory()` used to
  do exactly this). Use `createElement` + `.textContent` instead — always safe
  regardless of content. `innerHTML` is fine only for strings you control
  (translated UI text, hardcoded markup).
- **Never merge imported/stored data into a state object with raw
  `Object.assign(defaults, saved)` or a spread.** `JSON.parse` can produce an
  own `"__proto__"` property from untrusted JSON text, and a plain merge can
  turn that into a prototype override. Use `mergeKnownKeys(defaults, saved)`
  (defined near `formatNumber` in `script.js`) — it only copies keys already
  present in `defaults`, ignoring anything else including `__proto__`.
- The expression parser (`tokenize` / `Parser` class) is hand-rolled recursive
  descent — no `eval`/`Function`. Keep it that way; don't reach for `eval` to
  add a shortcut.
- `index.html` has a strict CSP (`script-src`/`style-src`/etc. all `'self'`, no
  `unsafe-inline`, no `unsafe-eval`). That means: no new inline `<script>`, no
  new `style="..."` HTML attributes (use a class — `element.style.prop = ...`
  from JS is fine, only HTML/`setAttribute('style', ...)` attributes are
  restricted), and no external resources of any kind (fonts, CDN scripts,
  analytics). The whole point of this app is that it works offline; an
  external dependency would silently break that.

## Testing

`tests/run.js` is a small custom runner built directly on the `playwright`
library — not `@playwright/test`, no test-framework dependency. It spins up
`tests/server.js` (a plain static file server) and a headless Chromium instance
per test case, using `/opt/pw-browsers/chromium` when present (this sandbox)
and falling back to Playwright's own resolution otherwise (CI, after
`npx playwright install`). One spec file per mode in `tests/specs/*.spec.js`,
`module.exports = [{ name, fn(page, baseURL) }, ...]`.

**Hand-verify every expected value before writing the assertion.** Every test
added this project was checked against a hand-computed or independently-derived
expected value first — don't guess a formatted string and assert it; run the
interaction once, read the actual output, confirm it's mathematically correct,
*then* write the assertion. This caught a real bug (System 2×2's degenerate-
system classification was mathematically wrong) that a "does it look plausible"
assertion would have baked in as correct.

CI (`.github/workflows/test.yml`) runs the full suite on every push/PR to `main`.

## Deployment

`.github/workflows/deploy-pages.yml` publishes to GitHub Pages on every push
to `main`. It does **not** deploy the repo as-is — it copies an explicit
allowlist (`index.html style.css script.js sw.js manifest.json icon-192.png
icon-512.png icon.svg` plus the whole `docs/` dir) into a fresh `site/`
directory and deploys that. If you add a new top-level asset the deployed app
needs at runtime (a new icon, a new top-level JS/CSS file), add it to that
`cp` line too — otherwise it works locally/in tests but 404s in production.

## i18n

Two languages: `en`, `mr` (Marathi). Every user-facing string goes through
`t(key)`; static text in HTML uses `data-i18n="key"` (textContent) or
`data-i18n-title="key"` (sets both `title` and `aria-label`, kept in sync on
language switch). Digits in results/displays go through `localizeDigits()` to
render Devanagari numerals in `mr`. Add new strings to *both* language blocks
in the same edit — a missing `mr` key silently falls back to showing the key
name or `undefined`, not an error.
