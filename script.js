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

  const translations = {
    en: {
      title: 'Advanced Calculator',
      standard: 'Standard',
      scientific: 'Scientific',
      programmer: 'Programmer',
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
    memory: 0,
    isDegrees: true,
    language: localStorage.getItem('calc-lang') || 'en',
    history: JSON.parse(localStorage.getItem('calc-history') || '[]'),
  };

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
    document.querySelectorAll('.key[data-action="num"]').forEach((btn) => {
      btn.textContent = localizeDigits(btn.dataset.value);
    });
    renderHistory();
    render();
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
  const prog = {
    base: 10,
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
    renderProg();
  }

  function progMemoryClear() { state.memory = 0; renderProg(); }
  function progMemoryRecall() {
    prog.value = maskInt32(state.memory);
    prog.entry = progValueStr(prog.value, prog.base);
    prog.justEvaluated = true;
    renderProg();
  }
  function progMemoryAdd() {
    state.memory = maskInt32(state.memory + prog.value);
    flashKey('mplus');
    renderProg();
  }
  function progMemorySubtract() {
    state.memory = maskInt32(state.memory - prog.value);
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
    updateBaseTabsUI();
    updateDigitAvailability();
    renderProg();
  });

  // ---------- Safe expression parser (recursive descent) ----------
  function evaluateExpression(expr) {
    const prepped = expr
      .replace(/π/g, 'pi')
      .replace(/e(?![a-zA-Z])/g, 'E_CONST');
    const tokens = tokenize(prepped);
    const parser = new Parser(tokens);
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
    constructor(tokens) {
      this.tokens = tokens;
      this.pos = 0;
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
      render();
    } catch (e) {
      resultEl.textContent = t('error');
    }
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
  function memoryClear() { state.memory = 0; render(); }
  function memoryRecall() { appendToExpression(formatNumber(state.memory).replace(/,/g, '')); }
  function memoryAdd() {
    try {
      state.memory += evaluateExpression(state.expression || resultEl.textContent.replace(/,/g, ''));
      flashKey('mplus');
      render();
    } catch (e) { /* ignore */ }
  }
  function memorySubtract() {
    try {
      state.memory -= evaluateExpression(state.expression || resultEl.textContent.replace(/,/g, ''));
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
      case 'clear': isProgrammerMode() ? progClearAll() : clearAll(); break;
      case 'clear-entry': isProgrammerMode() ? progClearEntry() : clearEntry(); break;
      case 'backspace': isProgrammerMode() ? progBackspace() : backspace(); break;
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
    }
  }

  [keys, sciRow, progRow, progKeys].forEach(container => {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.key');
      if (!btn) return;
      handleAction(btn.dataset.action, btn.dataset.value);
    });
  });

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      calculator.classList.toggle('scientific', mode === 'scientific');
      calculator.classList.toggle('programmer', mode === 'programmer');
      if (mode === 'programmer') {
        updateBaseTabsUI();
        updateDigitAvailability();
        renderProg();
      }
    });
  });

  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeToggle.textContent = next === 'light' ? '☀️' : '🌙';
    localStorage.setItem('calc-theme', next);
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
    applyLanguage();
  })();
})();
