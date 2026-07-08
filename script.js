(() => {
  const calculator = document.getElementById('calculator');
  const expressionEl = document.getElementById('expression');
  const resultEl = document.getElementById('result');
  const memoryIndicator = document.getElementById('memoryIndicator');
  const keys = document.getElementById('keys');
  const sciRow = document.getElementById('sciRow');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const themeToggle = document.getElementById('themeToggle');
  const historyToggle = document.getElementById('historyToggle');
  const historyPanel = document.getElementById('historyPanel');
  const historyList = document.getElementById('historyList');
  const clearHistoryBtn = document.getElementById('clearHistory');
  const degRadBtn = document.getElementById('degRadBtn');
  const langToggle = document.getElementById('langToggle');
  const baseTabs = document.getElementById('baseTabs');
  const progRow = document.getElementById('progRow');
  const progKeys = document.getElementById('progKeys');
  const convHexEl = document.getElementById('convHex');
  const convDecEl = document.getElementById('convDec');
  const convOctEl = document.getElementById('convOct');
  const convBinEl = document.getElementById('convBin');
  const categoryTabs = document.getElementById('categoryTabs');
  const unitRow = document.getElementById('unitRow');
  const fromUnitSelect = document.getElementById('fromUnit');
  const toUnitSelect = document.getElementById('toUnit');
  const swapUnitsBtn = document.getElementById('swapUnits');
  const convKeys = document.getElementById('convKeys');
  const statNEl = document.getElementById('statN');
  const statSumEl = document.getElementById('statSum');
  const statMeanEl = document.getElementById('statMean');
  const statPStdEl = document.getElementById('statPStd');
  const statSStdEl = document.getElementById('statSStd');
  const statMinEl = document.getElementById('statMin');
  const statMaxEl = document.getElementById('statMax');
  const statMedianEl = document.getElementById('statMedian');
  const statModeEl = document.getElementById('statMode');
  const statRangeEl = document.getElementById('statRange');
  const statQ1El = document.getElementById('statQ1');
  const statQ3El = document.getElementById('statQ3');
  const statIQREl = document.getElementById('statIQR');
  const statChipsEl = document.getElementById('statChips');
  const statKeys = document.getElementById('statKeys');
  const graphToolbar = document.getElementById('graphToolbar');
  const graphCanvasWrap = document.getElementById('graphCanvasWrap');
  const graphCanvas = document.getElementById('graphCanvas');
  const graphRow = document.getElementById('graphRow');
  const graphKeys = document.getElementById('graphKeys');

  const translations = {
    en: {
      title: 'Advanced Calculator',
      standard: 'Standard',
      scientific: 'Scientific',
      programmer: 'Programmer',
      converter: 'Converter',
      statistics: 'Statistics',
      graphing: 'Graph',
      graphReset: 'Reset',
      graphZoomIn: 'Zoom +',
      graphZoomOut: 'Zoom −',
      graphPlot: 'Plot',
      graphFindRoots: 'Roots',
      graphNoRoots: 'No roots found',
      catLength: 'Length',
      catWeight: 'Weight',
      catTemp: 'Temp',
      catData: 'Data',
      swapTitle: 'Swap units',
      statMean: 'Mean',
      statMedian: 'Median',
      statMode: 'Mode',
      statMin: 'Min',
      statMax: 'Max',
      statRange: 'Range',
      statModeNA: 'N/A',
      statAdd: 'Add',
      statValuesLabel: 'values',
      statNoData: 'No data yet',
      historyLabel: 'History',
      clearLabel: 'Clear',
      noHistory: 'No history yet',
      error: 'Error',
      themeToggleTitle: 'Toggle theme',
      historyToggleTitle: 'Toggle history',
      langToggleTitle: 'Toggle language',
      deg: 'DEG',
      rad: 'RAD',
      langButton: 'EN',
    },
    mr: {
      title: 'प्रगत कॅल्क्युलेटर',
      standard: 'मानक',
      scientific: 'वैज्ञानिक',
      programmer: 'प्रोग्रामर',
      converter: 'रूपांतरक',
      statistics: 'सांख्यिकी',
      graphing: 'आलेख',
      graphReset: 'रीसेट',
      graphZoomIn: 'झूम +',
      graphZoomOut: 'झूम −',
      graphPlot: 'आलेखा करा',
      graphFindRoots: 'मुळे',
      graphNoRoots: 'मुळे आढळली नाहीत',
      catLength: 'लांबी',
      catWeight: 'वजन',
      catTemp: 'तापमान',
      catData: 'डेटा',
      swapTitle: 'एकके बदला',
      statMean: 'सरासरी',
      statMedian: 'मध्यम',
      statMode: 'बहुलक',
      statMin: 'किमान',
      statMax: 'कमाल',
      statRange: 'व्याप्ती',
      statModeNA: 'लागू नाही',
      statAdd: 'जोडा',
      statValuesLabel: 'मूल्ये',
      statNoData: 'अद्याप डेटा नाही',
      historyLabel: 'इतिहास',
      clearLabel: 'साफ करा',
      noHistory: 'अद्याप इतिहास नाही',
      error: 'त्रुटी',
      themeToggleTitle: 'थीम बदला',
      historyToggleTitle: 'इतिहास दाखवा',
      langToggleTitle: 'भाषा बदला',
      deg: 'अंश',
      rad: 'रेडियन',
      langButton: 'मर',
    },
  };

  const state = {
    expression: '',
    justEvaluated: false,
    memory: parseFloat(localStorage.getItem('calc-memory')) || 0,
    isDegrees: true,
    language: localStorage.getItem('calc-lang') || 'en',
    history: JSON.parse(localStorage.getItem('calc-history') || '[]'),
  };

  let lastAnswer = 0;

  function t(key) {
    return translations[state.language][key];
  }

  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

  function localizeDigits(str) {
    if (state.language !== 'mr') return String(str);
    return String(str).replace(/[0-9]/g, (d) => devanagariDigits[d]);
  }

  function render() {
    const exprDisplay = state.expression
      .replace(/\*/g, '×')
      .replace(/\//g, '÷') || '';
    expressionEl.textContent = localizeDigits(exprDisplay);
    const resultDisplay = state.expression === '' ? '0' : liveEvaluate();
    resultEl.textContent = localizeDigits(resultDisplay);
    memoryIndicator.textContent = state.memory !== 0 ? 'M' : '';
    degRadBtn.textContent = state.isDegrees ? t('deg') : t('rad');
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const label = t(el.dataset.i18nTitle);
      el.title = label;
      el.setAttribute('aria-label', label);
    });
    langToggle.textContent = t('langButton');
    document.querySelectorAll('.key[data-action="num"], .key[data-action="progdigit"], .key[data-action="convdigit"], .key[data-action="statdigit"], .key[data-action="graphdigit"]').forEach((btn) => {
      btn.textContent = localizeDigits(btn.dataset.value);
    });
    renderHistory();
    if (isProgrammerMode()) renderProg();
    else if (isConverterMode()) renderConv();
    else if (isStatisticsMode()) renderStat();
    else if (isGraphingMode()) { renderGraphDisplay(); drawGraph(); }
    else render();
  }

  function liveEvaluate() {
    try {
      const value = evaluateExpression(state.expression);
      if (value === null || Number.isNaN(value)) return state.expression.replace(/\*/g, '×').replace(/\//g, '÷');
      return formatNumber(value);
    } catch (e) {
      return state.expression.replace(/\*/g, '×').replace(/\//g, '÷');
    }
  }

  function formatNumber(n) {
    if (!isFinite(n)) return t('error');
    const rounded = Math.round((n + Number.EPSILON) * 1e10) / 1e10;
    if (Math.abs(rounded) > 1e15 || (Math.abs(rounded) < 1e-9 && rounded !== 0)) {
      return rounded.toExponential(6);
    }
    return rounded.toLocaleString('en-US', { maximumFractionDigits: 10 });
  }

  // ---------- Programmer mode (base conversion + bitwise ops) ----------
  const savedProgBase = parseInt(localStorage.getItem('calc-prog-base'), 10);
  const prog = {
    base: [2, 8, 10, 16].includes(savedProgBase) ? savedProgBase : 10,
    value: 0,
    entry: '0',
    pendingOp: null,
    pendingValue: null,
    justEvaluated: true,
  };

  const progOpSymbols = {
    add: '+', sub: '−', mul: '×', div: '÷', mod: 'MOD',
    and: 'AND', or: 'OR', xor: 'XOR', lsh: '<<', rsh: '>>',
  };

  function isProgrammerMode() {
    return calculator.classList.contains('programmer');
  }

  function maskInt32(n) {
    return n | 0;
  }

  function unsignedBaseStr(n, base) {
    return (n >>> 0).toString(base).toUpperCase();
  }

  function progValueStr(n, base) {
    return base === 10 ? String(n) : unsignedBaseStr(n, base);
  }

  function isDigitValidForBase(ch, base) {
    const val = parseInt(ch, 16);
    return !isNaN(val) && val < base;
  }

  const progMaxLen = { 2: 32, 8: 11, 10: 10, 16: 8 };

  function progApplyOp(op, a, b) {
    switch (op) {
      case 'add': return maskInt32(a + b);
      case 'sub': return maskInt32(a - b);
      case 'mul': return maskInt32(a * b);
      case 'div': if (b === 0) throw new Error('div0'); return maskInt32(Math.trunc(a / b));
      case 'mod': if (b === 0) throw new Error('div0'); return maskInt32(a % b);
      case 'and': return maskInt32(a & b);
      case 'or': return maskInt32(a | b);
      case 'xor': return maskInt32(a ^ b);
      case 'lsh': return maskInt32(a << (b & 31));
      case 'rsh': return maskInt32(a >> (b & 31));
      default: throw new Error('unknown op');
    }
  }

  function renderProg() {
    expressionEl.textContent = prog.pendingOp
      ? localizeDigits(`${progValueStr(prog.pendingValue, prog.base)} ${progOpSymbols[prog.pendingOp]}`)
      : '';
    resultEl.textContent = localizeDigits(prog.entry || '0');
    memoryIndicator.textContent = state.memory !== 0 ? 'M' : '';
    convHexEl.textContent = localizeDigits(unsignedBaseStr(prog.value, 16));
    convDecEl.textContent = localizeDigits(String(prog.value));
    convOctEl.textContent = localizeDigits(unsignedBaseStr(prog.value, 8));
    convBinEl.textContent = localizeDigits(unsignedBaseStr(prog.value, 2));
  }

  function progShowError() {
    resultEl.textContent = t('error');
    prog.entry = '0';
    prog.value = 0;
    prog.pendingOp = null;
    prog.pendingValue = null;
    prog.justEvaluated = true;
  }

  function progAppendDigit(ch) {
    if (!isDigitValidForBase(ch === '00' ? '0' : ch, prog.base)) return;
    if (prog.justEvaluated) {
      prog.entry = '';
      prog.justEvaluated = false;
    }
    const maxLen = progMaxLen[prog.base];
    if (prog.entry.length >= maxLen) return;
    prog.entry = (prog.entry === '0' ? '' : prog.entry) + ch;
    if (prog.entry.length > maxLen) prog.entry = prog.entry.slice(0, maxLen);
    prog.value = maskInt32(parseInt(prog.entry || '0', prog.base));
    renderProg();
  }

  function progClearAll() {
    prog.entry = '0';
    prog.value = 0;
    prog.pendingOp = null;
    prog.pendingValue = null;
    prog.justEvaluated = false;
    renderProg();
  }

  function progClearEntry() {
    prog.entry = '0';
    prog.value = 0;
    renderProg();
  }

  function progBackspace() {
    if (prog.justEvaluated) { progClearAll(); return; }
    prog.entry = prog.entry.slice(0, -1) || '0';
    prog.value = maskInt32(parseInt(prog.entry, prog.base));
    renderProg();
  }

  function progSetOperator(op) {
    if (prog.pendingOp && !prog.justEvaluated) {
      try {
        prog.value = progApplyOp(prog.pendingOp, prog.pendingValue, prog.value);
      } catch (e) {
        progShowError();
        return;
      }
    }
    prog.pendingValue = prog.value;
    prog.pendingOp = op;
    prog.entry = progValueStr(prog.value, prog.base);
    prog.justEvaluated = true;
    renderProg();
  }

  function progApplyNot() {
    prog.value = maskInt32(~prog.value);
    prog.entry = progValueStr(prog.value, prog.base);
    prog.justEvaluated = true;
    renderProg();
  }

  function progEquals() {
    if (prog.pendingOp === null) return;
    try {
      prog.value = progApplyOp(prog.pendingOp, prog.pendingValue, prog.value);
    } catch (e) {
      progShowError();
      return;
    }
    prog.entry = progValueStr(prog.value, prog.base);
    prog.pendingOp = null;
    prog.pendingValue = null;
    prog.justEvaluated = true;
    lastAnswer = prog.value;
    renderProg();
  }

  function insertAnsProg() {
    prog.value = maskInt32(Math.trunc(lastAnswer));
    prog.entry = progValueStr(prog.value, prog.base);
    prog.justEvaluated = true;
    renderProg();
  }

  function saveMemory() {
    localStorage.setItem('calc-memory', String(state.memory));
  }

  function progMemoryClear() { state.memory = 0; saveMemory(); renderProg(); }
  function progMemoryRecall() {
    prog.value = maskInt32(state.memory);
    prog.entry = progValueStr(prog.value, prog.base);
    prog.justEvaluated = true;
    renderProg();
  }
  function progMemoryAdd() {
    state.memory = maskInt32(state.memory + prog.value);
    saveMemory();
    flashKey('mplus');
    renderProg();
  }
  function progMemorySubtract() {
    state.memory = maskInt32(state.memory - prog.value);
    saveMemory();
    flashKey('mminus');
    renderProg();
  }

  function updateBaseTabsUI() {
    document.querySelectorAll('.base-btn').forEach((btn) => {
      btn.classList.toggle('active', parseInt(btn.dataset.base, 10) === prog.base);
    });
  }

  function updateDigitAvailability() {
    document.querySelectorAll('.key[data-action="progdigit"]').forEach((btn) => {
      const val = btn.dataset.value;
      btn.disabled = val === '00' ? false : !isDigitValidForBase(val, prog.base);
    });
  }

  baseTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.base-btn');
    if (!btn) return;
    const newBase = parseInt(btn.dataset.base, 10);
    if (newBase === prog.base) return;
    prog.base = newBase;
    prog.entry = progValueStr(prog.value, prog.base);
    localStorage.setItem('calc-prog-base', String(prog.base));
    updateBaseTabsUI();
    updateDigitAvailability();
    renderProg();
  });

  // ---------- Converter mode (units) ----------
  const unitDefs = {
    length: {
      units: { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
      labels: { mm: 'Millimeter', cm: 'Centimeter', m: 'Meter', km: 'Kilometer', in: 'Inch', ft: 'Foot', yd: 'Yard', mi: 'Mile' },
    },
    weight: {
      units: { mg: 0.001, g: 1, kg: 1000, oz: 28.3495, lb: 453.592, t: 1000000 },
      labels: { mg: 'Milligram', g: 'Gram', kg: 'Kilogram', oz: 'Ounce', lb: 'Pound', t: 'Tonne' },
    },
    temperature: {
      labels: { c: 'Celsius', f: 'Fahrenheit', k: 'Kelvin' },
    },
    data: {
      units: { b: 0.125, B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 },
      labels: { b: 'Bit', B: 'Byte', KB: 'Kilobyte', MB: 'Megabyte', GB: 'Gigabyte', TB: 'Terabyte' },
    },
  };

  const convCategoryDefaults = {
    length: ['m', 'ft'],
    weight: ['kg', 'lb'],
    temperature: ['c', 'f'],
    data: ['MB', 'GB'],
  };

  const conv = {
    category: 'length',
    fromUnit: 'm',
    toUnit: 'ft',
    entry: '0',
    justEntered: false,
  };

  function isConverterMode() {
    return calculator.classList.contains('converter');
  }

  function toCelsius(value, unit) {
    if (unit === 'c') return value;
    if (unit === 'f') return (value - 32) * 5 / 9;
    return value - 273.15; // kelvin
  }

  function fromCelsius(celsius, unit) {
    if (unit === 'c') return celsius;
    if (unit === 'f') return celsius * 9 / 5 + 32;
    return celsius + 273.15; // kelvin
  }

  function convertValue(value, category, from, to) {
    if (category === 'temperature') return fromCelsius(toCelsius(value, from), to);
    const factors = unitDefs[category].units;
    return value * factors[from] / factors[to];
  }

  function convPlainNumber(n) {
    if (!isFinite(n)) return '0';
    const rounded = Math.round((n + Number.EPSILON) * 1e8) / 1e8;
    return String(rounded);
  }

  function populateUnitSelectors() {
    const def = unitDefs[conv.category];
    const options = Object.keys(def.labels)
      .map((key) => `<option value="${key}">${def.labels[key]}</option>`)
      .join('');
    fromUnitSelect.innerHTML = options;
    toUnitSelect.innerHTML = options;
    fromUnitSelect.value = conv.fromUnit;
    toUnitSelect.value = conv.toUnit;
  }

  function renderConv() {
    const numeric = parseFloat(conv.entry) || 0;
    const converted = convertValue(numeric, conv.category, conv.fromUnit, conv.toUnit);
    expressionEl.textContent = localizeDigits(`${conv.entry} ${conv.fromUnit}`);
    resultEl.textContent = localizeDigits(`${formatNumber(converted)} ${conv.toUnit}`);
    memoryIndicator.textContent = '';
  }

  function setCategory(category) {
    conv.category = category;
    [conv.fromUnit, conv.toUnit] = convCategoryDefaults[category];
    conv.entry = '0';
    conv.justEntered = false;
    populateUnitSelectors();
    renderConv();
  }

  function convAppendDigit(ch) {
    if (conv.justEntered) {
      conv.entry = '';
      conv.justEntered = false;
    }
    if (conv.entry.replace(/[-.]/g, '').length >= 15) return;
    conv.entry = (conv.entry === '0' ? '' : conv.entry) + ch;
    renderConv();
  }

  function convAppendDecimal() {
    if (conv.justEntered) {
      conv.entry = '0';
      conv.justEntered = false;
    }
    if (conv.entry.includes('.')) return;
    conv.entry += '.';
    renderConv();
  }

  function convToggleSign() {
    conv.entry = conv.entry.startsWith('-') ? conv.entry.slice(1) : (conv.entry === '0' ? '0' : '-' + conv.entry);
    renderConv();
  }

  function convClearAll() {
    conv.entry = '0';
    conv.justEntered = false;
    renderConv();
  }

  function convClearEntry() {
    conv.entry = '0';
    renderConv();
  }

  function convBackspace() {
    if (conv.justEntered) { convClearAll(); return; }
    conv.entry = conv.entry.slice(0, -1) || '0';
    renderConv();
  }

  function convSwapUnits() {
    const numeric = parseFloat(conv.entry) || 0;
    const converted = convertValue(numeric, conv.category, conv.fromUnit, conv.toUnit);
    [conv.fromUnit, conv.toUnit] = [conv.toUnit, conv.fromUnit];
    conv.entry = convPlainNumber(converted);
    populateUnitSelectors();
    renderConv();
  }

  function insertAnsConv() {
    conv.entry = convPlainNumber(lastAnswer);
    conv.justEntered = true;
    renderConv();
  }

  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;
    document.querySelectorAll('.category-btn').forEach((b) => b.classList.toggle('active', b === btn));
    setCategory(btn.dataset.category);
  });

  fromUnitSelect.addEventListener('change', () => {
    conv.fromUnit = fromUnitSelect.value;
    renderConv();
  });

  toUnitSelect.addEventListener('change', () => {
    conv.toUnit = toUnitSelect.value;
    renderConv();
  });

  swapUnitsBtn.addEventListener('click', convSwapUnits);

  // ---------- Statistics mode ----------
  const stat = {
    data: JSON.parse(localStorage.getItem('calc-stat-data') || '[]'),
    entry: '0',
    justEntered: false,
  };

  function isStatisticsMode() {
    return calculator.classList.contains('statistics');
  }

  function medianOf(sortedArr) {
    const len = sortedArr.length;
    if (len === 0) return null;
    const mid = Math.floor(len / 2);
    return len % 2 === 0 ? (sortedArr[mid - 1] + sortedArr[mid]) / 2 : sortedArr[mid];
  }

  function computeStats() {
    const data = stat.data;
    const n = data.length;
    if (n === 0) {
      return {
        n: 0, sum: 0, mean: 0, popStd: 0, sampleStd: null, min: 0, max: 0,
        median: 0, mode: [], range: 0, q1: null, q3: null, iqr: null,
      };
    }
    const sum = data.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const sqDiffSum = data.reduce((a, b) => a + (b - mean) ** 2, 0);
    const popStd = Math.sqrt(sqDiffSum / n);
    const sampleStd = n > 1 ? Math.sqrt(sqDiffSum / (n - 1)) : null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const sorted = [...data].sort((a, b) => a - b);
    const median = medianOf(sorted);
    const freq = new Map();
    data.forEach((v) => freq.set(v, (freq.get(v) || 0) + 1));
    let maxFreq = 0;
    freq.forEach((c) => { if (c > maxFreq) maxFreq = c; });
    const mode = maxFreq > 1
      ? [...freq.entries()].filter(([, c]) => c === maxFreq).map(([v]) => v).sort((a, b) => a - b)
      : [];
    const halfLen = Math.floor(n / 2);
    const lowerHalf = sorted.slice(0, halfLen);
    const upperHalf = n % 2 === 0 ? sorted.slice(halfLen) : sorted.slice(halfLen + 1);
    const q1 = medianOf(lowerHalf);
    const q3 = medianOf(upperHalf);
    const iqr = q1 !== null && q3 !== null ? q3 - q1 : null;
    return { n, sum, mean, popStd, sampleStd, min, max, median, mode, range: max - min, q1, q3, iqr };
  }

  function renderStatChips() {
    statChipsEl.innerHTML = '';
    if (stat.data.length === 0) {
      statChipsEl.innerHTML = `<span class="stat-chips-empty">${t('statNoData')}</span>`;
      return;
    }
    stat.data.forEach((val, idx) => {
      const chip = document.createElement('span');
      chip.className = 'stat-chip';
      const valueSpan = document.createElement('span');
      valueSpan.textContent = localizeDigits(formatNumber(val));
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', 'Remove');
      removeBtn.addEventListener('click', () => {
        stat.data.splice(idx, 1);
        saveStatData();
        renderStat();
      });
      chip.appendChild(valueSpan);
      chip.appendChild(removeBtn);
      statChipsEl.appendChild(chip);
    });
  }

  function renderStat() {
    const s = computeStats();
    expressionEl.textContent = `${localizeDigits(String(s.n))} ${t('statValuesLabel')}`;
    resultEl.textContent = localizeDigits(stat.entry || '0');
    memoryIndicator.textContent = '';
    statNEl.textContent = localizeDigits(String(s.n));
    statSumEl.textContent = localizeDigits(formatNumber(s.sum));
    statMeanEl.textContent = localizeDigits(formatNumber(s.mean));
    statPStdEl.textContent = localizeDigits(formatNumber(s.popStd));
    statSStdEl.textContent = s.sampleStd === null ? '—' : localizeDigits(formatNumber(s.sampleStd));
    statMinEl.textContent = localizeDigits(formatNumber(s.min));
    statMaxEl.textContent = localizeDigits(formatNumber(s.max));
    statMedianEl.textContent = localizeDigits(formatNumber(s.median));
    statModeEl.textContent = s.mode.length === 0
      ? t('statModeNA')
      : localizeDigits(s.mode.map((m) => formatNumber(m)).join(', '));
    statRangeEl.textContent = localizeDigits(formatNumber(s.range));
    statQ1El.textContent = s.q1 === null ? '—' : localizeDigits(formatNumber(s.q1));
    statQ3El.textContent = s.q3 === null ? '—' : localizeDigits(formatNumber(s.q3));
    statIQREl.textContent = s.iqr === null ? '—' : localizeDigits(formatNumber(s.iqr));
    renderStatChips();
  }

  function statAppendDigit(ch) {
    if (stat.justEntered) {
      stat.entry = '';
      stat.justEntered = false;
    }
    if (stat.entry.replace(/[-.]/g, '').length >= 15) return;
    stat.entry = (stat.entry === '0' ? '' : stat.entry) + ch;
    renderStat();
  }

  function statAppendDecimal() {
    if (stat.justEntered) {
      stat.entry = '0';
      stat.justEntered = false;
    }
    if (stat.entry.includes('.')) return;
    stat.entry += '.';
    renderStat();
  }

  function statToggleSign() {
    stat.entry = stat.entry.startsWith('-') ? stat.entry.slice(1) : (stat.entry === '0' ? '0' : '-' + stat.entry);
    renderStat();
  }

  function saveStatData() {
    localStorage.setItem('calc-stat-data', JSON.stringify(stat.data));
  }

  function statClearAll() {
    stat.data = [];
    stat.entry = '0';
    stat.justEntered = false;
    saveStatData();
    renderStat();
  }

  function statClearEntry() {
    stat.entry = '0';
    renderStat();
  }

  function statBackspace() {
    if (stat.justEntered) { statClearAll(); return; }
    stat.entry = stat.entry.slice(0, -1) || '0';
    renderStat();
  }

  function statAddEntry() {
    const value = parseFloat(stat.entry) || 0;
    stat.data.push(value);
    stat.entry = '0';
    stat.justEntered = false;
    saveStatData();
    renderStat();
  }

  function insertAnsStat() {
    stat.entry = convPlainNumber(lastAnswer);
    stat.justEntered = true;
    renderStat();
  }

  // ---------- Safe expression parser (recursive descent) ----------
  function evaluateExpression(expr, scope) {
    const prepped = expr
      .replace(/π/g, 'pi')
      .replace(/e(?![a-zA-Z])/g, 'E_CONST');
    const tokens = tokenize(prepped);
    const parser = new Parser(tokens, scope);
    const value = parser.parseExpression();
    parser.expectEnd();
    return value;
  }

  function tokenize(str) {
    const tokens = [];
    let i = 0;
    const funcs = ['sin', 'cos', 'tan', 'log', 'ln', 'sqrt'];
    while (i < str.length) {
      const ch = str[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (/[0-9.]/.test(ch)) {
        let num = '';
        while (i < str.length && /[0-9.]/.test(str[i])) { num += str[i]; i++; }
        tokens.push({ type: 'num', value: parseFloat(num) });
        continue;
      }
      let matchedFunc = funcs.find(f => str.startsWith(f, i));
      if (matchedFunc) {
        tokens.push({ type: 'func', value: matchedFunc });
        i += matchedFunc.length;
        continue;
      }
      if (str.startsWith('pi', i)) {
        tokens.push({ type: 'num', value: Math.PI });
        i += 2;
        continue;
      }
      if (str.startsWith('E_CONST', i)) {
        tokens.push({ type: 'num', value: Math.E });
        i += 7;
        continue;
      }
      if (ch === 'x') {
        tokens.push({ type: 'var', value: 'x' });
        i++;
        continue;
      }
      if ('+-*/^()%!'.includes(ch)) {
        tokens.push({ type: 'op', value: ch });
        i++;
        continue;
      }
      throw new Error('Unexpected character: ' + ch);
    }
    return tokens;
  }

  class Parser {
    constructor(tokens, scope) {
      this.tokens = tokens;
      this.pos = 0;
      this.scope = scope || {};
    }
    peek() { return this.tokens[this.pos]; }
    next() { return this.tokens[this.pos++]; }
    expectEnd() {
      if (this.pos < this.tokens.length) throw new Error('Unexpected trailing tokens');
    }
    parseExpression() { return this.parseAddSub(); }
    parseAddSub() {
      let left = this.parseMulDiv();
      while (this.peek() && this.peek().type === 'op' && (this.peek().value === '+' || this.peek().value === '-')) {
        const op = this.next().value;
        const right = this.parseMulDiv();
        left = op === '+' ? left + right : left - right;
      }
      return left;
    }
    parseMulDiv() {
      let left = this.parsePow();
      while (this.peek() && this.peek().type === 'op' && (this.peek().value === '*' || this.peek().value === '/' || this.peek().value === '%')) {
        const op = this.next().value;
        const right = this.parsePow();
        if (op === '*') left = left * right;
        else if (op === '/') left = left / right;
        else left = left % right;
      }
      return left;
    }
    parsePow() {
      let left = this.parseUnary();
      if (this.peek() && this.peek().type === 'op' && this.peek().value === '^') {
        this.next();
        const right = this.parsePow();
        return Math.pow(left, right);
      }
      return left;
    }
    parseUnary() {
      if (this.peek() && this.peek().type === 'op' && this.peek().value === '-') {
        this.next();
        return -this.parseUnary();
      }
      if (this.peek() && this.peek().type === 'op' && this.peek().value === '+') {
        this.next();
        return this.parseUnary();
      }
      return this.parsePostfix();
    }
    parsePostfix() {
      let value = this.parseAtom();
      while (this.peek() && this.peek().type === 'op' && this.peek().value === '!') {
        this.next();
        value = factorial(value);
      }
      return value;
    }
    parseAtom() {
      const token = this.peek();
      if (!token) throw new Error('Unexpected end of expression');
      if (token.type === 'num') {
        this.next();
        return token.value;
      }
      if (token.type === 'var') {
        this.next();
        return this.scope[token.value] ?? 0;
      }
      if (token.type === 'func') {
        this.next();
        this.consumeOp('(');
        const arg = this.parseExpression();
        this.consumeOp(')');
        return applyFunc(token.value, arg);
      }
      if (token.type === 'op' && token.value === '(') {
        this.next();
        const value = this.parseExpression();
        this.consumeOp(')');
        return value;
      }
      throw new Error('Unexpected token: ' + JSON.stringify(token));
    }
    consumeOp(op) {
      const token = this.next();
      if (!token || token.type !== 'op' || token.value !== op) {
        throw new Error('Expected ' + op);
      }
    }
  }

  function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n > 170) return Infinity;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }

  function applyFunc(name, arg) {
    const toRad = (v) => state.isDegrees ? (v * Math.PI / 180) : v;
    switch (name) {
      case 'sin': return Math.sin(toRad(arg));
      case 'cos': return Math.cos(toRad(arg));
      case 'tan': return Math.tan(toRad(arg));
      case 'log': return Math.log10(arg);
      case 'ln': return Math.log(arg);
      case 'sqrt': return Math.sqrt(arg);
      default: throw new Error('Unknown function: ' + name);
    }
  }

  // ---------- Graphing mode ----------
  const graphState = {
    expression: localStorage.getItem('calc-graph-expr') || 'sin(x)',
    xMin: -10, xMax: 10, yMin: -10, yMax: 10,
    roots: [],
    rootsSearched: false,
    rootsError: false,
    trace: null,
  };

  function isGraphingMode() {
    return calculator.classList.contains('graphing');
  }

  function renderGraphExpr() {
    expressionEl.textContent = `y = ${localizeDigits(graphState.expression || '')}`;
  }

  function evalGraphAt(dataX) {
    const wasDegrees = state.isDegrees;
    state.isDegrees = false;
    try {
      return evaluateExpression(graphState.expression, { x: dataX });
    } catch (e) {
      return NaN;
    } finally {
      state.isDegrees = wasDegrees;
    }
  }

  function renderGraphResult() {
    if (graphState.trace) {
      const { x, y, slope } = graphState.trace;
      const xStr = localizeDigits(formatNumber(Math.round(x * 1e4) / 1e4));
      if (!isFinite(y)) {
        resultEl.textContent = `x=${xStr}, y=${t('error')}`;
        return;
      }
      const yStr = localizeDigits(formatNumber(Math.round(y * 1e4) / 1e4));
      const slopeStr = isFinite(slope) ? localizeDigits(formatNumber(Math.round(slope * 1e4) / 1e4)) : t('error');
      resultEl.textContent = `x=${xStr}, y=${yStr}, dy/dx=${slopeStr}`;
      return;
    }
    if (!graphState.rootsSearched) { resultEl.textContent = ''; return; }
    if (graphState.rootsError) { resultEl.textContent = t('error'); return; }
    if (graphState.roots.length === 0) { resultEl.textContent = t('graphNoRoots'); return; }
    const formatted = graphState.roots.map((r) => formatNumber(Math.round(r * 1e6) / 1e6)).join(', ');
    resultEl.textContent = localizeDigits(formatted);
  }

  function renderGraphDisplay() {
    renderGraphExpr();
    renderGraphResult();
  }

  function invalidateGraphRoots() {
    graphState.roots = [];
    graphState.rootsSearched = false;
    graphState.rootsError = false;
    graphState.trace = null;
  }

  function findGraphRoots() {
    const { xMin, xMax } = graphState;
    const samples = 400;
    const roots = [];
    let anyFinite = false;
    let prevX = null;
    let prevY = null;
    for (let i = 0; i <= samples; i++) {
      const x = xMin + ((xMax - xMin) * i) / samples;
      const y = evalGraphAt(x);
      if (isFinite(y)) anyFinite = true;
      if (prevX !== null && isFinite(prevY) && isFinite(y)) {
        if (prevY === 0) {
          roots.push(prevX);
        } else if ((prevY < 0 && y > 0) || (prevY > 0 && y < 0)) {
          let a = prevX, b = x, fa = prevY;
          for (let iter = 0; iter < 40; iter++) {
            const mid = (a + b) / 2;
            const fm = evalGraphAt(mid);
            if (!isFinite(fm)) break;
            if ((fa < 0 && fm < 0) || (fa > 0 && fm > 0)) { a = mid; fa = fm; } else { b = mid; }
          }
          roots.push((a + b) / 2);
        }
      }
      prevX = x; prevY = y;
    }
    const resolution = (xMax - xMin) / samples;
    const deduped = [];
    roots.forEach((r) => {
      if (!deduped.some((d) => Math.abs(d - r) < resolution)) deduped.push(r);
    });
    return { roots: deduped, anyFinite };
  }

  function graphFindRoots() {
    const { roots, anyFinite } = findGraphRoots();
    graphState.roots = roots;
    graphState.rootsSearched = true;
    graphState.rootsError = !anyFinite;
    graphState.trace = null;
    renderGraphDisplay();
    drawGraph();
  }

  function formatAxisNumber(n) {
    return String(Math.round(n * 100) / 100);
  }

  function resizeGraphCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = graphCanvas.getBoundingClientRect();
    graphCanvas.width = Math.max(1, Math.round(rect.width * dpr));
    graphCanvas.height = Math.max(1, Math.round(rect.height * dpr));
  }

  function drawGraph() {
    if (!isGraphingMode()) return;
    resizeGraphCanvas();
    const ctx = graphCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = graphCanvas.width / dpr;
    const h = graphCanvas.height / dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const styles = getComputedStyle(document.documentElement);
    const gridColor = styles.getPropertyValue('--panel-border').trim() || 'rgba(255,255,255,0.12)';
    const axisColor = styles.getPropertyValue('--text-dim').trim() || '#9aa0b4';
    const curveColor = styles.getPropertyValue('--accent-2').trim() || '#ff6fa5';

    const { xMin, xMax, yMin, yMax } = graphState;
    const xToPx = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const yToPx = (y) => h - ((y - yMin) / (yMax - yMin)) * h;

    const divisions = 10;
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= divisions; i++) {
      const gx = (w / divisions) * i;
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
      const gy = (h / divisions) * i;
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
    }

    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 1.5;
    if (xMin <= 0 && xMax >= 0) {
      const axisX = xToPx(0);
      ctx.beginPath(); ctx.moveTo(axisX, 0); ctx.lineTo(axisX, h); ctx.stroke();
    }
    if (yMin <= 0 && yMax >= 0) {
      const axisY = yToPx(0);
      ctx.beginPath(); ctx.moveTo(0, axisY); ctx.lineTo(w, axisY); ctx.stroke();
    }

    ctx.fillStyle = axisColor;
    ctx.font = '10px sans-serif';
    ctx.textBaseline = 'top';
    [xMin, 0, xMax].forEach((v) => {
      ctx.fillText(localizeDigits(formatAxisNumber(v)), Math.min(Math.max(xToPx(v) + 2, 2), w - 24), h - 12);
    });
    [yMin, 0, yMax].forEach((v) => {
      ctx.fillText(localizeDigits(formatAxisNumber(v)), 2, Math.min(Math.max(yToPx(v) - 10, 0), h - 12));
    });

    ctx.strokeStyle = curveColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let drawing = false;
    const samples = Math.max(100, Math.floor(w));
    const yRange = yMax - yMin;
    for (let i = 0; i <= samples; i++) {
      const dataX = xMin + ((xMax - xMin) * i) / samples;
      const y = evalGraphAt(dataX);
      if (!isFinite(y) || y < yMin - yRange * 2 || y > yMax + yRange * 2) {
        drawing = false;
        continue;
      }
      const px = xToPx(dataX);
      const py = yToPx(y);
      if (!drawing) { ctx.moveTo(px, py); drawing = true; } else { ctx.lineTo(px, py); }
    }
    ctx.stroke();

    if (graphState.roots.length) {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = curveColor;
      ctx.lineWidth = 1.5;
      graphState.roots.forEach((r) => {
        if (r < xMin || r > xMax) return;
        const px = xToPx(r);
        const py = yToPx(0);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    if (graphState.trace && isFinite(graphState.trace.y)) {
      const { x: tx, y: ty, slope } = graphState.trace;
      if (tx >= xMin && tx <= xMax && ty >= yMin && ty <= yMax) {
        if (isFinite(slope)) {
          const halfSpan = (xMax - xMin) * 0.15;
          const x1 = tx - halfSpan, x2 = tx + halfSpan;
          const y1t = ty - slope * halfSpan, y2t = ty + slope * halfSpan;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(xToPx(x1), yToPx(y1t));
          ctx.lineTo(xToPx(x2), yToPx(y2t));
          ctx.stroke();
        }
        const px = xToPx(tx);
        const py = yToPx(ty);
        ctx.strokeStyle = axisColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = curveColor;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }
  }

  function saveGraphExpr() {
    localStorage.setItem('calc-graph-expr', graphState.expression);
  }

  function graphAppend(value) {
    graphState.expression += value;
    invalidateGraphRoots();
    saveGraphExpr();
    renderGraphDisplay();
  }

  function graphBackspace() {
    graphState.expression = graphState.expression.slice(0, -1);
    invalidateGraphRoots();
    saveGraphExpr();
    renderGraphDisplay();
  }

  function graphClearAll() {
    graphState.expression = '';
    invalidateGraphRoots();
    saveGraphExpr();
    renderGraphDisplay();
  }

  function graphResetView() {
    graphState.xMin = -10; graphState.xMax = 10;
    graphState.yMin = -10; graphState.yMax = 10;
    drawGraph();
  }

  function graphZoom(factor) {
    const cx = (graphState.xMin + graphState.xMax) / 2;
    const cy = (graphState.yMin + graphState.yMax) / 2;
    const halfX = ((graphState.xMax - graphState.xMin) / 2) * factor;
    const halfY = ((graphState.yMax - graphState.yMin) / 2) * factor;
    graphState.xMin = cx - halfX; graphState.xMax = cx + halfX;
    graphState.yMin = cy - halfY; graphState.yMax = cy + halfY;
    drawGraph();
  }

  window.addEventListener('resize', () => {
    if (isGraphingMode()) drawGraph();
  });

  graphToolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.graph-tool-btn');
    if (!btn) return;
    handleAction(btn.dataset.action, btn.dataset.value);
  });

  function computeGraphSlope(x, y) {
    if (!isFinite(y)) return NaN;
    const range = graphState.xMax - graphState.xMin;
    const h = Math.max(range / 10000, 1e-6);
    const y1 = evalGraphAt(x - h);
    const y2 = evalGraphAt(x + h);
    if (!isFinite(y1) || !isFinite(y2)) return NaN;
    return (y2 - y1) / (2 * h);
  }

  graphCanvas.addEventListener('click', (e) => {
    if (!graphState.expression) return;
    const rect = graphCanvas.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const dataX = graphState.xMin + (pxX / rect.width) * (graphState.xMax - graphState.xMin);
    const y = evalGraphAt(dataX);
    graphState.trace = { x: dataX, y, slope: computeGraphSlope(dataX, y) };
    renderGraphDisplay();
    drawGraph();
  });

  // ---------- Input handling ----------
  function appendToExpression(value) {
    if (state.justEvaluated) {
      const startsWithOperator = /^[+\-*/^%]/.test(value);
      state.expression = startsWithOperator ? state.expression : '';
      state.justEvaluated = false;
    }
    state.expression += value;
    render();
  }

  function inputNumber(n) {
    appendToExpression(n);
  }

  function inputDecimal() {
    const parts = state.expression.split(/[+\-*/^%()]/);
    const last = parts[parts.length - 1];
    if (last.includes('.')) return;
    appendToExpression(last === '' ? '0.' : '.');
  }

  function inputOperator(op) {
    if (state.expression === '' && op !== '-') return;
    const last = state.expression.slice(-1);
    if ('+-*/^%'.includes(last)) {
      state.expression = state.expression.slice(0, -1) + op;
    } else {
      state.expression += op;
    }
    state.justEvaluated = false;
    render();
  }

  function clearAll() {
    state.expression = '';
    state.justEvaluated = false;
    render();
  }

  function clearEntry() {
    const match = state.expression.match(/(\d+\.?\d*|\.\d+)$/);
    if (match) {
      state.expression = state.expression.slice(0, -match[0].length);
    } else {
      state.expression = '';
    }
    render();
  }

  function backspace() {
    if (state.justEvaluated) { clearAll(); return; }
    state.expression = state.expression.slice(0, -1);
    render();
  }

  function toggleSign() {
    const match = state.expression.match(/(-?\d+\.?\d*|\.\d+)$/);
    if (!match) return;
    const numStr = match[0];
    const start = state.expression.length - numStr.length;
    const toggled = numStr.startsWith('-') ? numStr.slice(1) : '-' + numStr;
    state.expression = state.expression.slice(0, start) + toggled;
    render();
  }

  function percent() {
    try {
      const value = evaluateExpression(state.expression);
      state.expression = formatNumber(value / 100);
      render();
    } catch (e) { /* ignore */ }
  }

  function equals() {
    if (state.expression === '') return;
    try {
      const value = evaluateExpression(state.expression);
      const formatted = formatNumber(value);
      addHistory(state.expression, formatted);
      state.expression = formatted;
      state.justEvaluated = true;
      lastAnswer = value;
      render();
    } catch (e) {
      resultEl.textContent = t('error');
    }
  }

  function insertAnsStandard() {
    appendToExpression(formatNumber(lastAnswer).replace(/,/g, ''));
  }

  function addFunction(fnToken) {
    appendToExpression(fnToken);
  }

  function addConstant(symbol) {
    appendToExpression(symbol === 'π' ? 'π' : 'e');
  }

  function squareValue() {
    try {
      const value = evaluateExpression(state.expression);
      state.expression = formatNumber(Math.pow(value, 2));
      state.justEvaluated = true;
      render();
    } catch (e) { /* ignore */ }
  }

  function sqrtValue() {
    appendToExpression('sqrt(');
  }

  function invValue() {
    try {
      const value = evaluateExpression(state.expression);
      state.expression = formatNumber(1 / value);
      state.justEvaluated = true;
      render();
    } catch (e) { /* ignore */ }
  }

  function factValue() {
    appendToExpression('!');
  }

  function powValue() {
    inputOperator('^');
  }

  // ---------- Memory ----------
  function memoryClear() { state.memory = 0; saveMemory(); render(); }
  function memoryRecall() { appendToExpression(formatNumber(state.memory).replace(/,/g, '')); }
  function memoryAdd() {
    try {
      state.memory += evaluateExpression(state.expression || resultEl.textContent.replace(/,/g, ''));
      saveMemory();
      flashKey('mplus');
      render();
    } catch (e) { /* ignore */ }
  }
  function memorySubtract() {
    try {
      state.memory -= evaluateExpression(state.expression || resultEl.textContent.replace(/,/g, ''));
      saveMemory();
      flashKey('mminus');
      render();
    } catch (e) { /* ignore */ }
  }

  function flashKey(action) {
    const btn = document.querySelector(`[data-action="${action}"]`);
    if (!btn) return;
    btn.classList.remove('flash');
    void btn.offsetWidth;
    btn.classList.add('flash');
  }

  // ---------- History ----------
  function addHistory(expr, res) {
    state.history.unshift({ expr, res });
    state.history = state.history.slice(0, 50);
    localStorage.setItem('calc-history', JSON.stringify(state.history));
    renderHistory();
  }

  function renderHistory() {
    historyList.innerHTML = '';
    if (state.history.length === 0) {
      historyList.innerHTML = `<li class="empty">${t('noHistory')}</li>`;
      return;
    }
    state.history.forEach(({ expr, res }) => {
      const li = document.createElement('li');
      const exprDisplay = localizeDigits(expr.replace(/\*/g, '×').replace(/\//g, '÷'));
      const resDisplay = localizeDigits(res);
      li.innerHTML = `<span class="h-expr">${exprDisplay}</span><span class="h-res">= ${resDisplay}</span>`;
      li.addEventListener('click', () => {
        state.expression = res.replace(/,/g, '');
        state.justEvaluated = true;
        render();
      });
      historyList.appendChild(li);
    });
  }

  // ---------- Event wiring ----------
  function handleAction(action, value) {
    switch (action) {
      case 'num': inputNumber(value); break;
      case 'decimal': inputDecimal(); break;
      case 'operator': inputOperator(value); break;
      case 'clear':
        if (isProgrammerMode()) progClearAll();
        else if (isConverterMode()) convClearAll();
        else if (isStatisticsMode()) statClearAll();
        else clearAll();
        break;
      case 'clear-entry':
        if (isProgrammerMode()) progClearEntry();
        else if (isConverterMode()) convClearEntry();
        else if (isStatisticsMode()) statClearEntry();
        else clearEntry();
        break;
      case 'backspace':
        if (isProgrammerMode()) progBackspace();
        else if (isConverterMode()) convBackspace();
        else if (isStatisticsMode()) statBackspace();
        else backspace();
        break;
      case 'sign': toggleSign(); break;
      case 'percent': percent(); break;
      case 'equals': equals(); break;
      case 'fn': addFunction(value); break;
      case 'const': addConstant(value); break;
      case 'pow2': squareValue(); break;
      case 'pow': powValue(); break;
      case 'sqrt': sqrtValue(); break;
      case 'inv': invValue(); break;
      case 'fact': factValue(); break;
      case 'paren': appendToExpression(value); break;
      case 'deg-rad': state.isDegrees = !state.isDegrees; render(); break;
      case 'mc': isProgrammerMode() ? progMemoryClear() : memoryClear(); break;
      case 'mr': isProgrammerMode() ? progMemoryRecall() : memoryRecall(); break;
      case 'mplus': isProgrammerMode() ? progMemoryAdd() : memoryAdd(); break;
      case 'mminus': isProgrammerMode() ? progMemorySubtract() : memorySubtract(); break;
      case 'progdigit': progAppendDigit(value); break;
      case 'bitop': value === 'not' ? progApplyNot() : progSetOperator(value); break;
      case 'progop': progSetOperator(value); break;
      case 'progequals': progEquals(); break;
      case 'convdigit': convAppendDigit(value); break;
      case 'convdecimal': convAppendDecimal(); break;
      case 'convsign': convToggleSign(); break;
      case 'statdigit': statAppendDigit(value); break;
      case 'statdecimal': statAppendDecimal(); break;
      case 'statsign': statToggleSign(); break;
      case 'statadd': statAddEntry(); break;
      case 'ans':
        if (isProgrammerMode()) insertAnsProg();
        else if (isConverterMode()) insertAnsConv();
        else if (isStatisticsMode()) insertAnsStat();
        else insertAnsStandard();
        break;
      case 'graphdigit': graphAppend(value); break;
      case 'graphdecimal': graphAppend('.'); break;
      case 'graphop': graphAppend(value); break;
      case 'graphfn': graphAppend(value); break;
      case 'graphconst': graphAppend(value); break;
      case 'graphparen': graphAppend(value); break;
      case 'graphvar': graphAppend('x'); break;
      case 'graphclear': graphClearAll(); break;
      case 'graphbackspace': graphBackspace(); break;
      case 'graphplot': drawGraph(); break;
      case 'graphreset': graphResetView(); break;
      case 'graphzoomin': graphZoom(0.7); break;
      case 'graphzoomout': graphZoom(1 / 0.7); break;
      case 'graphfindroots': graphFindRoots(); break;
    }
  }

  [keys, sciRow, progRow, progKeys, convKeys, statKeys, graphRow, graphKeys].forEach(container => {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.key');
      if (!btn) return;
      handleAction(btn.dataset.action, btn.dataset.value);
    });
  });

  function switchToMode(mode) {
    modeButtons.forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    calculator.classList.toggle('scientific', mode === 'scientific');
    calculator.classList.toggle('programmer', mode === 'programmer');
    calculator.classList.toggle('converter', mode === 'converter');
    calculator.classList.toggle('statistics', mode === 'statistics');
    calculator.classList.toggle('graphing', mode === 'graphing');
    if (mode === 'programmer') {
      updateBaseTabsUI();
      updateDigitAvailability();
      renderProg();
    }
    if (mode === 'converter') {
      populateUnitSelectors();
      renderConv();
    }
    if (mode === 'statistics') {
      renderStat();
    }
    if (mode === 'graphing') {
      renderGraphDisplay();
      drawGraph();
    }
    localStorage.setItem('calc-active-mode', mode);
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchToMode(btn.dataset.mode));
  });

  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeToggle.textContent = next === 'light' ? '☀️' : '🌙';
    localStorage.setItem('calc-theme', next);
    if (isGraphingMode()) drawGraph();
  });

  historyToggle.addEventListener('click', () => {
    historyPanel.classList.toggle('open');
  });

  clearHistoryBtn.addEventListener('click', () => {
    state.history = [];
    localStorage.removeItem('calc-history');
    renderHistory();
  });

  langToggle.addEventListener('click', () => {
    state.language = state.language === 'en' ? 'mr' : 'en';
    localStorage.setItem('calc-lang', state.language);
    applyLanguage();
  });

  // ---------- Keyboard support ----------
  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (isProgrammerMode()) {
      if (/[0-9a-fA-F]/.test(key)) { progAppendDigit(key.toUpperCase()); return; }
      if (key === '+') { progSetOperator('add'); return; }
      if (key === '-') { progSetOperator('sub'); return; }
      if (key === '*') { progSetOperator('mul'); return; }
      if (key === '/') { progSetOperator('div'); return; }
      if (key === '%') { progSetOperator('mod'); return; }
      if (key === '&') { progSetOperator('and'); return; }
      if (key === '|') { progSetOperator('or'); return; }
      if (key === '^') { progSetOperator('xor'); return; }
      if (key === '~') { progApplyNot(); return; }
      if (key === 'Enter' || key === '=') { e.preventDefault(); progEquals(); return; }
      if (key === 'Backspace') { progBackspace(); return; }
      if (key === 'Escape') { progClearAll(); return; }
      return;
    }
    if (isConverterMode()) {
      if (/[0-9]/.test(key)) { convAppendDigit(key); return; }
      if (key === '.') { convAppendDecimal(); return; }
      if (key === '-') { convToggleSign(); return; }
      if (key === 'Backspace') { convBackspace(); return; }
      if (key === 'Escape') { convClearAll(); return; }
      return;
    }
    if (isStatisticsMode()) {
      if (/[0-9]/.test(key)) { statAppendDigit(key); return; }
      if (key === '.') { statAppendDecimal(); return; }
      if (key === '-') { statToggleSign(); return; }
      if (key === 'Backspace') { statBackspace(); return; }
      if (key === 'Escape') { statClearAll(); return; }
      if (key === 'Enter' || key === '=') { e.preventDefault(); statAddEntry(); return; }
      return;
    }
    if (isGraphingMode()) {
      if (/[0-9]/.test(key) || key === 'x' || key === '.' || '+-*/^()'.includes(key)) { graphAppend(key); return; }
      if (key === 'Backspace') { graphBackspace(); return; }
      if (key === 'Escape') { graphClearAll(); return; }
      if (key === 'Enter' || key === '=') { e.preventDefault(); drawGraph(); return; }
      return;
    }
    if (/[0-9]/.test(key)) { inputNumber(key); return; }
    if (key === '.') { inputDecimal(); return; }
    if (['+', '-', '*', '/', '^', '%'].includes(key)) { inputOperator(key); return; }
    if (key === '(' || key === ')') { appendToExpression(key); return; }
    if (key === 'Enter' || key === '=') { e.preventDefault(); equals(); return; }
    if (key === 'Backspace') { backspace(); return; }
    if (key === 'Escape') { clearAll(); return; }
    if (key === '!') { factValue(); return; }
  });

  // ---------- Init ----------
  (function init() {
    const savedTheme = localStorage.getItem('calc-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    populateUnitSelectors();
    applyLanguage();
    const validModes = ['standard', 'scientific', 'programmer', 'converter', 'statistics', 'graphing'];
    const savedMode = localStorage.getItem('calc-active-mode');
    if (validModes.includes(savedMode)) switchToMode(savedMode);
  })();
})();
