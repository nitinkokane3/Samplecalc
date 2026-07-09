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
  const dataToggle = document.getElementById('dataToggle');
  const dataOverlay = document.getElementById('dataOverlay');
  const dataClose = document.getElementById('dataClose');
  const exportDataBtn = document.getElementById('exportDataBtn');
  const importDataBtn = document.getElementById('importDataBtn');
  const importFileInput = document.getElementById('importFileInput');
  const resetDataBtn = document.getElementById('resetDataBtn');
  const dataStatus = document.getElementById('dataStatus');
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
  const currencyNoteEl = document.getElementById('currencyNote');
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
  const solverDEl = document.getElementById('solverD');
  const solverDRow = document.getElementById('solverDRow');
  const solverEEl = document.getElementById('solverE');
  const solverERow = document.getElementById('solverERow');
  const solverFEl = document.getElementById('solverF');
  const solverFRow = document.getElementById('solverFRow');
  const solverGEl = document.getElementById('solverG');
  const solverGRow = document.getElementById('solverGRow');
  const solverHEl = document.getElementById('solverH');
  const solverHRow = document.getElementById('solverHRow');
  const solverIEl = document.getElementById('solverI');
  const solverIRow = document.getElementById('solverIRow');
  const solverJEl = document.getElementById('solverJ');
  const solverJRow = document.getElementById('solverJRow');
  const solverKEl = document.getElementById('solverK');
  const solverKRow = document.getElementById('solverKRow');
  const solverLEl = document.getElementById('solverL');
  const solverLRow = document.getElementById('solverLRow');
  const solverALabelEl = document.getElementById('solverALabel');
  const solverBLabelEl = document.getElementById('solverBLabel');
  const solverCLabelEl = document.getElementById('solverCLabel');
  const solverDLabelEl = document.getElementById('solverDLabel');
  const solverELabelEl = document.getElementById('solverELabel');
  const solverFLabelEl = document.getElementById('solverFLabel');
  const solverGLabelEl = document.getElementById('solverGLabel');
  const solverHLabelEl = document.getElementById('solverHLabel');
  const solverILabelEl = document.getElementById('solverILabel');
  const solverJLabelEl = document.getElementById('solverJLabel');
  const solverKLabelEl = document.getElementById('solverKLabel');
  const solverLLabelEl = document.getElementById('solverLLabel');
  const solverKeys = document.getElementById('solverKeys');
  const graphFnTabs = document.getElementById('graphFnTabs');
  const graphToolbar = document.getElementById('graphToolbar');
  const graphCanvasWrap = document.getElementById('graphCanvasWrap');
  const graphCanvas = document.getElementById('graphCanvas');
  const graphTableWrap = document.getElementById('graphTableWrap');
  const graphTable = document.getElementById('graphTable');
  const graphRow = document.getElementById('graphRow');
  const graphKeys = document.getElementById('graphKeys');
  const matrixToolbar = document.getElementById('matrixToolbar');
  const matrixPanel = document.getElementById('matrixPanel');
  const matrixSizeTabs = document.getElementById('matrixSizeTabs');
  const matrixKeys = document.getElementById('matrixKeys');
  const vectorToolbar = document.getElementById('vectorToolbar');
  const vectorPanel = document.getElementById('vectorPanel');
  const vectorKeys = document.getElementById('vectorKeys');
  const vectorAxEl = document.getElementById('vectorAx');
  const vectorAyEl = document.getElementById('vectorAy');
  const vectorAzEl = document.getElementById('vectorAz');
  const vectorBxEl = document.getElementById('vectorBx');
  const vectorByEl = document.getElementById('vectorBy');
  const vectorBzEl = document.getElementById('vectorBz');
  const complexToolbar = document.getElementById('complexToolbar');
  const complexPanel = document.getElementById('complexPanel');
  const complexKeys = document.getElementById('complexKeys');
  const complexAreEl = document.getElementById('complexAre');
  const complexAimEl = document.getElementById('complexAim');
  const complexBreEl = document.getElementById('complexBre');
  const complexBimEl = document.getElementById('complexBim');
  const regrPanel = document.getElementById('regrPanel');
  const regrKeys = document.getElementById('regrKeys');
  const regrChipsEl = document.getElementById('regrChips');
  const regrEntryXEl = document.getElementById('regrEntryX');
  const regrEntryYEl = document.getElementById('regrEntryY');
  const regrNEl = document.getElementById('regrN');
  const regrSlopeEl = document.getElementById('regrSlope');
  const regrInterceptEl = document.getElementById('regrIntercept');
  const regrREl = document.getElementById('regrR');
  const regrR2El = document.getElementById('regrR2');
  const financeTabs = document.getElementById('financeTabs');
  const financeKeys = document.getElementById('financeKeys');
  const financeInputPanel = document.getElementById('financeInputPanel');
  const financeAEl = document.getElementById('financeA');
  const financeBEl = document.getElementById('financeB');
  const financeCEl = document.getElementById('financeC');
  const financeDEl = document.getElementById('financeD');
  const financeALabelEl = document.getElementById('financeALabel');
  const financeBLabelEl = document.getElementById('financeBLabel');
  const financeCLabelEl = document.getElementById('financeCLabel');
  const financeDLabelEl = document.getElementById('financeDLabel');
  const financeCRow = document.getElementById('financeCRow');
  const financeDRow = document.getElementById('financeDRow');
  const financeOut1El = document.getElementById('financeOut1');
  const financeOut2El = document.getElementById('financeOut2');
  const financeOut3El = document.getElementById('financeOut3');
  const financeOut1LabelEl = document.getElementById('financeOut1Label');
  const financeOut2LabelEl = document.getElementById('financeOut2Label');
  const financeOut3LabelEl = document.getElementById('financeOut3Label');
  const financeOut2Row = document.getElementById('financeOut2Row');
  const financeOut3Row = document.getElementById('financeOut3Row');

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
      solverCubic: 'Cubic',
      solverNext: 'Next',
      solverNoSolution: 'No solution',
      solverInfiniteSolutions: 'Infinite solutions',
      solverComplexNote: '2 complex roots',
      solverRepeatedNote: 'repeated root',
      solverSystem2x2: 'System 2×2',
      solverSystem3x3: 'System 3×3',
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
      graphTable: 'Table',
      matrixMode: 'Matrix',
      matrixDet: 'Det',
      matrixInv: 'Inverse',
      matrixNext: 'Next',
      matrixSingular: 'Singular matrix',
      vectorMode: 'Vector',
      vectorDot: 'Dot',
      vectorCross: 'Cross',
      vectorMagnitude: 'Mag',
      vectorAngle: 'Angle',
      complexMode: 'Complex',
      complexModulus: 'Mod',
      complexArgument: 'Arg',
      complexConjugate: 'Conj',
      regressionMode: 'Regression',
      regrSlope: 'Slope (m)',
      regrIntercept: 'Intercept (b)',
      regrPointsLabel: 'points',
      regrNeedMore: 'Need at least 2 points',
      regrVertical: 'x values must vary',
      financeMode: 'Finance',
      financePercentOf: '% Of',
      financePercentChange: '% Change',
      financeDiscount: 'Discount',
      financeSimpleInterest: 'Simple Int.',
      financeCompoundInterest: 'Compound Int.',
      financeTip: 'Tip Split',
      financeFieldPercent: 'Percent %',
      financeFieldValue: 'Value',
      financeFieldFrom: 'From',
      financeFieldTo: 'To',
      financeFieldPrice: 'Price',
      financeFieldDiscountPct: 'Discount %',
      financeFieldPrincipal: 'Principal',
      financeFieldRatePct: 'Rate %',
      financeFieldYears: 'Years',
      financeFieldCompounds: 'Compounds/yr',
      financeFieldBill: 'Bill',
      financeFieldTipPct: 'Tip %',
      financeFieldPeople: 'People',
      financeOutResult: 'Result',
      financeOutChange: 'Change',
      financeOutSaved: 'Amount Saved',
      financeOutFinalPrice: 'Final Price',
      financeOutInterest: 'Interest',
      financeOutTotal: 'Total Amount',
      financeOutTip: 'Tip Amount',
      financeOutTotalBill: 'Total Bill',
      financeOutPerPerson: 'Per Person',
      financeIncrease: 'increase',
      financeDecrease: 'decrease',
      financeNeedNonZero: 'Value can\'t be zero',
      catLength: 'Length',
      catWeight: 'Weight',
      catTemp: 'Temp',
      catData: 'Data',
      catArea: 'Area',
      catVolume: 'Volume',
      catSpeed: 'Speed',
      catTime: 'Time',
      catCurrency: 'Currency',
      currencyNote: 'Rates are static (not live) so this works fully offline.',
      swapTitle: 'Swap units',
      convFromLabel: 'Convert from',
      convToLabel: 'Convert to',
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
      helpToggleTitle: 'Help',
      helpTitle: 'Help Guide',
      helpShortcutsTitle: 'Keyboard Shortcuts',
      helpExampleLabel: 'Example',
      copyResultTitle: 'Copy result',
      dataToggleTitle: 'Backup & Restore',
      dataTitle: 'Backup & Restore',
      dataDesc: "Save every mode's data (history, memory, matrices, complex numbers, regression points, and more) to a file, or restore it on another device or after clearing browser data.",
      dataExport: 'Export Data',
      dataImport: 'Import Data',
      dataReset: 'Reset All Data',
      dataExportedMsg: 'Backup file downloaded.',
      dataImportedMsg: 'Data restored. Reloading…',
      dataImportErrorMsg: 'That file is not a valid backup.',
      dataResetConfirm: 'This clears all history, memory, and every mode\'s saved data on this device. This cannot be undone. Continue?',
      dataResetDoneMsg: 'All data cleared. Reloading…',
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
      solverCubic: 'घन',
      solverNext: 'पुढे',
      solverNoSolution: 'उपाय नाही',
      solverInfiniteSolutions: 'अनंत उपाय',
      solverComplexNote: '२ सम्मिश्र मुळे',
      solverRepeatedNote: 'पुनरावृत्त मूळ',
      solverSystem2x2: 'प्रणाली 2×2',
      solverSystem3x3: 'प्रणाली 3×3',
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
      graphTable: 'तक्ता',
      matrixMode: 'मॅट्रिक्स',
      matrixDet: 'निर्धारक',
      matrixInv: 'व्यस्त',
      matrixNext: 'पुढे',
      matrixSingular: 'व्यस्त अस्तित्वात नाही',
      vectorMode: 'सदिश',
      vectorDot: 'डॉट',
      vectorCross: 'क्रॉस',
      vectorMagnitude: 'परिमाण',
      vectorAngle: 'कोन',
      complexMode: 'सम्मिश्र',
      complexModulus: 'मापांक',
      complexArgument: 'कोन',
      complexConjugate: 'संयुग्मी',
      regressionMode: 'समाश्रयण',
      regrSlope: 'उतार (m)',
      regrIntercept: 'छेद (b)',
      regrPointsLabel: 'बिंदू',
      regrNeedMore: 'किमान २ बिंदू आवश्यक',
      regrVertical: 'x मूल्ये भिन्न असावीत',
      financeMode: 'वित्त',
      financePercentOf: '% चे',
      financePercentChange: '% बदल',
      financeDiscount: 'सवलत',
      financeSimpleInterest: 'साधे व्याज',
      financeCompoundInterest: 'चक्रवाढ व्याज',
      financeTip: 'टिप वाटणी',
      financeFieldPercent: 'टक्केवारी %',
      financeFieldValue: 'मूल्य',
      financeFieldFrom: 'सुरुवात',
      financeFieldTo: 'शेवट',
      financeFieldPrice: 'किंमत',
      financeFieldDiscountPct: 'सवलत %',
      financeFieldPrincipal: 'मुद्दल',
      financeFieldRatePct: 'दर %',
      financeFieldYears: 'वर्षे',
      financeFieldCompounds: 'चक्रवाढ/वर्ष',
      financeFieldBill: 'बिल',
      financeFieldTipPct: 'टिप %',
      financeFieldPeople: 'लोक',
      financeOutResult: 'निकाल',
      financeOutChange: 'बदल',
      financeOutSaved: 'बचत रक्कम',
      financeOutFinalPrice: 'अंतिम किंमत',
      financeOutInterest: 'व्याज',
      financeOutTotal: 'एकूण रक्कम',
      financeOutTip: 'टिप रक्कम',
      financeOutTotalBill: 'एकूण बिल',
      financeOutPerPerson: 'प्रत्येकी',
      financeIncrease: 'वाढ',
      financeDecrease: 'घट',
      financeNeedNonZero: 'मूल्य शून्य असू शकत नाही',
      catLength: 'लांबी',
      catWeight: 'वजन',
      catTemp: 'तापमान',
      catData: 'डेटा',
      catArea: 'क्षेत्रफळ',
      catVolume: 'घनफळ',
      catSpeed: 'वेग',
      catTime: 'वेळ',
      catCurrency: 'चलन',
      currencyNote: 'दर स्थिर आहेत (लाइव्ह नाहीत) त्यामुळे हे पूर्णपणे ऑफलाइन काम करते.',
      swapTitle: 'एकके बदला',
      convFromLabel: 'यावरून रूपांतरित करा',
      convToLabel: 'यावर रूपांतरित करा',
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
      helpToggleTitle: 'मदत',
      helpTitle: 'मदत मार्गदर्शक',
      helpShortcutsTitle: 'कीबोर्ड शॉर्टकट',
      helpExampleLabel: 'उदाहरण',
      copyResultTitle: 'निकाल कॉपी करा',
      dataToggleTitle: 'बॅकअप आणि रिस्टोर',
      dataTitle: 'बॅकअप आणि रिस्टोर',
      dataDesc: 'प्रत्येक मोडचा डेटा (इतिहास, मेमरी, मॅट्रिक्स, सम्मिश्र संख्या, समाश्रयण बिंदू, आणि बरेच काही) फाइलमध्ये जतन करा, किंवा दुसऱ्या डिव्हाइसवर किंवा ब्राउझर डेटा साफ केल्यानंतर तो पुनर्संचयित करा.',
      dataExport: 'डेटा एक्सपोर्ट करा',
      dataImport: 'डेटा इंपोर्ट करा',
      dataReset: 'सर्व डेटा रीसेट करा',
      dataExportedMsg: 'बॅकअप फाइल डाउनलोड झाली.',
      dataImportedMsg: 'डेटा पुनर्संचयित झाला. पुन्हा लोड करत आहे…',
      dataImportErrorMsg: 'ही फाइल वैध बॅकअप नाही.',
      dataResetConfirm: 'हे या डिव्हाइसवरील सर्व इतिहास, मेमरी आणि प्रत्येक मोडचा जतन केलेला डेटा साफ करेल. हे पूर्ववत करता येणार नाही. सुरू ठेवायचे?',
      dataResetDoneMsg: 'सर्व डेटा साफ झाला. पुन्हा लोड करत आहे…',
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
    document.querySelectorAll('.key[data-action="num"], .key[data-action="progdigit"], .key[data-action="convdigit"], .key[data-action="statdigit"], .key[data-action="solverdigit"], .key[data-action="graphdigit"], .key[data-action="matrixdigit"], .key[data-action="vectordigit"], .key[data-action="complexdigit"], .key[data-action="regrdigit"], .key[data-action="financedigit"]').forEach((btn) => {
      btn.textContent = localizeDigits(btn.dataset.value);
    });
    renderHistory();
    if (isProgrammerMode()) renderProg();
    else if (isConverterMode()) renderConv();
    else if (isStatisticsMode()) renderStat();
    else if (isSolverMode()) renderSolver();
    else if (isMatrixMode()) renderMatrix();
    else if (isVectorMode()) renderVector();
    else if (isComplexMode()) renderComplex();
    else if (isRegressionMode()) renderRegr();
    else if (isFinanceMode()) renderFinance();
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

  // Merges only the keys already present in `defaults` from `saved` (e.g. data
  // restored via Backup & Restore, an untrusted JSON file a user can import).
  // Unlike a plain Object.assign, this ignores unexpected keys -- including
  // "__proto__"/"constructor"/"prototype", which a crafted import could use
  // to attach an unexpected prototype to the merged object.
  function mergeKnownKeys(defaults, saved) {
    const result = Object.assign({}, defaults);
    if (saved && typeof saved === 'object') {
      Object.keys(defaults).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(saved, key)) result[key] = saved[key];
      });
    }
    return result;
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
    // Static, illustrative rates (relative to USD) as of this app's last update -- not live.
    // Kept static deliberately: the app works fully offline (see sw.js), and a live rate
    // API would silently go stale or fail the moment the network is unavailable.
    currency: {
      // Each value is "how many USD is 1 unit of this currency worth" (base unit = USD),
      // the same convention length/weight/etc. use (base-units per 1 unit).
      units: {
        USD: 1, EUR: 1.086957, GBP: 1.265823, INR: 0.011976, JPY: 0.006689,
        AUD: 0.657895, CAD: 0.735294, CNY: 0.138122, CHF: 1.136364, SGD: 0.746269,
      },
      labels: {
        USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound', INR: 'Indian Rupee', JPY: 'Japanese Yen',
        AUD: 'Australian Dollar', CAD: 'Canadian Dollar', CNY: 'Chinese Yuan', CHF: 'Swiss Franc', SGD: 'Singapore Dollar',
      },
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
    currency: ['USD', 'EUR'],
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
    currencyNoteEl.style.display = conv.category === 'currency' ? 'block' : 'none';
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
  const solverTypes = ['linear', 'quadratic', 'cubic', 'system2x2', 'system3x3'];
  const savedSolverCoeffs = JSON.parse(localStorage.getItem('calc-solver-coeffs') || 'null');
  const savedSolverType = localStorage.getItem('calc-solver-type');
  const solverDefaultCoeffs = {
    a: '1', b: '0', c: '0', d: '0', e: '0', f: '0',
    g: '0', h: '0', i: '0', j: '0', k: '0', l: '0',
  };
  const solver = {
    type: solverTypes.includes(savedSolverType) ? savedSolverType : 'linear',
    coeffs: mergeKnownKeys(solverDefaultCoeffs, savedSolverCoeffs),
    activeField: 'a',
  };

  function isSolverMode() {
    return calculator.classList.contains('solver');
  }

  function solverFieldOrder() {
    if (solver.type === 'system3x3') return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    if (solver.type === 'system2x2') return ['a', 'b', 'c', 'd', 'e', 'f'];
    if (solver.type === 'cubic') return ['a', 'b', 'c', 'd'];
    if (solver.type === 'quadratic') return ['a', 'b', 'c'];
    return ['a', 'b'];
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
    const { a, b, c, d, e, f, g, h, i, j, k, l } = solver.coeffs;
    if (solver.type === 'system3x3') {
      const eq1 = `${formatNumber(parseFloat(a) || 0)}x${eqTerm(b, 'y')}${eqTerm(c, 'z')} = ${formatNumber(parseFloat(d) || 0)}`;
      const eq2 = `${formatNumber(parseFloat(e) || 0)}x${eqTerm(f, 'y')}${eqTerm(g, 'z')} = ${formatNumber(parseFloat(h) || 0)}`;
      const eq3 = `${formatNumber(parseFloat(i) || 0)}x${eqTerm(j, 'y')}${eqTerm(k, 'z')} = ${formatNumber(parseFloat(l) || 0)}`;
      return `${eq1}; ${eq2}; ${eq3}`;
    }
    if (solver.type === 'system2x2') {
      const eq1 = `${formatNumber(parseFloat(a) || 0)}x${eqTerm(b, 'y')} = ${formatNumber(parseFloat(c) || 0)}`;
      const eq2 = `${formatNumber(parseFloat(d) || 0)}x${eqTerm(e, 'y')} = ${formatNumber(parseFloat(f) || 0)}`;
      return `${eq1}; ${eq2}`;
    }
    const leadTerm = `${formatNumber(parseFloat(a) || 0)}x`;
    if (solver.type === 'cubic') {
      return `${leadTerm}³${eqTerm(b, 'x²')}${eqTerm(c, 'x')}${eqTerm(d, '')} = 0`;
    }
    if (solver.type === 'quadratic') {
      return `${leadTerm}²${eqTerm(b, 'x')}${eqTerm(c, '')} = 0`;
    }
    return `${leadTerm}${eqTerm(b, '')} = 0`;
  }

  function computeLinearResult(a, b) {
    if (a === 0) return b === 0 ? { kind: 'infinite' } : { kind: 'none' };
    return { kind: 'single', x: -b / a };
  }

  function computeQuadraticResult(a, b, c) {
    if (a === 0) return computeLinearResult(b, c);
    const disc = b * b - 4 * a * c;
    if (disc === 0) return { kind: 'repeated', x: -b / (2 * a) };
    if (disc > 0) {
      const sqrtD = Math.sqrt(disc);
      return { kind: 'two', x1: (-b + sqrtD) / (2 * a), x2: (-b - sqrtD) / (2 * a) };
    }
    return { kind: 'complex', re: -b / (2 * a), im: Math.sqrt(-disc) / (2 * a) };
  }

  function cubicFn(a, b, c, d, x) {
    return a * x * x * x + b * x * x + c * x + d;
  }

  function cubicDiscriminant(a, b, c, d) {
    return 18 * a * b * c * d - 4 * b * b * b * d + b * b * c * c - 4 * a * c * c * c - 27 * a * a * d * d;
  }

  function findCubicRealRoots(a, b, c, d) {
    const range = 1000;
    const samples = 20000;
    const roots = [];
    let prevX = null;
    let prevY = null;
    for (let i = 0; i <= samples; i++) {
      const x = -range + (2 * range * i) / samples;
      const y = cubicFn(a, b, c, d, x);
      if (prevX !== null) {
        if (prevY === 0) {
          roots.push(prevX);
        } else if ((prevY < 0 && y > 0) || (prevY > 0 && y < 0)) {
          let lo = prevX, hi = x, flo = prevY;
          for (let iter = 0; iter < 60; iter++) {
            const mid = (lo + hi) / 2;
            const fm = cubicFn(a, b, c, d, mid);
            if ((flo < 0 && fm < 0) || (flo > 0 && fm > 0)) { lo = mid; flo = fm; } else { hi = mid; }
          }
          roots.push((lo + hi) / 2);
        }
      }
      prevX = x; prevY = y;
    }
    const dedupEpsilon = 1e-6;
    const deduped = [];
    roots.forEach((r) => {
      if (!deduped.some((d2) => Math.abs(d2 - r) < dedupEpsilon)) deduped.push(r);
    });
    return deduped.sort((x, y) => x - y);
  }

  function computeCubicResult(a, b, c, d) {
    if (a === 0) return computeQuadraticResult(b, c, d);
    const roots = findCubicRealRoots(a, b, c, d);
    const repeatedReal = Math.abs(cubicDiscriminant(a, b, c, d)) < 1e-6;
    return { kind: 'cubic', roots, repeatedReal };
  }

  // Row-echelon rank via Gaussian elimination with partial pivoting.
  function rowEchelonRank(inputMatrix) {
    const M = inputMatrix.map((row) => row.slice());
    const rows = M.length;
    const cols = M[0].length;
    const eps = 1e-9;
    let rank = 0;
    for (let col = 0; col < cols && rank < rows; col++) {
      let pivot = -1;
      let maxVal = eps;
      for (let r = rank; r < rows; r++) {
        if (Math.abs(M[r][col]) > maxVal) { maxVal = Math.abs(M[r][col]); pivot = r; }
      }
      if (pivot === -1) continue;
      [M[rank], M[pivot]] = [M[pivot], M[rank]];
      for (let r = rank + 1; r < rows; r++) {
        const factor = M[r][col] / M[rank][col];
        for (let c = col; c < cols; c++) M[r][c] -= factor * M[rank][c];
      }
      rank++;
    }
    return rank;
  }

  // Solves an NxN linear system Ax=b. Uses Cramer's rule when A is nonsingular;
  // otherwise distinguishes "no solution" from "infinite solutions" by comparing
  // rank(A) to rank([A|b]) (Rouché-Capelli), since a same-or-zero Cramer numerator
  // alone is not a reliable test once there are more than two equations.
  function computeLinearSystemResult(A, b) {
    const n = A.length;
    const D = matrixDet(A);
    if (D !== 0) {
      const vars = A.map((_, col) => {
        const Ai = A.map((row, r) => row.map((v, c) => (c === col ? b[r] : v)));
        return matrixDet(Ai) / D;
      });
      return { kind: n === 2 ? 'system' : 'system3', x: vars[0], y: vars[1], z: vars[2] };
    }
    const augmented = A.map((row, r) => [...row, b[r]]);
    const rankA = rowEchelonRank(A);
    const rankAug = rowEchelonRank(augmented);
    if (rankA === rankAug) return { kind: 'system-infinite' };
    return { kind: 'system-none' };
  }

  function computeSystem2x2Result(a, b, c, d, e, f) {
    return computeLinearSystemResult([[a, b], [d, e]], [c, f]);
  }

  function computeSystem3x3Result(a, b, c, d, e, f, g, h, i, j, k, l) {
    return computeLinearSystemResult([[a, b, c], [e, f, g], [i, j, k]], [d, h, l]);
  }

  function computeSolverResult() {
    const a = parseFloat(solver.coeffs.a) || 0;
    const b = parseFloat(solver.coeffs.b) || 0;
    if (solver.type === 'linear') return computeLinearResult(a, b);
    const c = parseFloat(solver.coeffs.c) || 0;
    if (solver.type === 'quadratic') return computeQuadraticResult(a, b, c);
    if (solver.type === 'system2x2') {
      const d = parseFloat(solver.coeffs.d) || 0;
      const e = parseFloat(solver.coeffs.e) || 0;
      const f = parseFloat(solver.coeffs.f) || 0;
      return computeSystem2x2Result(a, b, c, d, e, f);
    }
    if (solver.type === 'system3x3') {
      const d = parseFloat(solver.coeffs.d) || 0;
      const e = parseFloat(solver.coeffs.e) || 0;
      const f = parseFloat(solver.coeffs.f) || 0;
      const g = parseFloat(solver.coeffs.g) || 0;
      const h = parseFloat(solver.coeffs.h) || 0;
      const i = parseFloat(solver.coeffs.i) || 0;
      const j = parseFloat(solver.coeffs.j) || 0;
      const k = parseFloat(solver.coeffs.k) || 0;
      const l = parseFloat(solver.coeffs.l) || 0;
      return computeSystem3x3Result(a, b, c, d, e, f, g, h, i, j, k, l);
    }
    const d = parseFloat(solver.coeffs.d) || 0;
    return computeCubicResult(a, b, c, d);
  }

  function formatSolverResult(res) {
    switch (res.kind) {
      case 'single': return `x = ${formatNumber(res.x)}`;
      case 'repeated': return `x₁ = x₂ = ${formatNumber(res.x)}`;
      case 'two': return `x₁ = ${formatNumber(res.x1)}, x₂ = ${formatNumber(res.x2)}`;
      case 'complex': return `x = ${formatNumber(res.re)} ± ${formatNumber(res.im)}i`;
      case 'cubic': {
        if (res.roots.length === 0) return t('error');
        if (res.roots.length === 1) {
          const note = res.repeatedReal ? t('solverRepeatedNote') : t('solverComplexNote');
          return `x = ${formatNumber(res.roots[0])} (${note})`;
        }
        const labels = ['x₁', 'x₂', 'x₃'];
        return res.roots.map((r, i) => `${labels[i]} = ${formatNumber(r)}`).join(', ');
      }
      case 'none': return t('solverNoSolution');
      case 'infinite': return t('solverInfiniteSolutions');
      case 'system': return `x = ${formatNumber(res.x)}, y = ${formatNumber(res.y)}`;
      case 'system3': return `x = ${formatNumber(res.x)}, y = ${formatNumber(res.y)}, z = ${formatNumber(res.z)}`;
      case 'system-none': return t('solverNoSolution');
      case 'system-infinite': return t('solverInfiniteSolutions');
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
    solverDEl.textContent = localizeDigits(solver.coeffs.d);
    solverEEl.textContent = localizeDigits(solver.coeffs.e);
    solverFEl.textContent = localizeDigits(solver.coeffs.f);
    solverGEl.textContent = localizeDigits(solver.coeffs.g);
    solverHEl.textContent = localizeDigits(solver.coeffs.h);
    solverIEl.textContent = localizeDigits(solver.coeffs.i);
    solverJEl.textContent = localizeDigits(solver.coeffs.j);
    solverKEl.textContent = localizeDigits(solver.coeffs.k);
    solverLEl.textContent = localizeDigits(solver.coeffs.l);
    document.querySelectorAll('.solver-field').forEach((row) => {
      const isActive = row.dataset.field === solver.activeField;
      row.classList.toggle('active', isActive);
      row.setAttribute('aria-pressed', String(isActive));
    });
  }

  function updateSolverLabels() {
    if (solver.type === 'system3x3') {
      solverALabelEl.textContent = 'a₁'; solverBLabelEl.textContent = 'b₁';
      solverCLabelEl.textContent = 'c₁'; solverDLabelEl.textContent = 'd₁';
      solverELabelEl.textContent = 'a₂'; solverFLabelEl.textContent = 'b₂';
      solverGLabelEl.textContent = 'c₂'; solverHLabelEl.textContent = 'd₂';
      solverILabelEl.textContent = 'a₃'; solverJLabelEl.textContent = 'b₃';
      solverKLabelEl.textContent = 'c₃'; solverLLabelEl.textContent = 'd₃';
      return;
    }
    const isSystem2 = solver.type === 'system2x2';
    solverALabelEl.textContent = isSystem2 ? 'a₁' : 'a';
    solverBLabelEl.textContent = isSystem2 ? 'b₁' : 'b';
    solverCLabelEl.textContent = isSystem2 ? 'c₁' : 'c';
    solverDLabelEl.textContent = isSystem2 ? 'a₂' : 'd';
    solverELabelEl.textContent = isSystem2 ? 'b₂' : 'e';
    solverFLabelEl.textContent = isSystem2 ? 'c₂' : 'f';
    solverGLabelEl.textContent = 'g'; solverHLabelEl.textContent = 'h';
    solverILabelEl.textContent = 'i'; solverJLabelEl.textContent = 'j';
    solverKLabelEl.textContent = 'k'; solverLLabelEl.textContent = 'l';
  }

  function updateSolverTabsUI() {
    document.querySelectorAll('.solver-type-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.type === solver.type);
    });
    const type = solver.type;
    solverCRow.style.display = type === 'quadratic' || type === 'cubic' || type === 'system2x2' || type === 'system3x3' ? '' : 'none';
    solverDRow.style.display = type === 'cubic' || type === 'system2x2' || type === 'system3x3' ? '' : 'none';
    solverERow.style.display = type === 'system2x2' || type === 'system3x3' ? '' : 'none';
    solverFRow.style.display = type === 'system2x2' || type === 'system3x3' ? '' : 'none';
    const isSystem3 = type === 'system3x3';
    solverGRow.style.display = isSystem3 ? '' : 'none';
    solverHRow.style.display = isSystem3 ? '' : 'none';
    solverIRow.style.display = isSystem3 ? '' : 'none';
    solverJRow.style.display = isSystem3 ? '' : 'none';
    solverKRow.style.display = isSystem3 ? '' : 'none';
    solverLRow.style.display = isSystem3 ? '' : 'none';
    updateSolverLabels();
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
    solver.coeffs = Object.assign({}, solverDefaultCoeffs);
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

  // ---------- Matrix calculator mode (2x2 / 3x3) ----------
  const matrixSizes = [2, 3];
  const identity3 = () => [['1', '0', '0'], ['0', '1', '0'], ['0', '0', '1']];
  function padMatrixTo3x3(mat) {
    if (Array.isArray(mat) && mat.length === 3 && mat.every((row) => row.length === 3)) return mat;
    const id = identity3();
    if (Array.isArray(mat)) {
      mat.forEach((row, i) => row.forEach((v, j) => { if (i < 3 && j < 3) id[i][j] = v; }));
    }
    return id;
  }
  const savedMatrixA = JSON.parse(localStorage.getItem('calc-matrix-a') || 'null');
  const savedMatrixB = JSON.parse(localStorage.getItem('calc-matrix-b') || 'null');
  const savedMatrixSize = parseInt(localStorage.getItem('calc-matrix-size'), 10);
  const matrix = {
    entries: {
      a: savedMatrixA ? padMatrixTo3x3(savedMatrixA) : identity3(),
      b: savedMatrixB ? padMatrixTo3x3(savedMatrixB) : identity3(),
    },
    size: matrixSizes.includes(savedMatrixSize) ? savedMatrixSize : 2,
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
    localStorage.setItem('calc-matrix-size', String(matrix.size));
  }

  function matrixNumeric(mat) {
    const n = matrix.size;
    return matrix.entries[mat].slice(0, n).map((row) => row.slice(0, n).map((v) => parseFloat(v) || 0));
  }

  function matrixAdd(A, B) {
    return A.map((row, i) => row.map((v, j) => v + B[i][j]));
  }
  function matrixSub(A, B) {
    return A.map((row, i) => row.map((v, j) => v - B[i][j]));
  }
  function matrixMul(A, B) {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) result[i][j] += A[i][k] * B[k][j];
      }
    }
    return result;
  }
  function matrixDet(A) {
    const n = A.length;
    if (n === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    return (
      A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) -
      A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) +
      A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0])
    );
  }
  function matrixMinor(A, row, col) {
    return A.filter((_, i) => i !== row).map((r) => r.filter((_, j) => j !== col));
  }
  function matrixInverse(A) {
    const n = A.length;
    const d = matrixDet(A);
    if (d === 0) return null;
    if (n === 2) {
      return [[A[1][1] / d, -A[0][1] / d], [-A[1][0] / d, A[0][0] / d]];
    }
    const cofactors = A.map((row, i) => row.map((_, j) => {
      const sign = (i + j) % 2 === 0 ? 1 : -1;
      return sign * matrixDet(matrixMinor(A, i, j));
    }));
    const adjugate = cofactors[0].map((_, j) => cofactors.map((row) => row[j]));
    return adjugate.map((row) => row.map((v) => v / d));
  }

  function formatMatrixResult(M) {
    return `[${M.map((row) => row.map((v) => formatNumber(v)).join(', ')).join('; ')}]`;
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

  function updateMatrixSizeUI() {
    document.querySelectorAll('.matrix-size-btn').forEach((b) => {
      b.classList.toggle('active', parseInt(b.dataset.size, 10) === matrix.size);
    });
    document.querySelectorAll('.matrix-grid').forEach((grid) => {
      grid.classList.toggle('size3', matrix.size === 3);
    });
    matrixPanel.classList.toggle('size3', matrix.size === 3);
    document.querySelectorAll('.matrix-cell').forEach((el) => {
      const r = parseInt(el.dataset.r, 10);
      const c = parseInt(el.dataset.c, 10);
      el.style.display = (r < matrix.size && c < matrix.size) ? '' : 'none';
    });
  }

  function setMatrixSize(size) {
    matrix.size = size;
    matrix.activeR = 0;
    matrix.activeC = 0;
    matrix.opLabel = '';
    matrix.resultText = '';
    updateMatrixSizeUI();
    saveMatrix();
    renderMatrix();
  }

  function renderMatrixGrids() {
    document.querySelectorAll('.matrix-cell').forEach((el) => {
      const m = el.dataset.mat;
      const r = parseInt(el.dataset.r, 10);
      const c = parseInt(el.dataset.c, 10);
      el.textContent = localizeDigits(matrix.entries[m][r][c]);
      const isActive = matrix.activeMat === m && matrix.activeR === r && matrix.activeC === c;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-pressed', String(isActive));
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
    const max = matrix.size - 1;
    c += 1;
    if (c > max) {
      c = 0;
      r += 1;
      if (r > max) {
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
    matrix.entries.a = identity3();
    matrix.entries.b = identity3();
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

  matrixSizeTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.matrix-size-btn');
    if (!btn) return;
    setMatrixSize(parseInt(btn.dataset.size, 10));
  });

  // ---------- Vector mode (3D) ----------
  const savedVectorA = JSON.parse(localStorage.getItem('calc-vector-a') || 'null');
  const savedVectorB = JSON.parse(localStorage.getItem('calc-vector-b') || 'null');
  const vector = {
    entries: {
      a: savedVectorA || { x: '1', y: '0', z: '0' },
      b: savedVectorB || { x: '0', y: '1', z: '0' },
    },
    activeVec: 'a',
    activePart: 'x',
    opLabel: '',
    resultText: '',
  };

  function isVectorMode() {
    return calculator.classList.contains('vector');
  }

  function saveVector() {
    localStorage.setItem('calc-vector-a', JSON.stringify(vector.entries.a));
    localStorage.setItem('calc-vector-b', JSON.stringify(vector.entries.b));
  }

  function vectorNumeric(key) {
    const v = vector.entries[key];
    return { x: parseFloat(v.x) || 0, y: parseFloat(v.y) || 0, z: parseFloat(v.z) || 0 };
  }

  function vAdd(a, b) { return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }; }
  function vSub(a, b) { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
  function vDot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
  function vCross(a, b) {
    return {
      x: a.y * b.z - a.z * b.y,
      y: a.z * b.x - a.x * b.z,
      z: a.x * b.y - a.y * b.x,
    };
  }
  function vMagnitude(v) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
  function vAngle(a, b) {
    const denom = vMagnitude(a) * vMagnitude(b);
    if (denom === 0) return NaN;
    const cos = Math.max(-1, Math.min(1, vDot(a, b) / denom));
    const radians = Math.acos(cos);
    return state.isDegrees ? (radians * 180) / Math.PI : radians;
  }

  function formatVector(v) {
    return `(${formatNumber(v.x)}, ${formatNumber(v.y)}, ${formatNumber(v.z)})`;
  }

  function vectorCompute(op) {
    const A = vectorNumeric('a');
    const B = vectorNumeric('b');
    switch (op) {
      case 'add':
        vector.opLabel = 'A + B';
        vector.resultText = formatVector(vAdd(A, B));
        break;
      case 'sub':
        vector.opLabel = 'A − B';
        vector.resultText = formatVector(vSub(A, B));
        break;
      case 'dot':
        vector.opLabel = 'A · B';
        vector.resultText = formatNumber(vDot(A, B));
        break;
      case 'cross':
        vector.opLabel = 'A × B';
        vector.resultText = formatVector(vCross(A, B));
        break;
      case 'mag': {
        const activeLabel = vector.activeVec === 'b' ? 'B' : 'A';
        const activeV = vector.activeVec === 'b' ? B : A;
        vector.opLabel = `|${activeLabel}|`;
        vector.resultText = formatNumber(vMagnitude(activeV));
        break;
      }
      case 'angle': {
        const angle = vAngle(A, B);
        vector.opLabel = 'angle(A, B)';
        vector.resultText = isFinite(angle) ? formatNumber(angle) : t('error');
        break;
      }
    }
    renderVector();
  }

  function renderVector() {
    expressionEl.textContent = localizeDigits(vector.opLabel);
    resultEl.textContent = localizeDigits(vector.resultText);
    memoryIndicator.textContent = '';
    vectorAxEl.textContent = localizeDigits(vector.entries.a.x);
    vectorAyEl.textContent = localizeDigits(vector.entries.a.y);
    vectorAzEl.textContent = localizeDigits(vector.entries.a.z);
    vectorBxEl.textContent = localizeDigits(vector.entries.b.x);
    vectorByEl.textContent = localizeDigits(vector.entries.b.y);
    vectorBzEl.textContent = localizeDigits(vector.entries.b.z);
    document.querySelectorAll('.vector-field').forEach((row) => {
      const isActive = row.dataset.vec === vector.activeVec && row.dataset.part === vector.activePart;
      row.classList.toggle('active', isActive);
      row.setAttribute('aria-pressed', String(isActive));
    });
  }

  function vectorActiveValue() {
    return vector.entries[vector.activeVec][vector.activePart];
  }

  function vectorSetActiveValue(v) {
    vector.entries[vector.activeVec][vector.activePart] = v;
  }

  function vectorAppendDigit(ch) {
    const cur = vectorActiveValue();
    vectorSetActiveValue((cur === '0' ? '' : cur) + ch);
    saveVector();
    renderVector();
  }

  function vectorAppendDecimal() {
    const cur = vectorActiveValue();
    if (cur.includes('.')) return;
    vectorSetActiveValue(cur + '.');
    saveVector();
    renderVector();
  }

  function vectorToggleSign() {
    const cur = vectorActiveValue();
    vectorSetActiveValue(cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur));
    saveVector();
    renderVector();
  }

  function vectorBackspace() {
    const cur = vectorActiveValue();
    vectorSetActiveValue(cur.slice(0, -1) || '0');
    saveVector();
    renderVector();
  }

  function vectorClearEntry() {
    vectorSetActiveValue('0');
    saveVector();
    renderVector();
  }

  function vectorClearAll() {
    vector.entries = { a: { x: '1', y: '0', z: '0' }, b: { x: '0', y: '1', z: '0' } };
    vector.activeVec = 'a';
    vector.activePart = 'x';
    vector.opLabel = '';
    vector.resultText = '';
    saveVector();
    renderVector();
  }

  function vectorNextField() {
    const order = [['a', 'x'], ['a', 'y'], ['a', 'z'], ['b', 'x'], ['b', 'y'], ['b', 'z']];
    const idx = order.findIndex(([v, p]) => v === vector.activeVec && p === vector.activePart);
    const [v, p] = order[(idx + 1) % order.length];
    vector.activeVec = v;
    vector.activePart = p;
    renderVector();
  }

  function insertAnsVector() {
    vectorSetActiveValue(convPlainNumber(lastAnswer));
    saveVector();
    renderVector();
  }

  vectorPanel.addEventListener('click', (e) => {
    const row = e.target.closest('.vector-field');
    if (!row) return;
    vector.activeVec = row.dataset.vec;
    vector.activePart = row.dataset.part;
    renderVector();
  });

  vectorToolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.graph-tool-btn');
    if (!btn) return;
    handleAction(btn.dataset.action, btn.dataset.value);
  });

  // ---------- Complex number mode ----------
  const savedComplexA = JSON.parse(localStorage.getItem('calc-complex-a') || 'null');
  const savedComplexB = JSON.parse(localStorage.getItem('calc-complex-b') || 'null');
  const complexNum = {
    entries: {
      a: savedComplexA || { re: '1', im: '0' },
      b: savedComplexB || { re: '0', im: '0' },
    },
    activeNum: 'a',
    activePart: 're',
    opLabel: '',
    resultText: '',
  };

  function isComplexMode() {
    return calculator.classList.contains('complex');
  }

  function saveComplex() {
    localStorage.setItem('calc-complex-a', JSON.stringify(complexNum.entries.a));
    localStorage.setItem('calc-complex-b', JSON.stringify(complexNum.entries.b));
  }

  function complexNumeric(key) {
    const e = complexNum.entries[key];
    return { re: parseFloat(e.re) || 0, im: parseFloat(e.im) || 0 };
  }

  function cAdd(x, y) { return { re: x.re + y.re, im: x.im + y.im }; }
  function cSub(x, y) { return { re: x.re - y.re, im: x.im - y.im }; }
  function cMul(x, y) { return { re: x.re * y.re - x.im * y.im, im: x.re * y.im + x.im * y.re }; }
  function cDiv(x, y) {
    const denom = y.re * y.re + y.im * y.im;
    if (denom === 0) return null;
    return { re: (x.re * y.re + x.im * y.im) / denom, im: (x.im * y.re - x.re * y.im) / denom };
  }
  function cModulus(x) { return Math.sqrt(x.re * x.re + x.im * x.im); }
  function cArgument(x) {
    const radians = Math.atan2(x.im, x.re);
    return state.isDegrees ? (radians * 180) / Math.PI : radians;
  }
  function cConjugate(x) { return { re: x.re, im: -x.im }; }

  function formatComplex(z) {
    const sign = z.im < 0 ? '-' : '+';
    return `${formatNumber(z.re)} ${sign} ${formatNumber(Math.abs(z.im))}i`;
  }

  function complexCompute(op) {
    const A = complexNumeric('a');
    const B = complexNumeric('b');
    const activeLabel = complexNum.activeNum === 'b' ? 'B' : 'A';
    const activeZ = complexNum.activeNum === 'b' ? B : A;
    switch (op) {
      case 'add':
        complexNum.opLabel = 'A + B';
        complexNum.resultText = formatComplex(cAdd(A, B));
        break;
      case 'sub':
        complexNum.opLabel = 'A − B';
        complexNum.resultText = formatComplex(cSub(A, B));
        break;
      case 'mul':
        complexNum.opLabel = 'A × B';
        complexNum.resultText = formatComplex(cMul(A, B));
        break;
      case 'div': {
        const result = cDiv(A, B);
        complexNum.opLabel = 'A ÷ B';
        complexNum.resultText = result ? formatComplex(result) : t('error');
        break;
      }
      case 'mod':
        complexNum.opLabel = `|${activeLabel}|`;
        complexNum.resultText = formatNumber(cModulus(activeZ));
        break;
      case 'arg':
        complexNum.opLabel = `arg(${activeLabel})`;
        complexNum.resultText = formatNumber(cArgument(activeZ));
        break;
      case 'conj':
        complexNum.opLabel = `conj(${activeLabel})`;
        complexNum.resultText = formatComplex(cConjugate(activeZ));
        break;
    }
    renderComplex();
  }

  function renderComplex() {
    expressionEl.textContent = localizeDigits(complexNum.opLabel);
    resultEl.textContent = localizeDigits(complexNum.resultText);
    memoryIndicator.textContent = '';
    complexAreEl.textContent = localizeDigits(complexNum.entries.a.re);
    complexAimEl.textContent = localizeDigits(complexNum.entries.a.im);
    complexBreEl.textContent = localizeDigits(complexNum.entries.b.re);
    complexBimEl.textContent = localizeDigits(complexNum.entries.b.im);
    document.querySelectorAll('.complex-field').forEach((row) => {
      const isActive = row.dataset.num === complexNum.activeNum && row.dataset.part === complexNum.activePart;
      row.classList.toggle('active', isActive);
      row.setAttribute('aria-pressed', String(isActive));
    });
  }

  function complexActiveValue() {
    return complexNum.entries[complexNum.activeNum][complexNum.activePart];
  }

  function complexSetActiveValue(v) {
    complexNum.entries[complexNum.activeNum][complexNum.activePart] = v;
  }

  function complexAppendDigit(ch) {
    const cur = complexActiveValue();
    complexSetActiveValue((cur === '0' ? '' : cur) + ch);
    saveComplex();
    renderComplex();
  }

  function complexAppendDecimal() {
    const cur = complexActiveValue();
    if (cur.includes('.')) return;
    complexSetActiveValue(cur + '.');
    saveComplex();
    renderComplex();
  }

  function complexToggleSign() {
    const cur = complexActiveValue();
    complexSetActiveValue(cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur));
    saveComplex();
    renderComplex();
  }

  function complexBackspace() {
    const cur = complexActiveValue();
    complexSetActiveValue(cur.slice(0, -1) || '0');
    saveComplex();
    renderComplex();
  }

  function complexClearEntry() {
    complexSetActiveValue('0');
    saveComplex();
    renderComplex();
  }

  function complexClearAll() {
    complexNum.entries = { a: { re: '1', im: '0' }, b: { re: '0', im: '0' } };
    complexNum.activeNum = 'a';
    complexNum.activePart = 're';
    complexNum.opLabel = '';
    complexNum.resultText = '';
    saveComplex();
    renderComplex();
  }

  function complexNextField() {
    const order = [['a', 're'], ['a', 'im'], ['b', 're'], ['b', 'im']];
    const idx = order.findIndex(([n, p]) => n === complexNum.activeNum && p === complexNum.activePart);
    const [n, p] = order[(idx + 1) % order.length];
    complexNum.activeNum = n;
    complexNum.activePart = p;
    renderComplex();
  }

  function insertAnsComplex() {
    complexSetActiveValue(convPlainNumber(lastAnswer));
    saveComplex();
    renderComplex();
  }

  complexPanel.addEventListener('click', (e) => {
    const row = e.target.closest('.complex-field');
    if (!row) return;
    complexNum.activeNum = row.dataset.num;
    complexNum.activePart = row.dataset.part;
    renderComplex();
  });

  complexToolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('.graph-tool-btn');
    if (!btn) return;
    handleAction(btn.dataset.action, btn.dataset.value);
  });

  // ---------- Linear regression mode ----------
  const savedRegrPoints = JSON.parse(localStorage.getItem('calc-regr-points') || '[]');
  const regression = {
    points: savedRegrPoints,
    entryX: '0',
    entryY: '0',
    activeField: 'x',
  };

  function isRegressionMode() {
    return calculator.classList.contains('regression');
  }

  function saveRegrPoints() {
    localStorage.setItem('calc-regr-points', JSON.stringify(regression.points));
  }

  function regrActiveValue() {
    return regression.activeField === 'y' ? regression.entryY : regression.entryX;
  }

  function regrSetActiveValue(v) {
    if (regression.activeField === 'y') regression.entryY = v;
    else regression.entryX = v;
  }

  function computeRegression() {
    const pts = regression.points;
    const n = pts.length;
    if (n < 2) return { n, valid: false };
    const meanX = pts.reduce((a, p) => a + p.x, 0) / n;
    const meanY = pts.reduce((a, p) => a + p.y, 0) / n;
    let sxy = 0, sxx = 0, syy = 0;
    pts.forEach((p) => {
      const dx = p.x - meanX, dy = p.y - meanY;
      sxy += dx * dy; sxx += dx * dx; syy += dy * dy;
    });
    if (sxx === 0) return { n, valid: false };
    const m = sxy / sxx;
    const b = meanY - m * meanX;
    const r = syy === 0 ? 0 : sxy / Math.sqrt(sxx * syy);
    return { n, valid: true, m, b, r, r2: r * r };
  }

  function renderRegrChips() {
    regrChipsEl.innerHTML = '';
    if (regression.points.length === 0) {
      regrChipsEl.innerHTML = `<span class="stat-chips-empty">${t('statNoData')}</span>`;
      return;
    }
    regression.points.forEach((p, idx) => {
      const chip = document.createElement('span');
      chip.className = 'stat-chip';
      const valueSpan = document.createElement('span');
      valueSpan.textContent = `(${localizeDigits(formatNumber(p.x))}, ${localizeDigits(formatNumber(p.y))})`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', 'Remove');
      removeBtn.addEventListener('click', () => {
        regression.points.splice(idx, 1);
        saveRegrPoints();
        renderRegr();
      });
      chip.appendChild(valueSpan);
      chip.appendChild(removeBtn);
      regrChipsEl.appendChild(chip);
    });
  }

  function renderRegr() {
    const res = computeRegression();
    expressionEl.textContent = `${localizeDigits(String(res.n))} ${t('regrPointsLabel')}`;
    if (!res.valid) {
      resultEl.textContent = res.n < 2 ? t('regrNeedMore') : t('regrVertical');
    } else {
      const sign = res.b >= 0 ? '+' : '-';
      resultEl.textContent = localizeDigits(`y = ${formatNumber(res.m)}x ${sign} ${formatNumber(Math.abs(res.b))}`);
    }
    memoryIndicator.textContent = '';
    regrEntryXEl.textContent = localizeDigits(regression.entryX);
    regrEntryYEl.textContent = localizeDigits(regression.entryY);
    document.querySelectorAll('.regr-field').forEach((row) => {
      const isActive = row.dataset.field === regression.activeField;
      row.classList.toggle('active', isActive);
      row.setAttribute('aria-pressed', String(isActive));
    });
    regrNEl.textContent = localizeDigits(String(res.n));
    regrSlopeEl.textContent = res.valid ? localizeDigits(formatNumber(res.m)) : '—';
    regrInterceptEl.textContent = res.valid ? localizeDigits(formatNumber(res.b)) : '—';
    regrREl.textContent = res.valid ? localizeDigits(formatNumber(res.r)) : '—';
    regrR2El.textContent = res.valid ? localizeDigits(formatNumber(res.r2)) : '—';
    renderRegrChips();
  }

  function regrAppendDigit(ch) {
    const cur = regrActiveValue();
    regrSetActiveValue((cur === '0' ? '' : cur) + ch);
    renderRegr();
  }

  function regrAppendDecimal() {
    const cur = regrActiveValue();
    if (cur.includes('.')) return;
    regrSetActiveValue(cur + '.');
    renderRegr();
  }

  function regrToggleSign() {
    const cur = regrActiveValue();
    regrSetActiveValue(cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur));
    renderRegr();
  }

  function regrBackspace() {
    const cur = regrActiveValue();
    regrSetActiveValue(cur.slice(0, -1) || '0');
    renderRegr();
  }

  function regrClearEntry() {
    regrSetActiveValue('0');
    renderRegr();
  }

  function regrClearAll() {
    regression.points = [];
    regression.entryX = '0';
    regression.entryY = '0';
    regression.activeField = 'x';
    saveRegrPoints();
    renderRegr();
  }

  function regrNextField() {
    regression.activeField = regression.activeField === 'x' ? 'y' : 'x';
    renderRegr();
  }

  function regrAddPoint() {
    const x = parseFloat(regression.entryX) || 0;
    const y = parseFloat(regression.entryY) || 0;
    regression.points.push({ x, y });
    regression.entryX = '0';
    regression.entryY = '0';
    regression.activeField = 'x';
    saveRegrPoints();
    renderRegr();
  }

  function insertAnsRegr() {
    regrSetActiveValue(convPlainNumber(lastAnswer));
    renderRegr();
  }

  regrPanel.addEventListener('click', (e) => {
    const row = e.target.closest('.regr-field');
    if (!row) return;
    regression.activeField = row.dataset.field;
    renderRegr();
  });

  // ---------- Percentage & Finance mode ----------
  const financeFieldConfig = {
    percentof: { fields: ['a', 'b'], labels: ['financeFieldPercent', 'financeFieldValue'] },
    percentchange: { fields: ['a', 'b'], labels: ['financeFieldFrom', 'financeFieldTo'] },
    discount: { fields: ['a', 'b'], labels: ['financeFieldPrice', 'financeFieldDiscountPct'] },
    simpleinterest: { fields: ['a', 'b', 'c'], labels: ['financeFieldPrincipal', 'financeFieldRatePct', 'financeFieldYears'] },
    compoundinterest: { fields: ['a', 'b', 'c', 'd'], labels: ['financeFieldPrincipal', 'financeFieldRatePct', 'financeFieldYears', 'financeFieldCompounds'] },
    tip: { fields: ['a', 'b', 'c'], labels: ['financeFieldBill', 'financeFieldTipPct', 'financeFieldPeople'] },
  };
  const financeDefaultCoeffs = () => ({ a: '0', b: '0', c: '0', d: '1' });
  const savedFinanceType = localStorage.getItem('calc-finance-type');
  const savedFinanceCoeffs = JSON.parse(localStorage.getItem('calc-finance-coeffs') || 'null');
  const finance = {
    type: Object.prototype.hasOwnProperty.call(financeFieldConfig, savedFinanceType) ? savedFinanceType : 'percentof',
    coeffs: mergeKnownKeys(financeDefaultCoeffs(), savedFinanceCoeffs),
    activeField: 'a',
  };

  function isFinanceMode() {
    return calculator.classList.contains('finance');
  }

  function saveFinance() {
    localStorage.setItem('calc-finance-type', finance.type);
    localStorage.setItem('calc-finance-coeffs', JSON.stringify(finance.coeffs));
  }

  function computeFinance() {
    const a = parseFloat(finance.coeffs.a) || 0;
    const b = parseFloat(finance.coeffs.b) || 0;
    const c = parseFloat(finance.coeffs.c) || 0;
    const d = parseFloat(finance.coeffs.d) || 0;
    switch (finance.type) {
      case 'percentof':
        return { outputs: [{ label: t('financeOutResult'), value: (a * b) / 100 }] };
      case 'percentchange': {
        if (a === 0) return { error: t('financeNeedNonZero') };
        const change = ((b - a) / a) * 100;
        const dir = change >= 0 ? t('financeIncrease') : t('financeDecrease');
        return { outputs: [{ label: t('financeOutChange'), text: `${formatNumber(Math.abs(change))}% (${dir})` }] };
      }
      case 'discount': {
        const saved = (a * b) / 100;
        return { outputs: [{ label: t('financeOutSaved'), value: saved }, { label: t('financeOutFinalPrice'), value: a - saved }] };
      }
      case 'simpleinterest': {
        const interest = (a * b * c) / 100;
        return { outputs: [{ label: t('financeOutInterest'), value: interest }, { label: t('financeOutTotal'), value: a + interest }] };
      }
      case 'compoundinterest': {
        if (d === 0) return { error: t('financeNeedNonZero') };
        const amount = a * Math.pow(1 + (b / 100) / d, d * c);
        return { outputs: [{ label: t('financeOutInterest'), value: amount - a }, { label: t('financeOutTotal'), value: amount }] };
      }
      case 'tip': {
        if (c === 0) return { error: t('financeNeedNonZero') };
        const tipAmt = (a * b) / 100;
        const total = a + tipAmt;
        return { outputs: [
          { label: t('financeOutTip'), value: tipAmt },
          { label: t('financeOutTotalBill'), value: total },
          { label: t('financeOutPerPerson'), value: total / c },
        ] };
      }
      default:
        return { error: t('error') };
    }
  }

  function formatFinanceExpression() {
    const cfg = financeFieldConfig[finance.type];
    return cfg.fields.map((f, i) => `${t(cfg.labels[i])}=${finance.coeffs[f]}`).join(', ');
  }

  function updateFinanceTabsUI() {
    document.querySelectorAll('.finance-type-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.type === finance.type);
    });
    const cfg = financeFieldConfig[finance.type];
    financeCRow.style.display = cfg.fields.includes('c') ? '' : 'none';
    financeDRow.style.display = cfg.fields.includes('d') ? '' : 'none';
  }

  function setFinanceType(type) {
    finance.type = type;
    finance.activeField = 'a';
    updateFinanceTabsUI();
    saveFinance();
    renderFinance();
  }

  function renderFinance() {
    const cfg = financeFieldConfig[finance.type];
    const labelEls = { a: financeALabelEl, b: financeBLabelEl, c: financeCLabelEl, d: financeDLabelEl };
    cfg.fields.forEach((f, i) => { labelEls[f].textContent = t(cfg.labels[i]); });

    expressionEl.textContent = localizeDigits(formatFinanceExpression());
    const res = computeFinance();
    const outSlots = [
      { labelEl: financeOut1LabelEl, valEl: financeOut1El, row: null },
      { labelEl: financeOut2LabelEl, valEl: financeOut2El, row: financeOut2Row },
      { labelEl: financeOut3LabelEl, valEl: financeOut3El, row: financeOut3Row },
    ];
    if (res.error) {
      resultEl.textContent = localizeDigits(res.error);
      financeOut1LabelEl.textContent = t('financeOutResult');
      financeOut1El.textContent = '—';
      if (financeOut2Row) financeOut2Row.style.display = 'none';
      if (financeOut3Row) financeOut3Row.style.display = 'none';
    } else {
      const outputs = res.outputs;
      const primary = outputs[0];
      resultEl.textContent = localizeDigits(primary.text !== undefined ? primary.text : formatNumber(primary.value));
      outSlots.forEach((slot, i) => {
        const out = outputs[i];
        if (!out) {
          if (slot.row) slot.row.style.display = 'none';
          return;
        }
        if (slot.row) slot.row.style.display = '';
        slot.labelEl.textContent = out.label;
        slot.valEl.textContent = localizeDigits(out.text !== undefined ? out.text : formatNumber(out.value));
      });
    }
    memoryIndicator.textContent = '';
    financeAEl.textContent = localizeDigits(finance.coeffs.a);
    financeBEl.textContent = localizeDigits(finance.coeffs.b);
    financeCEl.textContent = localizeDigits(finance.coeffs.c);
    financeDEl.textContent = localizeDigits(finance.coeffs.d);
    document.querySelectorAll('.finance-field').forEach((row) => {
      const isActive = row.dataset.field === finance.activeField;
      row.classList.toggle('active', isActive);
      row.setAttribute('aria-pressed', String(isActive));
    });
  }

  function financeFieldOrder() {
    return financeFieldConfig[finance.type].fields;
  }

  function financeNextField() {
    const order = financeFieldOrder();
    const idx = order.indexOf(finance.activeField);
    finance.activeField = order[(idx + 1) % order.length];
    renderFinance();
  }

  function financeAppendDigit(ch) {
    const cur = finance.coeffs[finance.activeField];
    finance.coeffs[finance.activeField] = (cur === '0' ? '' : cur) + ch;
    saveFinance();
    renderFinance();
  }

  function financeAppendDecimal() {
    const cur = finance.coeffs[finance.activeField];
    if (cur.includes('.')) return;
    finance.coeffs[finance.activeField] = cur + '.';
    saveFinance();
    renderFinance();
  }

  function financeToggleSign() {
    const cur = finance.coeffs[finance.activeField];
    finance.coeffs[finance.activeField] = cur.startsWith('-') ? cur.slice(1) : (cur === '0' ? '0' : '-' + cur);
    saveFinance();
    renderFinance();
  }

  function financeBackspace() {
    const cur = finance.coeffs[finance.activeField];
    finance.coeffs[finance.activeField] = cur.slice(0, -1) || '0';
    saveFinance();
    renderFinance();
  }

  function financeClearEntry() {
    finance.coeffs[finance.activeField] = '0';
    saveFinance();
    renderFinance();
  }

  function financeClearAll() {
    finance.coeffs = financeDefaultCoeffs();
    finance.activeField = 'a';
    saveFinance();
    renderFinance();
  }

  function insertAnsFinance() {
    finance.coeffs[finance.activeField] = convPlainNumber(lastAnswer);
    saveFinance();
    renderFinance();
  }

  financeTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.finance-type-btn');
    if (!btn) return;
    setFinanceType(btn.dataset.type);
  });

  financeInputPanel.addEventListener('click', (e) => {
    const row = e.target.closest('.finance-field');
    if (!row) return;
    finance.activeField = row.dataset.field;
    renderFinance();
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

  const combinOpNames = ['nCr', 'nPr', 'gcd', 'lcm', 'logb'];

  function tokenize(str) {
    const tokens = [];
    let i = 0;
    const funcs = ['asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'sin', 'cos', 'tan', 'log', 'ln', 'sqrt'];
    while (i < str.length) {
      const ch = str[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (/[0-9.]/.test(ch)) {
        let num = '';
        while (i < str.length && /[0-9.]/.test(str[i])) { num += str[i]; i++; }
        tokens.push({ type: 'num', value: parseFloat(num) });
        continue;
      }
      const matchedCombinOp = combinOpNames.find((op) => str.startsWith(op, i));
      if (matchedCombinOp) {
        tokens.push({ type: 'op', value: matchedCombinOp });
        i += matchedCombinOp.length;
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
      while (this.peek() && this.peek().type === 'op' && combinOpNames.includes(this.peek().value)) {
        const op = this.next().value;
        const right = this.parsePow();
        if (op === 'nCr') left = combinations(left, right);
        else if (op === 'nPr') left = permutations(left, right);
        else if (op === 'gcd') left = gcdOf(left, right);
        else if (op === 'lcm') left = lcmOf(left, right);
        else left = logBase(left, right);
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

  function logBase(x, base) {
    if (x <= 0 || base <= 0 || base === 1) return NaN;
    return Math.log(x) / Math.log(base);
  }

  function applyFunc(name, arg) {
    const toRad = (v) => state.isDegrees ? (v * Math.PI / 180) : v;
    const fromRad = (v) => state.isDegrees ? (v * 180 / Math.PI) : v;
    switch (name) {
      case 'sin': return Math.sin(toRad(arg));
      case 'cos': return Math.cos(toRad(arg));
      case 'tan': return Math.tan(toRad(arg));
      case 'asin': return fromRad(Math.asin(arg));
      case 'acos': return fromRad(Math.acos(arg));
      case 'atan': return fromRad(Math.atan(arg));
      case 'sinh': return Math.sinh(arg);
      case 'cosh': return Math.cosh(arg);
      case 'tanh': return Math.tanh(arg);
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
    tableOpen: false,
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

    if (graphState.tableOpen) renderGraphTable();
  }

  function renderGraphTable() {
    const { xMin, xMax } = graphState;
    const n = 10;
    const rows = [];
    for (let i = 0; i <= n; i++) {
      const x = xMin + ((xMax - xMin) * i) / n;
      const y = evalGraphAt(x);
      const xStr = localizeDigits(formatNumber(Math.round(x * 1e4) / 1e4));
      const yStr = isFinite(y) ? localizeDigits(formatNumber(Math.round(y * 1e4) / 1e4)) : t('error');
      rows.push(`<div class="graph-table-row"><span class="gx">x=${xStr}</span><span>${yStr}</span></div>`);
    }
    graphTable.innerHTML = rows.join('');
  }

  function graphToggleTable() {
    graphState.tableOpen = !graphState.tableOpen;
    graphTableWrap.classList.toggle('open', graphState.tableOpen);
    if (graphState.tableOpen) renderGraphTable();
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
      const emptyLi = document.createElement('li');
      emptyLi.className = 'empty';
      emptyLi.textContent = t('noHistory');
      historyList.appendChild(emptyLi);
      return;
    }
    state.history.forEach(({ expr, res }) => {
      const li = document.createElement('li');
      // Built via textContent, not innerHTML: expr/res round-trip through
      // Backup & Restore's JSON import, which is untrusted input a user
      // could load from a crafted file -- they must never be parsed as markup.
      const exprSpan = document.createElement('span');
      exprSpan.className = 'h-expr';
      exprSpan.textContent = localizeDigits(String(expr).replace(/\*/g, '×').replace(/\//g, '÷'));
      const resSpan = document.createElement('span');
      resSpan.className = 'h-res';
      resSpan.textContent = `= ${localizeDigits(String(res))}`;
      li.appendChild(exprSpan);
      li.appendChild(resSpan);
      li.addEventListener('click', () => {
        state.expression = String(res).replace(/,/g, '');
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
        else if (isVectorMode()) vectorClearAll();
        else if (isComplexMode()) complexClearAll();
        else if (isRegressionMode()) regrClearAll();
        else if (isFinanceMode()) financeClearAll();
        else clearAll();
        break;
      case 'clear-entry':
        if (isProgrammerMode()) progClearEntry();
        else if (isConverterMode()) convClearEntry();
        else if (isStatisticsMode()) statClearEntry();
        else if (isSolverMode()) solverClearEntry();
        else if (isMatrixMode()) matrixClearEntry();
        else if (isVectorMode()) vectorClearEntry();
        else if (isComplexMode()) complexClearEntry();
        else if (isRegressionMode()) regrClearEntry();
        else if (isFinanceMode()) financeClearEntry();
        else clearEntry();
        break;
      case 'backspace':
        if (isProgrammerMode()) progBackspace();
        else if (isConverterMode()) convBackspace();
        else if (isStatisticsMode()) statBackspace();
        else if (isSolverMode()) solverBackspace();
        else if (isMatrixMode()) matrixBackspace();
        else if (isVectorMode()) vectorBackspace();
        else if (isComplexMode()) complexBackspace();
        else if (isRegressionMode()) regrBackspace();
        else if (isFinanceMode()) financeBackspace();
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
      case 'vectordigit': vectorAppendDigit(value); break;
      case 'vectordecimal': vectorAppendDecimal(); break;
      case 'vectorsign': vectorToggleSign(); break;
      case 'vectornext': vectorNextField(); break;
      case 'vectoradd': vectorCompute('add'); break;
      case 'vectorsub': vectorCompute('sub'); break;
      case 'vectordot': vectorCompute('dot'); break;
      case 'vectorcross': vectorCompute('cross'); break;
      case 'vectormag': vectorCompute('mag'); break;
      case 'vectorangle': vectorCompute('angle'); break;
      case 'complexdigit': complexAppendDigit(value); break;
      case 'complexdecimal': complexAppendDecimal(); break;
      case 'complexsign': complexToggleSign(); break;
      case 'complexnext': complexNextField(); break;
      case 'complexadd': complexCompute('add'); break;
      case 'complexsub': complexCompute('sub'); break;
      case 'complexmul': complexCompute('mul'); break;
      case 'complexdiv': complexCompute('div'); break;
      case 'complexmod': complexCompute('mod'); break;
      case 'complexarg': complexCompute('arg'); break;
      case 'complexconj': complexCompute('conj'); break;
      case 'regrdigit': regrAppendDigit(value); break;
      case 'regrdecimal': regrAppendDecimal(); break;
      case 'regrsign': regrToggleSign(); break;
      case 'regradd': regrAddPoint(); break;
      case 'financedigit': financeAppendDigit(value); break;
      case 'financedecimal': financeAppendDecimal(); break;
      case 'financesign': financeToggleSign(); break;
      case 'financenext': financeNextField(); break;
      case 'ans':
        if (isProgrammerMode()) insertAnsProg();
        else if (isConverterMode()) insertAnsConv();
        else if (isStatisticsMode()) insertAnsStat();
        else if (isSolverMode()) insertAnsSolver();
        else if (isMatrixMode()) insertAnsMatrix();
        else if (isVectorMode()) insertAnsVector();
        else if (isComplexMode()) insertAnsComplex();
        else if (isRegressionMode()) insertAnsRegr();
        else if (isFinanceMode()) insertAnsFinance();
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
      case 'graphtoggletable': graphToggleTable(); break;
    }
  }

  [keys, sciRow, progRow, progKeys, convKeys, statKeys, solverKeys, graphRow, graphKeys, matrixKeys, vectorKeys, complexKeys, regrKeys, financeKeys].forEach(container => {
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
    calculator.classList.toggle('vector', mode === 'vector');
    calculator.classList.toggle('complex', mode === 'complex');
    calculator.classList.toggle('regression', mode === 'regression');
    calculator.classList.toggle('finance', mode === 'finance');
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
      updateMatrixSizeUI();
      renderMatrix();
    }
    if (mode === 'vector') {
      renderVector();
    }
    if (mode === 'complex') {
      renderComplex();
    }
    if (mode === 'regression') {
      renderRegr();
    }
    if (mode === 'finance') {
      updateFinanceTabsUI();
      renderFinance();
    }
    localStorage.setItem('calc-active-mode', mode);
    if (helpOverlay.classList.contains('open')) renderHelpContent();
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchToMode(btn.dataset.mode));
  });

  const guideText = {
    en: {
      standard: {
        description: 'Everyday arithmetic with the standard order of operations, memory (MC/MR/M+/M-), and Answer (ANS) recall.',
        examples: [
          { steps: '12 + 8 × 2 =', result: '= 28 (multiplication happens before addition)' },
          { steps: '5, M+, 3, M+, MR', result: '= 8 (recalls the sum stored in memory)' },
        ],
      },
      scientific: {
        description: 'Everything in Standard mode, plus trig, inverse trig (sin⁻¹/cos⁻¹/tan⁻¹), hyperbolic functions, log/ln, powers, factorial, combinatorics (nCr/nPr), GCD/LCM, and an arbitrary-base logarithm (logb).',
        examples: [
          { steps: 'In DEG mode: sin, 30, ), =', result: '= 0.5' },
          { steps: '5, nCr, 2, =', result: '= 10 (ways to choose 2 items from 5)' },
          { steps: '8, logb, 2, =', result: '= 3 (log base 2 of 8)' },
        ],
      },
      programmer: {
        description: 'Work in HEX, DEC, OCT, or BIN using the base tabs above the display, with bitwise AND/OR/XOR/NOT and bit-shift operators.',
        examples: [
          { steps: 'In HEX: 1A, AND, 0F, =', result: '= A (0x0A)' },
          { steps: 'In HEX: A, OR, 5, =', result: '= F' },
        ],
      },
      converter: {
        description: 'Convert between units across Length, Weight, Temperature, Data, Area, Volume, Speed, Time, and Currency. Pick a category tab, choose the From/To units, then type a value. Currency rates are static (not live) so conversions still work fully offline.',
        examples: [
          { steps: 'Length: 1 Meter → Foot', result: '= 3.280839895 ft' },
          { steps: 'Temperature: 0 Celsius → Fahrenheit', result: '= 32 °F' },
          { steps: 'Currency: 100 USD → EUR', result: '≈ 92 EUR' },
        ],
      },
      statistics: {
        description: 'Add a list of numbers to get the count, sum, mean, median, mode, quartiles, IQR, and both population and sample standard deviation.',
        examples: [
          { steps: 'Add: 2, 4, 4, 4, 5, 5, 7, 9', result: 'Mean = 5, Median = 4.5, Mode = 4' },
        ],
      },
      solver: {
        description: 'Solve Linear (ax+b=0), Quadratic (ax²+bx+c=0), Cubic (ax³+bx²+cx+d=0), a System 2×2 (a₁x+b₁y=c₁, a₂x+b₂y=c₂), or a System 3×3 of linear equations, including complex roots for quadratics and cubics.',
        examples: [
          { steps: 'Quadratic: a=1, b=-5, c=6', result: 'x₁ = 3, x₂ = 2' },
          { steps: 'Quadratic: a=1, b=0, c=1', result: 'x = 0 ± 1i (no real roots)' },
          { steps: 'System 2×2: 2x+y=5, x-y=1', result: 'x = 2, y = 1' },
          { steps: 'System 3×3: x+y+z=6, 2x+y-z=1, x-y+2z=5', result: 'x = 1, y = 2, z = 3' },
        ],
      },
      graphing: {
        description: 'Type f(x) (and optionally g(x)) with the on-screen keypad, then use the toolbar for Roots, ∫dx, Intersect, or Table. Tap the graph itself to trace a point and see its slope.',
        examples: [
          { steps: 'f(x) = x^2 - 4, then Roots', result: 'Roots at x = -2 and x = 2' },
          { steps: 'f(x) = x, g(x) = x^2, then Intersect', result: 'Meets at (0, 0) and (1, 1)' },
        ],
      },
      matrix: {
        description: 'Switch between 2×2 and 3×3 sizes, enter values into matrices A and B by tapping a cell, then compute A+B, A-B, A×B, Det, or Inverse (via cofactor expansion for 3×3) of whichever matrix is active.',
        examples: [
          { steps: 'A=[1,2;3,4], B=[5,6;7,8], then A+B', result: '= [6, 8; 10, 12]' },
          { steps: 'Det of A=[1,2;3,4]', result: '= -2' },
          { steps: '3×3: Det of A=[1,0,2;-1,3,1;0,2,4]', result: '= 6' },
        ],
      },
      vector: {
        description: 'Enter two 3D vectors A and B by tapping their x/y/z fields, then compute A+B, A-B, the dot product A·B, the cross product A×B, the magnitude of whichever vector is active, or the angle between A and B.',
        examples: [
          { steps: 'A=(1,2,3), B=(4,5,6), then A+B', result: '= (5, 7, 9)' },
          { steps: 'Dot of A=(1,2,3), B=(4,5,6)', result: '= 32' },
          { steps: 'Cross of A=(1,2,3), B=(4,5,6)', result: '= (-3, 6, -3)' },
        ],
      },
      complex: {
        description: 'Enter two complex numbers A and B by tapping their Re/Im fields, then compute A+B, A-B, A×B, A÷B, or Mod/Arg/Conj of whichever number is active.',
        examples: [
          { steps: 'A=3+4i, B=1-2i, then A+B', result: '= 4 + 2i' },
          { steps: 'Mod of A=3+4i', result: '= 5 (that is, |3+4i|)' },
        ],
      },
      regression: {
        description: 'Add (x, y) pairs to fit a least-squares line y=mx+b, with the correlation coefficient r and r² shown alongside it.',
        examples: [
          { steps: 'Add: (1,2), (2,4), (3,6), (4,8)', result: 'y = 2x + 0, r = 1 (a perfect fit)' },
        ],
      },
      finance: {
        description: 'Everyday percentage and money math: what percent of a value, percent change, discounts, simple/compound interest, and splitting a tip. Pick a tab, tap a field to edit it.',
        examples: [
          { steps: '% Of: Percent=20, Value=150', result: '= 30' },
          { steps: 'Discount: Price=200, Discount %=15', result: 'Saved = 30, Final Price = 170' },
          { steps: 'Tip Split: Bill=100, Tip %=18, People=4', result: 'Tip = 18, Total = 118, Per Person = 29.5' },
        ],
      },
    },
    mr: {
      standard: {
        description: 'मानक क्रमानुसार दैनंदिन अंकगणित, मेमरी (MC/MR/M+/M-), आणि उत्तर (ANS) पुन्हा वापरण्याची सुविधा.',
        examples: [
          { steps: '12 + 8 × 2 =', result: '= 28 (गुणाकार बेरजेपूर्वी होतो)' },
          { steps: '5, M+, 3, M+, MR', result: '= 8 (मेमरीमधील बेरीज दाखवते)' },
        ],
      },
      scientific: {
        description: 'मानक मोडमधील सर्व सुविधांसह त्रिकोणमिती, व्यस्त त्रिकोणमिती (sin⁻¹/cos⁻¹/tan⁻¹), हायपरबॉलिक फंक्शन्स, log/ln, घात, क्रमगुणित, संयोजनशास्त्र (nCr/nPr), GCD/LCM, आणि कोणत्याही पायाचा लॉगरिथम (logb).',
        examples: [
          { steps: 'DEG मोडमध्ये: sin, 30, ), =', result: '= 0.5' },
          { steps: '5, nCr, 2, =', result: '= 10 (5 पैकी 2 निवडण्याचे मार्ग)' },
          { steps: '8, logb, 2, =', result: '= 3 (2 च्या पायावर 8 चा log)' },
        ],
      },
      programmer: {
        description: 'डिस्प्लेवरील बेस टॅब वापरून HEX, DEC, OCT किंवा BIN मध्ये काम करा, तसेच बिटवाइज AND/OR/XOR/NOT आणि बिट-शिफ्ट क्रिया वापरा.',
        examples: [
          { steps: 'HEX मध्ये: 1A, AND, 0F, =', result: '= A (0x0A)' },
          { steps: 'HEX मध्ये: A, OR, 5, =', result: '= F' },
        ],
      },
      converter: {
        description: 'लांबी, वजन, तापमान, डेटा, क्षेत्रफळ, घनफळ, वेग, वेळ आणि चलन या श्रेणींमध्ये एकके रूपांतरित करा. श्रेणी टॅब निवडा, From/To एकके निवडा, आणि मूल्य टाका. चलन दर स्थिर आहेत (लाइव्ह नाहीत) त्यामुळे रूपांतरण ऑफलाइनही काम करते.',
        examples: [
          { steps: 'लांबी: 1 मीटर → फूट', result: '= 3.280839895 ft' },
          { steps: 'तापमान: 0 सेल्सिअस → फॅरनहाइट', result: '= 32 °F' },
          { steps: 'चलन: 100 USD → EUR', result: '≈ 92 EUR' },
        ],
      },
      statistics: {
        description: 'संख्यांची यादी जोडून N, बेरीज, सरासरी, मध्यम, बहुलक, चतुर्थांश, IQR, तसेच लोकसंख्या आणि नमुना मानक विचलन मिळवा.',
        examples: [
          { steps: 'जोडा: 2, 4, 4, 4, 5, 5, 7, 9', result: 'सरासरी = 5, मध्यम = 4.5, बहुलक = 4' },
        ],
      },
      solver: {
        description: 'रेषीय (ax+b=0), द्विघात (ax²+bx+c=0), घन (ax³+bx²+cx+d=0), प्रणाली 2×2 (a₁x+b₁y=c₁, a₂x+b₂y=c₂), किंवा रेषीय समीकरणांची प्रणाली 3×3 सोडवा, द्विघात व घन समीकरणांसाठी सम्मिश्र मुळांसह.',
        examples: [
          { steps: 'द्विघात: a=1, b=-5, c=6', result: 'x₁ = 3, x₂ = 2' },
          { steps: 'द्विघात: a=1, b=0, c=1', result: 'x = 0 ± 1i (वास्तव मुळे नाहीत)' },
          { steps: 'प्रणाली 2×2: 2x+y=5, x-y=1', result: 'x = 2, y = 1' },
          { steps: 'प्रणाली 3×3: x+y+z=6, 2x+y-z=1, x-y+2z=5', result: 'x = 1, y = 2, z = 3' },
        ],
      },
      graphing: {
        description: 'ऑन-स्क्रीन कीपॅड वापरून f(x) (आणि इच्छित असल्यास g(x)) टाका, नंतर Roots, ∫dx, Intersect किंवा Table साठी टूलबार वापरा. बिंदू ट्रेस करण्यासाठी आलेखावर टॅप करा.',
        examples: [
          { steps: 'f(x) = x^2 - 4, नंतर Roots', result: 'x = -2 आणि x = 2 वर मुळे' },
          { steps: 'f(x) = x, g(x) = x^2, नंतर Intersect', result: '(0, 0) आणि (1, 1) येथे भेटतात' },
        ],
      },
      matrix: {
        description: '2×2 आणि 3×3 आकारांमध्ये बदला, सेलवर टॅप करून मॅट्रिक्स A आणि B मध्ये मूल्ये टाका, नंतर A+B, A-B, A×B, Det, किंवा सक्रिय मॅट्रिक्सचा Inverse (3×3 साठी कोफॅक्टर विस्तारद्वारे) काढा.',
        examples: [
          { steps: 'A=[1,2;3,4], B=[5,6;7,8], नंतर A+B', result: '= [6, 8; 10, 12]' },
          { steps: 'A=[1,2;3,4] चा Det', result: '= -2' },
          { steps: '3×3: A=[1,0,2;-1,3,1;0,2,4] चा Det', result: '= 6' },
        ],
      },
      vector: {
        description: 'x/y/z फील्डवर टॅप करून दोन त्रिमितीय सदिश A आणि B टाका, नंतर A+B, A-B, डॉट गुणाकार A·B, क्रॉस गुणाकार A×B, सक्रिय सदिशाचे परिमाण, किंवा A आणि B मधील कोन काढा.',
        examples: [
          { steps: 'A=(1,2,3), B=(4,5,6), नंतर A+B', result: '= (5, 7, 9)' },
          { steps: 'A=(1,2,3), B=(4,5,6) चा डॉट', result: '= 32' },
          { steps: 'A=(1,2,3), B=(4,5,6) चा क्रॉस', result: '= (-3, 6, -3)' },
        ],
      },
      complex: {
        description: 'Re/Im फील्डवर टॅप करून दोन सम्मिश्र संख्या A आणि B टाका, नंतर A+B, A-B, A×B, A÷B, किंवा सक्रिय संख्येचा Mod/Arg/Conj काढा.',
        examples: [
          { steps: 'A=3+4i, B=1-2i, नंतर A+B', result: '= 4 + 2i' },
          { steps: 'A=3+4i चा Mod', result: '= 5 (म्हणजे |3+4i|)' },
        ],
      },
      regression: {
        description: '(x, y) जोड्या जोडून किमान-वर्ग रेषा y=mx+b बसवा, सोबत सहसंबंध गुणांक r आणि r² दाखवले जातात.',
        examples: [
          { steps: 'जोडा: (1,2), (2,4), (3,6), (4,8)', result: 'y = 2x + 0, r = 1 (परिपूर्ण जुळणी)' },
        ],
      },
      finance: {
        description: 'दैनंदिन टक्केवारी आणि पैशांचे गणित: टक्केवारी, टक्के बदल, सवलत, साधे/चक्रवाढ व्याज, आणि टिप वाटणी. टॅब निवडा, फील्ड संपादित करण्यासाठी त्यावर टॅप करा.',
        examples: [
          { steps: '% चे: टक्केवारी=20, मूल्य=150', result: '= 30' },
          { steps: 'सवलत: किंमत=200, सवलत %=15', result: 'बचत = 30, अंतिम किंमत = 170' },
          { steps: 'टिप वाटणी: बिल=100, टिप %=18, लोक=4', result: 'टिप = 18, एकूण = 118, प्रत्येकी = 29.5' },
        ],
      },
    },
  };

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
      vector: [
        ['0–9', 'Enter digits into the active field'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Move to next field'],
        ['Click field', 'Select that field to edit'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Reset both vectors'],
      ],
      complex: [
        ['0–9', 'Enter digits into the active field'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Move to next field'],
        ['Click field', 'Select that field to edit'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Reset both numbers'],
      ],
      regression: [
        ['0–9', 'Enter digits into the active field'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Switch between x and y'],
        ['Enter / =', 'Add point to dataset'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Clear all points'],
      ],
      finance: [
        ['0–9', 'Enter digits into the active field'],
        ['.', 'Decimal point'],
        ['−', 'Toggle sign'],
        ['Tab', 'Move to next field'],
        ['Click field', 'Select that field to edit'],
        ['Backspace', 'Delete last character'],
        ['Escape', 'Reset all fields'],
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
      vector: [
        ['0–9', 'सक्रिय फील्डमध्ये अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'पुढील फील्डवर जा'],
        ['फील्डवर क्लिक करा', 'ते फील्ड संपादित करण्यासाठी निवडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'दोन्ही सदिश रीसेट करा'],
      ],
      complex: [
        ['0–9', 'सक्रिय फील्डमध्ये अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'पुढील फील्डवर जा'],
        ['फील्डवर क्लिक करा', 'ते फील्ड संपादित करण्यासाठी निवडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'दोन्ही संख्या रीसेट करा'],
      ],
      regression: [
        ['0–9', 'सक्रिय फील्डमध्ये अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'x आणि y मध्ये बदला'],
        ['Enter / =', 'डेटासेटमध्ये बिंदू जोडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'सर्व बिंदू साफ करा'],
      ],
      finance: [
        ['0–9', 'सक्रिय फील्डमध्ये अंक टाका'],
        ['.', 'दशांश बिंदू'],
        ['−', 'चिन्ह बदला'],
        ['Tab', 'पुढील फील्डवर जा'],
        ['फील्डवर क्लिक करा', 'ते फील्ड संपादित करण्यासाठी निवडा'],
        ['Backspace', 'शेवटचे अक्षर काढा'],
        ['Escape', 'सर्व फील्ड रीसेट करा'],
      ],
    },
  };

  function renderHelpContent() {
    const activeBtn = document.querySelector('.mode-btn.active');
    const activeMode = activeBtn ? activeBtn.dataset.mode : 'standard';
    const shortcutBucket = activeMode === 'scientific' ? 'standard' : activeMode;
    const guide = guideText[state.language][activeMode];
    const rows = helpText[state.language][shortcutBucket] || [];

    let html = '';
    if (guide) {
      html += `<div class="help-guide">`;
      html += `<p class="help-guide-desc">${guide.description}</p>`;
      guide.examples.forEach((ex) => {
        html += `<div class="help-example">`;
        html += `<div class="help-example-label">${t('helpExampleLabel')}</div>`;
        html += `<div class="help-example-steps">${ex.steps}</div>`;
        html += `<div class="help-example-result">${ex.result}</div>`;
        html += `</div>`;
      });
      html += `</div>`;
      html += `<div class="help-section-title">${t('helpShortcutsTitle')}</div>`;
    }
    html += rows.map(([keyLabel, desc]) =>
      `<div class="help-row"><span class="help-keys">${keyLabel}</span><span class="help-desc">${desc}</span></div>`
    ).join('');
    helpBody.innerHTML = html;
  }

  function openHelp() {
    renderHelpContent();
    helpOverlay.classList.add('open');
    helpClose.focus();
  }

  function closeHelp() {
    helpOverlay.classList.remove('open');
    helpToggle.focus();
  }

  helpToggle.addEventListener('click', openHelp);
  helpClose.addEventListener('click', closeHelp);
  helpOverlay.addEventListener('click', (e) => {
    if (e.target === helpOverlay) closeHelp();
  });

  // ---------- Backup & Restore ----------
  const backupKeys = [
    'calc-active-mode', 'calc-complex-a', 'calc-complex-b', 'calc-finance-coeffs',
    'calc-finance-type', 'calc-graph-expr', 'calc-graph-expr-g', 'calc-history',
    'calc-lang', 'calc-matrix-a', 'calc-matrix-b', 'calc-matrix-size', 'calc-memory',
    'calc-prog-base', 'calc-regr-points', 'calc-solver-coeffs', 'calc-solver-type',
    'calc-stat-data', 'calc-theme', 'calc-vector-a', 'calc-vector-b',
  ];

  function setDataStatus(msg, isError) {
    dataStatus.textContent = msg;
    dataStatus.classList.toggle('error', !!isError);
  }

  function openData() {
    setDataStatus('', false);
    dataOverlay.classList.add('open');
    dataClose.focus();
  }

  function closeData() {
    dataOverlay.classList.remove('open');
    dataToggle.focus();
  }

  function exportAllData() {
    const data = {};
    backupKeys.forEach((key) => {
      const value = localStorage.getItem(key);
      if (value !== null) data[key] = value;
    });
    const payload = { app: 'Advanced Calculator', version: 1, exportedAt: new Date().toISOString(), data };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `calculator-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDataStatus(t('dataExportedMsg'), false);
  }

  function importAllData(file) {
    const reader = new FileReader();
    reader.onload = () => {
      let parsed;
      try {
        parsed = JSON.parse(reader.result);
      } catch (e) {
        setDataStatus(t('dataImportErrorMsg'), true);
        return;
      }
      if (!parsed || typeof parsed.data !== 'object' || parsed.data === null) {
        setDataStatus(t('dataImportErrorMsg'), true);
        return;
      }
      const importedKeys = Object.keys(parsed.data).filter((k) => backupKeys.includes(k));
      if (importedKeys.length === 0) {
        setDataStatus(t('dataImportErrorMsg'), true);
        return;
      }
      importedKeys.forEach((key) => {
        localStorage.setItem(key, parsed.data[key]);
      });
      setDataStatus(t('dataImportedMsg'), false);
      setTimeout(() => window.location.reload(), 700);
    };
    reader.onerror = () => {
      setDataStatus(t('dataImportErrorMsg'), true);
    };
    reader.readAsText(file);
  }

  function resetAllData() {
    if (!window.confirm(t('dataResetConfirm'))) return;
    backupKeys.forEach((key) => localStorage.removeItem(key));
    setDataStatus(t('dataResetDoneMsg'), false);
    setTimeout(() => window.location.reload(), 700);
  }

  dataToggle.addEventListener('click', openData);
  dataClose.addEventListener('click', closeData);
  dataOverlay.addEventListener('click', (e) => {
    if (e.target === dataOverlay) closeData();
  });
  exportDataBtn.addEventListener('click', exportAllData);
  importDataBtn.addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', () => {
    const file = importFileInput.files && importFileInput.files[0];
    if (file) importAllData(file);
    importFileInput.value = '';
  });
  resetDataBtn.addEventListener('click', resetAllData);

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
  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter((el) => !el.disabled && el.offsetParent !== null);
  }

  function trapFocus(container, e) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusableElements(container);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (helpOverlay.classList.contains('open')) {
      if (key === 'Escape') { closeHelp(); return; }
      trapFocus(helpOverlay, e);
      return;
    }
    if (dataOverlay.classList.contains('open')) {
      if (key === 'Escape') { closeData(); return; }
      trapFocus(dataOverlay, e);
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
    if (isVectorMode()) {
      if (/[0-9]/.test(key)) { vectorAppendDigit(key); return; }
      if (key === '.') { vectorAppendDecimal(); return; }
      if (key === '-') { vectorToggleSign(); return; }
      if (key === 'Backspace') { vectorBackspace(); return; }
      if (key === 'Escape') { vectorClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); vectorNextField(); return; }
      return;
    }
    if (isComplexMode()) {
      if (/[0-9]/.test(key)) { complexAppendDigit(key); return; }
      if (key === '.') { complexAppendDecimal(); return; }
      if (key === '-') { complexToggleSign(); return; }
      if (key === 'Backspace') { complexBackspace(); return; }
      if (key === 'Escape') { complexClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); complexNextField(); return; }
      return;
    }
    if (isRegressionMode()) {
      if (/[0-9]/.test(key)) { regrAppendDigit(key); return; }
      if (key === '.') { regrAppendDecimal(); return; }
      if (key === '-') { regrToggleSign(); return; }
      if (key === 'Backspace') { regrBackspace(); return; }
      if (key === 'Escape') { regrClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); regrNextField(); return; }
      if (key === 'Enter' || key === '=') { e.preventDefault(); regrAddPoint(); return; }
      return;
    }
    if (isFinanceMode()) {
      if (/[0-9]/.test(key)) { financeAppendDigit(key); return; }
      if (key === '.') { financeAppendDecimal(); return; }
      if (key === '-') { financeToggleSign(); return; }
      if (key === 'Backspace') { financeBackspace(); return; }
      if (key === 'Escape') { financeClearAll(); return; }
      if (key === 'Tab') { e.preventDefault(); financeNextField(); return; }
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

  // ---------- Accessibility: make the custom "active field" rows/cells
  // (solver coefficients, matrix cells, finance/complex/regression fields)
  // discoverable and operable via keyboard and screen readers, not just
  // mouse clicks. The app's own Tab-key handling (see keydown support
  // above) already cycles the logical active field regardless of DOM
  // focus, so this doesn't change that -- it just lets assistive tech
  // reach, hear, and activate these controls too.
  const activeFieldSelector = '.solver-field, .matrix-cell, .finance-field, .complex-field, .regr-field, .vector-field';
  document.querySelectorAll(activeFieldSelector).forEach((el) => {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
  });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches(activeFieldSelector)) {
      e.preventDefault();
      e.target.click();
    }
  });

  // ---------- Init ----------
  (function init() {
    const savedTheme = localStorage.getItem('calc-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    populateUnitSelectors();
    applyLanguage();
    const validModes = ['standard', 'scientific', 'programmer', 'converter', 'statistics', 'solver', 'graphing', 'matrix', 'vector', 'complex', 'regression', 'finance'];
    const savedMode = localStorage.getItem('calc-active-mode');
    if (validModes.includes(savedMode)) switchToMode(savedMode);
  })();
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
