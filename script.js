(() => {
  const calculator = document.getElementById('calculator');
  const expressionEl = document.getElementById('expression');
  const resultEl = document.getElementById('result');
  const memoryIndicator = document.getElementById('memoryIndicator');
  const copyResultBtn = document.getElementById('copyResult');
  const keys = document.getElementById('keys');
  const sciRow = document.getElementById('sciRow');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const themeToggle = document.getElementById('themeToggle');
  const helpToggle = document.getElementById('helpToggle');
  const helpOverlay = document.getElementById('helpOverlay');
  const helpClose = document.getElementById('helpClose');
  const helpBody = document.getElementById('helpBody');
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
  const solverTabs = document.getElementById('solverTabs');
  const solverPanel = document.getElementById('solverPanel');
  const solverAEl = document.getElementById('solverA');
  const solverBEl = document.getElementById('solverB');
  const solverCEl = document.getElementById('solverC');
  const solverCRow = document.getElementById('solverCRow');
  const solverKeys = document.getElementById('solverKeys');
  const graphFnTabs = document.getElementById('graphFnTabs');
  const graphToolbar = document.getElementById('graphToolbar');
  const graphCanvasWrap = document.getElementById('graphCanvasWrap');
  const graphCanvas = document.getElementById('graphCanvas');
  const graphRow = document.getElementById('graphRow');
  const graphKeys = document.getElementById('graphKeys');
  const matrixToolbar = document.getElementById('matrixToolbar');
  const matrixPanel = document.getElementById('matrixPanel');
  const matrixKeys = document.getElementById('matrixKeys');

  const translations = {
    en: {
      title: 'Advanced Calculator',
      standard: 'Standard',
      scientific: 'Scientific',
      programmer: 'Programmer',
      converter: 'Converter',
      statistics: 'Statistics',
      solverMode: 'Solver',
      solverLinear: 'Linear',
      solverQuadratic: 'Quadratic',
      solverNext: 'Next',
      solverNoSolution: 'No solution',
      solverInfiniteSolutions: 'Infinite solutions',
      graphing: 'Graph',
      graphReset: 'Reset',
      graphZoomIn: 'Zoom +',
      graphZoomOut: 'Zoom −',
      graphPlot: 'Plot',
      graphFindRoots: 'Roots',
      graphNoRoots: 'No roots found',
      graphFindIntersect: 'Intersect',
      graphNoIntersections: 'No intersections found',
      graphNeedG: 'Enter g(x) first',
      matrixMode: 'Matrix',
      matrixDet: 'Det',
      matrixInv: 'Inverse',
      matrixNext: 'Next',
      matrixSingular: 'Singular matrix',
      catLength: 'Length',
      catWeight: 'Weight',
      catTemp: 'Temp',
      catData: 'Data',
      catArea: 'Area',
      catVolume: 'Volume',
      catSpeed: 'Speed',
      catTime: 'Time',
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
      helpToggleTitle: 'Keyboard shortcuts',
      helpTitle: 'Keyboard Shortcuts',
      copyResultTitle: 'Copy result',
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
      solverMode: 'सोडव',
      solverLinear: 'रेषीय',
      solverQuadratic: 'द्विघात',
      solverNext: 'पुढे',
      solverNoSolution: 'उपाय नाही',
      solverInfiniteSolutions: 'अनंत उपाय',
      graphing: 'आलेख',
      graphReset: 'रीसेट',
      graphZoomIn: 'झूम +',
      graphZoomOut: 'झूम −',
      graphPlot: 'आलेखा करा',
      graphFindRoots: 'मुळे',
      graphNoRoots: 'मुळे आढळली नाहीत',
      graphFindIntersect: 'छेदनबिंदू',
      graphNoIntersections: 'छेदनबिंदू आढळले नाहीत',
      graphNeedG: 'प्रथम g(x) टाका',
      matrixMode: 'मॅट्रिक्स',
      matrixDet: 'निर्धारक',
      matrixInv: 'व्यस्त',
      matrixNext: 'पुढे',
      matrixSingular: 'व्यस्त अस्तित्वात नाही',
      catLength: 'लांबी',
      catWeight: 'वजन',
      catTemp: 'तापमान',
      catData: 'डेटा',
      catArea: 'क्षेत्रफळ',
      catVolume: 'घनफळ',
      catSpeed: 'वेग',
      catTime: 'वेळ',
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
      helpToggleTitle: 'कीबोर्ड शॉर्टकट',
      helpTitle: 'कीबोर्ड शॉर्टकट',
      copyResultTitle: 'निकाल कॉपी करा',
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
    document.querySelectorAll('.key[data-action="num"], .key[data-action="progdigit"], .key[data-action="convdigit"], .key[data-action="statdigit"], .key[data-action="solverdigit"], .key[data-action="graphdigit"], .key[data-action="matrixdigit"]').forEach((btn) => {
      btn.textContent = localizeDigits(btn.dataset.value);
    });
    renderHistory();
    if (isProgrammerMode()) renderProg();
    else if (isConverterMode()) renderConv();
    else if (isStatisticsMode()) renderStat();
    else if (isSolverMode()) renderSolver();
    else if (isMatrixMode()) renderMatrix();
    else if (isGraphingMode()) { renderGraphDisplay(); drawGraph(); }
    else render();
    if (helpOverlay.classList.contains('open')) renderHelpContent();
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
    area: {
      units: { m2: 1, km2: 1000000, ft2: 0.09290304, acre: 4046.8564224, hectare: 10000, mi2: 2589988.110336 },
      labels: { m2: 'Square Meter', km2: 'Square Kilometer', ft2: 'Square Foot', acre: 'Acre', hectare: 'Hectare', mi2: 'Square Mile' },
    },
    volume: {
      units: { ml: 0.001, l: 1, m3: 1000, gal: 3.785411784, qt: 0.946352946, cup: 0.2365882365 },
      labels: { ml: 'Milliliter', l: 'Liter', m3: 'Cubic Meter', gal: 'Gallon', qt: 'Quart', cup: 'Cup' },
    },
    speed: {
      units: { mps: 1, kmh: 1000 / 3600, mph: 0.44704, knot: 0.5144444444, fts: 0.3048 },
      labels: { mps: 'Meter/sec', kmh: 'Km/hour', mph: 'Mile/hour', knot: 'Knot', fts: 'Foot/sec' },
    },
    time: {
      units: { sec: 1, min: 60, hour: 3600, day: 86400, week: 604800 },
      labels: { sec: 'Second', min: 'Minute', hour: 'Hour', day: 'Day', week: 'Week' },
    },
  };

  const convCategoryDefaults = {
    length: ['m', 'ft'],
    weight: ['kg', 'lb'],
    temperature: ['c', 'f'],
    data: ['MB', 'GB'],
    area: ['m2', 'ft2'],
    volume: ['l', 'gal'],
    speed: ['kmh', 'mph'],
    time: ['min', 'sec'],
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

  // ---------- Equation solver mode ----------
  const savedSolverCoeffs = JSON.parse(localStorage.getItem('calc-solver-coeffs') || 'null');
  const solver = {
    type: localStorage.getItem('calc-solver-type') === 'quadratic' ? 'quadratic' : 'linear',
    coeffs: savedSolverCoeffs || { a: '1', b: '0', c: '0' },
    activeField: 'a',
  };

  function isSolverMode() {
    return calculator.classList.contains('solver');
  }

  function solverFieldOrder() {
    return solver.type === 'quadratic' ? ['a', 'b', 'c'] : ['a', 'b'];
  }

  function saveSolver() {
    localStorage.setItem('calc-solver-type', solver.type);
    localStorage.setItem('calc-solver-coeffs', JSON.stringify(solver.coeffs));
  }

  function eqTerm(rawValue, suffix) {
    const v = parseFloat(rawValue) || 0;
    const sign = v < 0 ? '-' : '+';
    return ` ${sign} ${formatNumber(Math.abs(v))}${suffix}`;
  }

  function formatSolverEquation() {
    const { a, b, c } = solver.coeffs;
    const leadTerm = `${formatNumber(parseFloat(a) || 0)}x`;
    if (solver.type === 'quadratic') {
      return `${leadTerm}²${eqTerm(b, 'x')}${eqTerm(c, '')} = 0`;
    }
    return `${leadTerm}${eqTerm(b, '')} = 0`;
  }

  function computeSolverResult() {
    const a = parseFloat(solver.coeffs.a) || 0;
    const b = parseFloat(solver.coeffs.b) || 0;
    if (solver.type === 'linear') {
      if (a === 0) return b === 0 ? { kind: 'infinite' } : { kind: 'none' };
      return { kind: 'single', x: -b / a };
    }
    const c = parseFloat(solver.coeffs.c) || 0;
    if (a === 0) {
      if (b === 0) return c === 0 ? { kind: 'infinite' } : { kind: 'none' };
      return { kind: 'single', x: -c / b };
    }
    const d = b * b - 4 * a * c;
    if (d === 0) return { kind: 'repeated', x: -b / (2 * a) };
    if (d > 0) {
      const sqrtD = Math.sqrt(d);
      return { kind: 'two', x1: (-b + sqrtD) / (2 * a), x2: (-b - sqrtD) / (2 * a) };
    }
    return { kind: 'complex', re: -b / (2 * a), im: Math.sqrt(-d) / (2 * a) };
  }

  function formatSolverResult(res) {
    switch (res.kind) {
      case 'single': return `x = ${formatNumber(res.x)}`;
      case 'repeated': return `x₁ = x₂ = ${formatNumber(res.x)}`;
      case 'two': return `x₁ = ${formatNumber(res.x1)}, x₂ = ${formatNumber(res.x2)}`;
      case 'complex': return `x = ${formatNumber(res.re)} ± ${formatNumber(res.im)}i`;
      case 'none': return t('solverNoSolution');
      case 'infinite': return t('solverInfiniteSolutions');
      default: return '';
    }
  }

  function renderSolver() {
    expressionEl.textContent = localizeDigits(formatSolverEquation());
    resultEl.textContent = localizeDigits(formatSolverResult(computeSolverResult()));
    memoryIndicator.textContent = '';
    solverAEl.textContent = localizeDigits(solver.coeffs.a);
    solverBEl.textContent = localizeDigits(solver.coeffs.b);
    solverCEl.textContent = localizeDigits(solver.coeffs.c);
    document.querySelectorAll('.solver-field').forEach((row) => {
      row.classList.toggle('active', row.dataset.field === solver.activeField);
    });
  }

  function updateSolverTabsUI() {
    document.querySelectorAll('.solver-type-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.type === solver.type);
    });
    solverCRow.style.display = solver.type === 'quadratic' ? '' : 'none';
  }

  function setSolverType(type) {
    solver.type = type;
    solver.activeField = 'a';
    updateSolverTabsUI();
    saveSolver();
    renderSolver();
  }

  function solverNextField() {
    const order = solverFieldOrder();
    const idx = order.indexOf(solver.activeField);
    solver.activeField = order[(idx + 1) % order.length];
    renderSolver();
  }

  function solverAppendDigit(ch) {
    const cur = solver.coeffs[solver.activeField];
    solver.coeffs[solver.activeField] = (cur === '0' ? '' : cur) + ch;
    saveSolver();
    renderSolver();
  }

  function solverAppendDecimal() {
    const cur = solver.coeffs[solver.activeField];
    if (cur.includes('.')) return;
    solver.coeffs[solver.activeField] = cur + '.';
    saveSolver();
    renderSolver();
  }

  function solverToggleSign() {
    const cur = solver.coeffs[solver.activeField];
    solver.coeffs[solver.activeField] = cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur);
    saveSolver();
    renderSolver();
  }

  function solverBackspace() {
    const cur = solver.coeffs[solver.activeField];
    solver.coeffs[solver.activeField] = cur.slice(0, -1) || '0';
    saveSolver();
    renderSolver();
  }

  function solverClearEntry() {
    solver.coeffs[solver.activeField] = '0';
    saveSolver();
    renderSolver();
  }

  function solverClearAll() {
    solver.coeffs = { a: '1', b: '0', c: '0' };
    solver.activeField = 'a';
    saveSolver();
    renderSolver();
  }

  function insertAnsSolver() {
    solver.coeffs[solver.activeField] = convPlainNumber(lastAnswer);
    saveSolver();
    renderSolver();
  }

  solverTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.solver-type-btn');
    if (!btn) return;
    setSolverType(btn.dataset.type);
  });

  solverPanel.addEventListener('click', (e) => {
    const row = e.target.closest('.solver-field');
    if (!row) return;
    solver.activeField = row.dataset.field;
    renderSolver();
  });

  // ---------- Matrix calculator mode (2x2) ----------
  const identity2 = () => [['1', '0'], ['0', '1']];
  const savedMatrixA = JSON.parse(localStorage.getItem('calc-matrix-a') || 'null');
  const savedMatrixB = JSON.parse(localStorage.getItem('calc-matrix-b') || 'null');
  const matrix = {
    entries: { a: savedMatrixA || identity2(), b: savedMatrixB || identity2() },
    activeMat: 'a',
    activeR: 0,
    activeC: 0,
    opLabel: '',
    resultText: '',
  };

  function isMatrixMode() {
    return calculator.classList.contains('matrix');
  }

  function saveMatrix() {
    localStorage.setItem('calc-matrix-a', JSON.stringify(matrix.entries.a));
    localStorage.setItem('calc-matrix-b', JSON.stringify(matrix.entries.b));
  }

  function matrixNumeric(mat) {
    return matrix.entries[mat].map((row) => row.map((v) => parseFloat(v) || 0));
  }

  function matrixAdd(A, B) {
    return A.map((row, i) => row.map((v, j) => v + B[i][j]));
  }
  function matrixSub(A, B) {
    return A.map((row, i) => row.map((v, j) => v - B[i][j]));
  }
  function matrixMul(A, B) {
    const result = [[0, 0], [0, 0]];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) result[i][j] += A[i][k] * B[k][j];
      }
    }
    return result;
  }
  function matrixDet(A) {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0];
  }
  function matrixInverse(A) {
    const d = matrixDet(A);
    if (d === 0) return null;
    return [[A[1][1] / d, -A[0][1] / d], [-A[1][0] / d, A[0][0] / d]];
  }

  function formatMatrixResult(M) {
    return `[${formatNumber(M[0][0])}, ${formatNumber(M[0][1])}; ${formatNumber(M[1][0])}, ${formatNumber(M[1][1])}]`;
  }

  function matrixCompute(op) {
    const A = matrixNumeric('a');
    const B = matrixNumeric('b');
    const activeLabel = matrix.activeMat === 'b' ? 'B' : 'A';
    const activeM = matrix.activeMat === 'b' ? B : A;
    switch (op) {
      case 'add':
        matrix.opLabel = 'A + B';
        matrix.resultText = formatMatrixResult(matrixAdd(A, B));
        break;
      case 'sub':
        matrix.opLabel = 'A − B';
        matrix.resultText = formatMatrixResult(matrixSub(A, B));
        break;
      case 'mul':
        matrix.opLabel = 'A × B';
        matrix.resultText = formatMatrixResult(matrixMul(A, B));
        break;
      case 'det':
        matrix.opLabel = `det(${activeLabel})`;
        matrix.resultText = formatNumber(matrixDet(activeM));
        break;
      case 'inv': {
        const inv = matrixInverse(activeM);
        matrix.opLabel = `${activeLabel}⁻¹`;
        matrix.resultText = inv ? formatMatrixResult(inv) : t('matrixSingular');
        break;
      }
    }
    renderMatrix();
  }

  function renderMatrixGrids() {
    document.querySelectorAll('.matrix-cell').forEach((el) => {
      const m = el.dataset.mat;
      const r = parseInt(el.dataset.r, 10);
      const c = parseInt(el.dataset.c, 10);
      el.textContent = localizeDigits(matrix.entries[m][r][c]);
      el.classList.toggle('active', matrix.activeMat === m && matrix.activeR === r && matrix.activeC === c);
    });
  }

  function renderMatrix() {
    renderMatrixGrids();
    expressionEl.textContent = localizeDigits(matrix.opLabel);
    resultEl.textContent = localizeDigits(matrix.resultText);
    memoryIndicator.textContent = '';
  }

  function matrixSetActiveCell(m, r, c) {
    matrix.activeMat = m;
    matrix.activeR = r;
    matrix.activeC = c;
    renderMatrix();
  }

  function matrixNextCell() {
    let { activeMat: m, activeR: r, activeC: c } = matrix;
    c += 1;
    if (c > 1) {
      c = 0;
      r += 1;
      if (r > 1) {
        r = 0;
        m = m === 'a' ? 'b' : 'a';
      }
    }
    matrix.activeMat = m;
    matrix.activeR = r;
    matrix.activeC = c;
    renderMatrix();
  }

  function matrixActiveCellValue() {
    return matrix.entries[matrix.activeMat][matrix.activeR][matrix.activeC];
  }

  function matrixSetActiveCellValue(value) {
    matrix.entries[matrix.activeMat][matrix.activeR][matrix.activeC] = value;
  }

  function matrixAppendDigit(ch) {
    const cur = matrixActiveCellValue();
    matrixSetActiveCellValue((cur === '0' ? '' : cur) + ch);
    saveMatrix();
    renderMatrix();
  }

  function matrixAppendDecimal() {
    const cur = matrixActiveCellValue();
    if (cur.includes('.')) return;
    matrixSetActiveCellValue(cur + '.');
    saveMatrix();
    renderMatrix();
  }

  function matrixToggleSign() {
    const cur = matrixActiveCellValue();
    matrixSetActiveCellValue(cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur));
    saveMatrix();
    renderMatrix();
  }

  function matrixBackspace() {
    const cur = matrixActiveCellValue();
    matrixSetActiveCellValue(cur.slice(0, -1) || '0');
    saveMatrix();
    renderMatrix();
  }

  function matrixClearEntry() {
    matrixSetActiveCellValue('0');
    saveMatrix();
    renderMatrix();
  }

  function matrixClearAll() {
    matrix.entries.a = identity2();
    matrix.entries.b = identity2();
    matrix.activeMat = 'a';
    matrix.activeR = 0;
    matrix.activeC = 0;
    matrix.opLabel = '';
    matrix.resultText = '';
    saveMatrix();
    renderMatrix();
  }

  function insertAnsMatrix() {
    matrixSetActiveCellValue(convPlainNumber(lastAnswer));
    saveMatrix();
    renderMatrix();
  }

  matrixPanel.addEventListener('click', (e) => {
    const cell = e.target.closest('.matrix-cell');
    if (!cell) return;
    matrixSetActiveCell(cell.dataset.mat, parseInt(cell.dataset.r, 10), parseInt(cell.dataset.c, 10));
  });

  matrixToolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.graph-tool-btn');
    if (!btn) return;
    handleAction(btn.dataset.action, btn.dataset.value);
  });

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
      if (str.startsWith('nCr', i) || str.startsWith('nPr', i) || str.startsWith('gcd', i) || str.startsWith('lcm', i)) {
        tokens.push({ type: 'op', value: str.slice(i, i + 3) });
        i += 3;
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
      let left = this.parseCombin();
      while (this.peek() && this.peek().type === 'op' && (this.peek().value === '*' || this.peek().value === '/' || this.peek().value === '%')) {
        const op = this.next().value;
        const right = this.parseCombin();
        if (op === '*') left = left * right;
        else if (op === '/') left = left / right;
        else left = left % right;
      }
      return left;
    }
    parseCombin() {
      let left = this.parsePow();
      const combinOps = ['nCr', 'nPr', 'gcd', 'lcm'];
      while (this.peek() && this.peek().type === 'op' && combinOps.includes(this.peek().value)) {
        const op = this.next().value;
        const right = this.parsePow();
        if (op === 'nCr') left = combinations(left, right);
        else if (op === 'nPr') left = permutations(left, right);
        else if (op === 'gcd') left = gcdOf(left, right);
        else left = lcmOf(left, right);
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

  function combinations(n, r) {
    if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) return NaN;
    return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
  }

  function permutations(n, r) {
    if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) return NaN;
    return Math.round(factorial(n) / factorial(n - r));
  }

  function gcdOf(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return NaN;
    a = Math.abs(a); b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
  }

  function lcmOf(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return NaN;
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcdOf(a, b);
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
    exprF: localStorage.getItem('calc-graph-expr') || 'sin(x)',
    exprG: localStorage.getItem('calc-graph-expr-g') || '',
    activeFn: 'f',
    xMin: -10, xMax: 10, yMin: -10, yMax: 10,
    roots: [],
    rootsSearched: false,
    rootsError: false,
    trace: null,
    integralComputed: false,
    integralValue: 0,
    integralError: false,
    intersections: [],
    intersectionsSearched: false,
    intersectionsError: false,
    intersectionsNeedG: false,
  };

  function isGraphingMode() {
    return calculator.classList.contains('graphing');
  }

  function activeGraphExpr() {
    return graphState.activeFn === 'g' ? graphState.exprG : graphState.exprF;
  }

  function renderGraphExpr() {
    const label = graphState.activeFn === 'g' ? 'g(x)' : 'f(x)';
    expressionEl.textContent = `${label} = ${localizeDigits(activeGraphExpr() || '')}`;
  }

  function evalAt(expr, dataX) {
    const wasDegrees = state.isDegrees;
    state.isDegrees = false;
    try {
      return evaluateExpression(expr, { x: dataX });
    } catch (e) {
      return NaN;
    } finally {
      state.isDegrees = wasDegrees;
    }
  }

  function evalGraphAt(dataX) {
    return evalAt(activeGraphExpr(), dataX);
  }

  function evalFAt(dataX) { return evalAt(graphState.exprF, dataX); }
  function evalGAt(dataX) { return evalAt(graphState.exprG, dataX); }

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
    if (graphState.integralComputed) {
      resultEl.textContent = graphState.integralError
        ? t('error')
        : `∫dx=${localizeDigits(formatNumber(Math.round(graphState.integralValue * 1e4) / 1e4))}`;
      return;
    }
    if (graphState.intersectionsSearched) {
      if (graphState.intersectionsNeedG) { resultEl.textContent = t('graphNeedG'); return; }
      if (graphState.intersectionsError) { resultEl.textContent = t('error'); return; }
      if (graphState.intersections.length === 0) { resultEl.textContent = t('graphNoIntersections'); return; }
      const formatted = graphState.intersections
        .map((p) => `(${formatNumber(Math.round(p.x * 1e6) / 1e6)}, ${formatNumber(Math.round(p.y * 1e6) / 1e6)})`)
        .join(', ');
      resultEl.textContent = localizeDigits(formatted);
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

  function clearGraphAnalysis() {
    graphState.roots = [];
    graphState.rootsSearched = false;
    graphState.rootsError = false;
    graphState.trace = null;
    graphState.integralComputed = false;
    graphState.integralValue = 0;
    graphState.integralError = false;
    graphState.intersections = [];
    graphState.intersectionsSearched = false;
    graphState.intersectionsError = false;
    graphState.intersectionsNeedG = false;
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

  function findGraphIntersections() {
    const gExpr = graphState.exprG.trim();
    if (!gExpr) return { intersections: [], anyFinite: false, needG: true };
    const { xMin, xMax } = graphState;
    const samples = 400;
    const points = [];
    let anyFinite = false;
    let prevX = null;
    let prevDiff = null;
    for (let i = 0; i <= samples; i++) {
      const x = xMin + ((xMax - xMin) * i) / samples;
      const diff = evalFAt(x) - evalGAt(x);
      if (isFinite(diff)) anyFinite = true;
      if (prevX !== null && isFinite(prevDiff) && isFinite(diff)) {
        if (prevDiff === 0) {
          points.push({ x: prevX, y: evalFAt(prevX) });
        } else if ((prevDiff < 0 && diff > 0) || (prevDiff > 0 && diff < 0)) {
          let a = prevX, b = x, fa = prevDiff;
          for (let iter = 0; iter < 40; iter++) {
            const mid = (a + b) / 2;
            const fm = evalFAt(mid) - evalGAt(mid);
            if (!isFinite(fm)) break;
            if ((fa < 0 && fm < 0) || (fa > 0 && fm > 0)) { a = mid; fa = fm; } else { b = mid; }
          }
          const rx = (a + b) / 2;
          points.push({ x: rx, y: evalFAt(rx) });
        }
      }
      prevX = x; prevDiff = diff;
    }
    const resolution = (xMax - xMin) / samples;
    const deduped = [];
    points.forEach((p) => {
      if (!deduped.some((d) => Math.abs(d.x - p.x) < resolution)) deduped.push(p);
    });
    return { intersections: deduped, anyFinite, needG: false };
  }

  function graphFindIntersections() {
    const { intersections, anyFinite, needG } = findGraphIntersections();
    clearGraphAnalysis();
    graphState.intersectionsSearched = true;
    graphState.intersectionsNeedG = needG;
    graphState.intersections = needG ? [] : intersections;
    graphState.intersectionsError = !needG && !anyFinite;
    renderGraphDisplay();
    drawGraph();
  }

  function graphFindRoots() {
    const { roots, anyFinite } = findGraphRoots();
    clearGraphAnalysis();
    graphState.roots = roots;
    graphState.rootsSearched = true;
    graphState.rootsError = !anyFinite;
    renderGraphDisplay();
    drawGraph();
  }

  function computeGraphIntegral() {
    const { xMin, xMax } = graphState;
    const n = 1000;
    const h = (xMax - xMin) / n;
    let sum = 0;
    let anyFinite = false;
    for (let i = 0; i <= n; i++) {
      const x = xMin + i * h;
      const y = evalGraphAt(x);
      const finite = isFinite(y);
      if (finite) anyFinite = true;
      const weight = (i === 0 || i === n) ? 1 : (i % 2 === 0 ? 2 : 4);
      sum += (finite ? y : 0) * weight;
    }
    return { integral: (h / 3) * sum, anyFinite };
  }

  function graphComputeIntegral() {
    const { integral, anyFinite } = computeGraphIntegral();
    clearGraphAnalysis();
    graphState.integralComputed = true;
    graphState.integralValue = integral;
    graphState.integralError = !anyFinite;
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
    const curve2Color = styles.getPropertyValue('--accent-3').trim() || '#43d9c8';
    const activeColor = graphState.activeFn === 'g' ? curve2Color : curveColor;

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

    if (graphState.integralComputed && !graphState.integralError) {
      const zeroPy = yToPx(Math.max(yMin, Math.min(yMax, 0)));
      ctx.fillStyle = activeColor;
      ctx.globalAlpha = 0.25;
      const shadeSamples = Math.max(100, Math.floor(w));
      let segment = [];
      const flushSegment = () => {
        if (segment.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(segment[0].px, zeroPy);
          segment.forEach((pt) => ctx.lineTo(pt.px, pt.py));
          ctx.lineTo(segment[segment.length - 1].px, zeroPy);
          ctx.closePath();
          ctx.fill();
        }
        segment = [];
      };
      for (let i = 0; i <= shadeSamples; i++) {
        const dataX = xMin + ((xMax - xMin) * i) / shadeSamples;
        const y = evalGraphAt(dataX);
        if (!isFinite(y)) { flushSegment(); continue; }
        const clampedY = Math.max(yMin, Math.min(yMax, y));
        segment.push({ px: xToPx(dataX), py: yToPx(clampedY) });
      }
      flushSegment();
      ctx.globalAlpha = 1;
    }

    const samples = Math.max(100, Math.floor(w));
    const yRange = yMax - yMin;
    function drawCurve(expr, color) {
      if (!expr) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      let drawing = false;
      for (let i = 0; i <= samples; i++) {
        const dataX = xMin + ((xMax - xMin) * i) / samples;
        const y = evalAt(expr, dataX);
        if (!isFinite(y) || y < yMin - yRange * 2 || y > yMax + yRange * 2) {
          drawing = false;
          continue;
        }
        const px = xToPx(dataX);
        const py = yToPx(y);
        if (!drawing) { ctx.moveTo(px, py); drawing = true; } else { ctx.lineTo(px, py); }
      }
      ctx.stroke();
    }
    drawCurve(graphState.exprF, curveColor);
    drawCurve(graphState.exprG.trim(), curve2Color);

    if (graphState.roots.length) {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = activeColor;
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

    if (graphState.intersections.length) {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = curve2Color;
      ctx.lineWidth = 1.5;
      graphState.intersections.forEach((p) => {
        if (p.x < xMin || p.x > xMax || p.y < yMin || p.y > yMax) return;
        const px = xToPx(p.x);
        const py = yToPx(p.y);
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
        ctx.fillStyle = activeColor;
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
    localStorage.setItem('calc-graph-expr', graphState.exprF);
    localStorage.setItem('calc-graph-expr-g', graphState.exprG);
  }

  function graphAppend(value) {
    if (graphState.activeFn === 'g') graphState.exprG += value;
    else graphState.exprF += value;
    clearGraphAnalysis();
    saveGraphExpr();
    renderGraphDisplay();
  }

  function graphBackspace() {
    if (graphState.activeFn === 'g') graphState.exprG = graphState.exprG.slice(0, -1);
    else graphState.exprF = graphState.exprF.slice(0, -1);
    clearGraphAnalysis();
    saveGraphExpr();
    renderGraphDisplay();
  }

  function graphClearAll() {
    if (graphState.activeFn === 'g') graphState.exprG = '';
    else graphState.exprF = '';
    clearGraphAnalysis();
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
    if (!activeGraphExpr()) return;
    const rect = graphCanvas.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const dataX = graphState.xMin + (pxX / rect.width) * (graphState.xMax - graphState.xMin);
    const y = evalGraphAt(dataX);
    clearGraphAnalysis();
    graphState.trace = { x: dataX, y, slope: computeGraphSlope(dataX, y) };
    renderGraphDisplay();
    drawGraph();
  });

  graphFnTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.graph-fn-btn');
    if (!btn) return;
    graphState.activeFn = btn.dataset.fn;
    document.querySelectorAll('.graph-fn-btn').forEach((b) => b.classList.toggle('active', b === btn));
    clearGraphAnalysis();
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
        else if (isSolverMode()) solverClearAll();
        else if (isMatrixMode()) matrixClearAll();
        else clearAll();
        break;
      case 'clear-entry':
        if (isProgrammerMode()) progClearEntry();
        else if (isConverterMode()) convClearEntry();
        else if (isStatisticsMode()) statClearEntry();
        else if (isSolverMode()) solverClearEntry();
        else if (isMatrixMode()) matrixClearEntry();
        else clearEntry();
        break;
      case 'backspace':
        if (isProgrammerMode()) progBackspace();
        else if (isConverterMode()) convBackspace();
        else if (isStatisticsMode()) statBackspace();
        else if (isSolverMode()) solverBackspace();
        else if (isMatrixMode()) matrixBackspace();
        else backspace();
        break;
      case 'sign': toggleSign(); break;
      case 'percent': percent(); break;
      case 'equals': equals(); break;
      case 'fn': addFunction(value); break;
      case 'const': addConstant(value); break;
      case 'pow2': squareValue(); break;
      case 'pow': powValue(); break;
      case 'combin': inputOperator(value); break;
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
      case 'solverdigit': solverAppendDigit(value); break;
      case 'solverdecimal': solverAppendDecimal(); break;
      case 'solversign': solverToggleSign(); break;
      case 'solvernext': solverNextField(); break;
      case 'matrixdigit': matrixAppendDigit(value); break;
      case 'matrixdecimal': matrixAppendDecimal(); break;
      case 'matrixsign': matrixToggleSign(); break;
      case 'matrixnextcell': matrixNextCell(); break;
      case 'matrixadd': matrixCompute('add'); break;
      case 'matrixsub': matrixCompute('sub'); break;
      case 'matrixmul': matrixCompute('mul'); break;
      case 'matrixdet': matrixCompute('det'); break;
      case 'matrixinv': matrixCompute('inv'); break;
      case 'ans':
        if (isProgrammerMode()) insertAnsProg();
        else if (isConverterMode()) insertAnsConv();
        else if (isStatisticsMode()) insertAnsStat();
        else if (isSolverMode()) insertAnsSolver();
        else if (isMatrixMode()) insertAnsMatrix();
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
      case 'graphintegral': graphComputeIntegral(); break;
      case 'graphfindintersect': graphFindIntersections(); break;
    }
  }

  [keys, sciRow, progRow, progKeys, convKeys, statKeys, solverKeys, graphRow, graphKeys, matrixKeys].forEach(container => {
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
    calculator.classList.toggle('solver', mode === 'solver');
    calculator.classList.toggle('graphing', mode === 'graphing');
    calculator.classList.toggle('matrix', mode === 'matrix');
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
    if (mode === 'solver') {
      updateSolverTabsUI();
      renderSolver();
    }
    if (mode === 'graphing') {
      renderGraphDisplay();
      drawGraph();
    }
    if (mode === 'matrix') {
      renderMatrix();
    }
    localStorage.setItem('calc-active-mode', mode);
    if (helpOverlay.classList.contains('open')) renderHelpContent();
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchToMode(btn.dataset.mode));
  });

  const helpText = {
    en: {
      standard: [
        ['0–9', 'Enter digits'],
        ['.', 'Decimal point'],
        ['+ − × ÷ ^ %', 'Operators'],
        ['( )', 'Parentheses'],
        ['Enter / =', 'Calculate'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear'],
        ['!', 'Factorial'],
      ],
      programmer: [
        ['0–9, A–F', 'Enter digits'],
        ['+ − × ÷ %', 'Arithmetic operators'],
        ['& | ^ ~', 'AND / OR / XOR / NOT'],
        ['Enter / =', 'Calculate'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear'],
      ],
      converter: [
        ['0–9', 'Enter digits'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear'],
      ],
      statistics: [
        ['0–9', 'Enter digits'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Enter / =', 'Add value to dataset'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear all data'],
      ],
      solver: [
        ['0–9', 'Enter digits into the active coefficient'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Move to next coefficient'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Reset coefficients'],
      ],
      graphing: [
        ['0–9', 'Enter digits'],
        ['x', 'Insert variable x'],
        ['+ − × ÷ ^ ( )', 'Operators and parentheses'],
        ['.', 'Decimal point'],
        ['f(x) / g(x) tabs', 'Switch which function you are editing'],
        ['Enter / =', 'Plot'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear active function'],
        ['Click graph', 'Trace point (x, y, dy/dx)'],
        ['Intersect', 'Find where f(x) and g(x) meet'],
      ],
      matrix: [
        ['0–9', 'Enter digits into the active cell'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Move to next cell'],
        ['Click cell', 'Select that cell to edit'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Reset both matrices to identity'],
      ],
    },
    mr: {
      standard: [
        ['0–9', 'अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['+ − × ÷ ^ %', 'क्रिया चिन्हे'],
        ['( )', 'कंस'],
        ['Enter / =', 'गणना करा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'साफ करा'],
        ['!', 'क्रमगुणित (Factorial)'],
      ],
      programmer: [
        ['0–9, A–F', 'अंक टाका'],
        ['+ − × ÷ %', 'गणिती क्रिया'],
        ['& | ^ ~', 'AND / OR / XOR / NOT'],
        ['Enter / =', 'गणना करा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'साफ करा'],
      ],
      converter: [
        ['0–9', 'अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'साफ करा'],
      ],
      statistics: [
        ['0–9', 'अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Enter / =', 'डेटामध्ये मूल्य जोडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'सर्व डेटा साफ करा'],
      ],
      solver: [
        ['0–9', 'सक्रिय गुणांकात अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'पुढील गुणांकावर जा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'गुणांक रीसेट करा'],
      ],
      graphing: [
        ['0–9', 'अंक टाका'],
        ['x', 'x चल टाका'],
        ['+ − × ÷ ^ ( )', 'क्रिया चिन्हे आणि कंस'],
        ['.', 'दशांश बिंदू'],
        ['f(x) / g(x) टॅब', 'कोणते फंक्शन संपादित करायचे ते बदला'],
        ['Enter / =', 'आलेखा करा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'सक्रिय फंक्शन साफ करा'],
        ['Click graph', 'बिंदू ट्रेस करा (x, y, dy/dx)'],
        ['Intersect', 'f(x) आणि g(x) कुठे भेटतात ते शोधा'],
      ],
      matrix: [
        ['0–9', 'सक्रिय सेलमध्ये अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'पुढील सेलवर जा'],
        ['सेलवर क्लिक करा', 'तो सेल संपादित करण्यासाठी निवडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'दोन्ही मॅट्रिक्स रीसेट करा'],
      ],
    },
  };

  function renderHelpContent() {
    const activeBtn = document.querySelector('.mode-btn.active');
    const activeMode = activeBtn ? activeBtn.dataset.mode : 'standard';
    const bucket = activeMode === 'scientific' ? 'standard' : activeMode;
    const rows = helpText[state.language][bucket] || [];
    helpBody.innerHTML = rows.map(([keyLabel, desc]) =>
      `<div class="help-row"><span class="help-keys">${keyLabel}</span><span class="help-desc">${desc}</span></div>`
    ).join('');
  }

  function openHelp() {
    renderHelpContent();
    helpOverlay.classList.add('open');
  }

  function closeHelp() {
    helpOverlay.classList.remove('open');
  }

  helpToggle.addEventListener('click', openHelp);
  helpClose.addEventListener('click', closeHelp);
  helpOverlay.addEventListener('click', (e) => {
    if (e.target === helpOverlay) closeHelp();
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

  function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  copyResultBtn.addEventListener('click', async () => {
    const text = resultEl.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        fallbackCopyText(text);
      }
    } else {
      fallbackCopyText(text);
    }
    copyResultBtn.textContent = '✓';
    copyResultBtn.classList.add('copied');
    setTimeout(() => {
      copyResultBtn.textContent = '📋';
      copyResultBtn.classList.remove('copied');
    }, 1000);
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
    if (helpOverlay.classList.contains('open')) {
      if (key === 'Escape') closeHelp();
      return;
    }
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
    if (isSolverMode()) {
      if (/[0-9]/.test(key)) { solverAppendDigit(key); return; }
      if (key === '.') { solverAppendDecimal(); return; }
      if (key === '-') { solverToggleSign(); return; }
      if (key === 'Backspace') { solverBackspace(); return; }
      if (key === 'Escape') { solverClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); solverNextField(); return; }
      return;
    }
    if (isGraphingMode()) {
      if (/[0-9]/.test(key) || key === 'x' || key === '.' || '+-*/^()'.includes(key)) { graphAppend(key); return; }
      if (key === 'Backspace') { graphBackspace(); return; }
      if (key === 'Escape') { graphClearAll(); return; }
      if (key === 'Enter' || key === '=') { e.preventDefault(); drawGraph(); return; }
      return;
    }
    if (isMatrixMode()) {
      if (/[0-9]/.test(key)) { matrixAppendDigit(key); return; }
      if (key === '.') { matrixAppendDecimal(); return; }
      if (key === '-') { matrixToggleSign(); return; }
      if (key === 'Backspace') { matrixBackspace(); return; }
      if (key === 'Escape') { matrixClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); matrixNextCell(); return; }
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
    const validModes = ['standard', 'scientific', 'programmer', 'converter', 'statistics', 'solver', 'graphing', 'matrix'];
    const savedMode = localStorage.getItem('calc-active-mode');
    if (validModes.includes(savedMode)) switchToMode(savedMode);
  })();
})();
