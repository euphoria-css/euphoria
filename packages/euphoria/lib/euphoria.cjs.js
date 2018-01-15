'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lodash = require('lodash');
var cssSelectorParser = require('css-selector-parser');
var lightness = _interopDefault(require('lightness'));

function createAST(rulesets) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var ast = {};

  // Setup responsive rule grouping.
  var responsiveRules = {};
  if (breakpoints) {
    lodash.each(breakpoints, function (val, key) {
      responsiveRules[key] = {
        query: '@media only screen and (' + val + ')',
        rules: {}
      };
    });
  }

  lodash.each(rulesets, function (ruleset) {
    lodash.each(ruleset.rules, function (_ref) {
      var breakpoint = _ref.breakpoint,
          properties = _ref.properties,
          selector = _ref.selector;

      // Add responsive styles to specific breakpoint section
      if (breakpoint) {
        responsiveRules[breakpoint].rules[selector] = properties;
      } else {
        ast[selector] = properties;
      }
    });
  });

  // Add responsive rules to AST
  lodash.each(responsiveRules, function (group, bp) {
    ast[group.query] = group.rules;
  });

  return lodash.pickBy(ast, function (v) {
    return !lodash.isEmpty(v);
  });
}

function makeProps(properties) {
  return lodash.map(properties, function (v, k) {
    return k + ': ' + v + ';';
  }).join(' ');
}

function makeRule(selector, properties) {
  return selector + ' { ' + makeProps(properties) + ' }';
}

function createCSS(ast) {
  return lodash.map(ast, function (properties, selector) {
    // If a responsive group, go ahead and loop through
    // the list of responsive styles and wrap them in a
    // media query.
    if (selector.startsWith('@media')) {
      var rules = lodash.map(properties, function (v, k) {
        return '  ' + makeRule(k, v);
      });
      rules.unshift(selector + ' {');
      rules.push('}');
      return rules.join('\n');
    }

    return makeRule(selector, properties);
  }).join('\n');
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var parser = new cssSelectorParser.CssSelectorParser();

var Rule = function () {
  function Rule(_ref) {
    var selector = _ref.selector,
        properties = _ref.properties,
        _ref$breakpoint = _ref.breakpoint,
        breakpoint = _ref$breakpoint === undefined ? null : _ref$breakpoint;
    classCallCheck(this, Rule);

    this.selector = selector;
    this.properties = properties;
    this.breakpoint = breakpoint;
  }

  createClass(Rule, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var obj = {
        selector: this.selector,
        properties: this.properties,
        css: this.css
      };

      if (this.breakpoint) obj.breakpoint = this.breakpoint;
      if (this.className) obj.className = this.className;

      return obj;
    }
  }, {
    key: 'className',
    get: function get$$1() {
      try {
        return parser.parse(this.selector).rule.classNames[0];
      } catch (error) {
        return null;
      }
    }
  }, {
    key: 'css',
    get: function get$$1() {
      return this.selector + ' { ' + lodash.map(this.properties, function (v, k) {
        return k + ': ' + v + ';';
      }).join(' ') + ' }';
    }
  }]);
  return Rule;
}();

var RuleSet = function () {
  function RuleSet(_ref) {
    var key = _ref.key,
        name = _ref.name,
        rules = _ref.rules,
        _ref$responsive = _ref.responsive,
        responsive = _ref$responsive === undefined ? false : _ref$responsive;
    classCallCheck(this, RuleSet);

    this.name = name;
    this.rules = rules;
    this.responsive = responsive;
    this.key = key;
  }

  createClass(RuleSet, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var obj = {
        name: this.name,
        rules: lodash.map(this.rules, function (r) {
          return r.toJSON();
        })
      };

      if (this.responsive) obj.responsive = true;

      return obj;
    }
  }, {
    key: 'css',
    get: function get$$1() {
      return lodash.map(this.rules, function (r) {
        return r.css;
      }).join('\n');
    }
  }]);
  return RuleSet;
}();

// import { CssSelectorParser } from 'css-selector-parser'

// export function create(selector, properties) {
//   return { [selector]: properties }
// }

// export function addProperty(rule, newProperty) {
//   const key = Object.keys(rule)[0]
//   const properties = { ...rule[key], ...newProperty }
//   return { [key]: properties }
// }

function addSuffix(selector, suffix) {
  // Add the suffix to the selector but before
  // any pseudo selectors.
  var parts = selector.split(':');
  parts[0] += '-' + suffix;
  return parts.join(':');
}

function inheritProps(inherits$$1, all) {
  if (lodash.isEmpty(inherits$$1)) return {};
  return lodash.reduce(all, function (props, rs) {
    lodash.each(rs.rules, function (r) {
      if (inherits$$1.includes(r.selector)) {
        props = _extends({}, props, r.properties);
      }
    });
    return props;
  }, {});
}

function createRuleSets(templates, options) {
  // Support passing in custom ruleset creators.
  templates = _extends({}, templates, options.customRules);

  var rulesets = lodash.reduce(templates, function (all, template, key) {
    var name = template.name,
        rules = template.rules;
    var breakpoints = options.breakpoints;

    var responsive = (options.responsive || []).includes(key);

    // Exit early if this rule is in the list of rules to disable.
    if (options.disabledRules && options.disabledRules.length && options.disabledRules.includes(key)) {
      return all;
    }

    // Generate a list of rules for the ruleset
    var rls = lodash.map(rules(options), function (_ref) {
      var inherits$$1 = _ref.inherits,
          selector = _ref.selector,
          properties = _ref.properties;
      return new Rule({
        selector: selector,
        properties: _extends({}, properties, inheritProps(inherits$$1, all))
      });
    });

    all[key] = new RuleSet({ key: key, name: name, rules: rls });

    // Add responsive styles, if set.
    if (responsive) {
      key = key + '-responsive';
      name = name + ' (responsive)';
      all[key] = new RuleSet({
        key: key,
        name: name,
        rules: lodash.flatten(lodash.map(breakpoints, function (_, bp) {
          return lodash.map(rls, function (rule) {
            return new Rule({
              selector: addSuffix(rule.selector, bp),
              properties: rule.properties,
              breakpoint: bp
            });
          });
        })),
        responsive: true
      });
    }

    return all;
  }, {});

  return rulesets;
}

var defaults$1 = {
  alignContent: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    around: 'space-around',
    between: 'space-between'
  },
  alignItems: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch'
  },
  alignSelf: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch'
  },
  backgroundSizes: ['contain', 'cover'],
  baseColors: null,
  // borderCollapse: true,
  // borderPositions: true,
  borderRadii: {
    none: 'none',
    xs: '0.15em',
    sm: '0.3em',
    md: '0.6em',
    lg: '1em',
    xl: '1.8em',
    pill: '100em',
    '100': '100%'
  },
  borderRadiiPositions: ['left', 'top', 'right', 'bottom'],
  // borderRemoval: true,
  borderStyles: ['solid', 'dotted', 'dashed'],
  borderWidths: {
    xxs: '0.05rem',
    sm: '0.15rem',
    md: '0.3rem',
    lg: '0.6rem',
    xl: '1.2rem',
    xxl: '2.4rem'
  },
  boxShadows: {
    '1': '0 0 4px 2px rgba(0, 0, 0, .2)',
    '2': '0 0 8px 2px rgba(0, 0, 0, .2)',
    '3': '2px 2px 4px 2px rgba(0, 0, 0, .2)',
    '4': '2px 2px 8px 0 rgba(0, 0, 0, .2)',
    '5': '4px 4px 4px 2px rgba(0, 0, 0, .2)'
  },
  breakpoints: {
    'xs-only': 'max-width: 599px',
    'sm-up': 'min-width: 600px',
    'md-up': 'min-width: 900px',
    'lg-up': 'min-width: 1200px'
    // 'xl-up': 'min-width: 1800px',
  },
  // clearfix: true,
  colors: {},
  colorGradients: true,
  cursors: [
  // General
  'auto', 'default', 'none',

  // Links & status
  'context-menu', 'help', 'pointer', 'progress', 'wait',

  // Selection
  'cell', 'crosshair', 'text', 'vertical-text',

  // Drag & drop
  'alias', 'copy', 'move', 'no-drop', 'not-allowed',

  // Resize
  'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize',

  // Zoom
  'zoom-in', 'zoom-out',

  // Drag/drop
  'grab', 'grabbing'],
  customRules: {},
  disabledRules: [],
  display: {
    db: 'block',
    di: 'inline',
    dib: 'inline-block',
    df: 'flex',
    dfb: 'flex-block',
    dt: 'table',
    dtc: 'table-cell',
    dn: 'none'
  },
  flexDirection: {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse',
    start: 'flex-start',
    end: 'flex-end'
  },
  flexOrder: {
    first: '-1',
    last: '1'
  },
  flexWrap: {
    wrap: 'wrap',
    reverse: 'reverse',
    none: 'nowrap'
  },
  floats: ['left', 'right', 'none'],
  fontFamilies: {
    system: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue" ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    'sans-serif': 'helvetica, ariel, sans-serif',
    serif: 'georgia, times, serif',
    code: 'Consolas, monaco, monospace',

    athelas: 'athelas, georgia, serif',
    avenir: '"avenir next", avenir, sans-serif',
    baskerville: 'baskerville, serif',
    bodoni: '"Bodoni MT", serif',
    calisto: '"Calisto MT", serif',
    courier: '"Courier Next", courier, monospace',
    garamond: 'garamond, serif',
    georgia: 'georgia, serif',
    helvetica: '"helvetica neue", helvetica, sans-serif',
    times: 'times, serif'
  },
  fontSizes: {
    xxxl: '4em',
    xxl: '2.6em',
    xl: '1.9em',
    lg: '1.3em',
    md: '1em',
    sm: '0.85em',
    xs: '0.7em'
  },
  fontStyles: ['italic'],
  fontWeights: {
    bold: 'bold',
    normal: 'normal',
    '1': '100',
    '2': '200',
    '3': '300',
    '4': '400',
    '5': '500',
    '6': '600',
    '7': '700',
    '8': '800',
    '9': '900'
  },
  justifyContent: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  },
  letterSpacing: {
    xxs: '-0.2em',
    xs: '-0.1em',
    sm: '-0.05em',
    md: 0,
    lg: '0.3em',
    xl: '0.6em',
    xxl: '1.2em'
  },
  lineHeights: {
    xxs: 0.5,
    xs: 0.75,
    sm: 1,
    md: 1.5,
    lg: 2,
    xl: 3,
    xxl: 4
  },
  margins: {
    none: 0,
    auto: 'auto',
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
    xxl: '14rem'
  },
  opacity: {
    '100': 1.0,
    '90': 0.9,
    '80': 0.8,
    '70': 0.7,
    '60': 0.6,
    '50': 0.5,
    '40': 0.4,
    '30': 0.3,
    '20': 0.2,
    '10': 0.1,
    '05': 0.05,
    '025': 0.025,
    '0': 0
  },
  overflow: ['visible', 'hidden', 'scroll', 'auto'],
  paddings: {
    none: 0,
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
    xxl: '14rem'
  },
  percentageSizes: {
    auto: 'auto',
    '0': '0%',
    '5': '5%',
    '10': '10%',
    '15': '15%',
    '20': '20%',
    '25': '25%',
    '30': '30%',
    '33': '33.3%',
    '40': '40%',
    '50': '50%',
    '60': '60%',
    '66': '66.6%',
    '70': '70%',
    '75': '75%',
    '80': '80%',
    '90': '90%',
    '100': '100%'
  },
  positions: ['relative', 'absolute', 'fixed'],
  positionValues: ['a', 'l', 't', 'r', 'b', 'x', 'y'],
  responsive: ['floats', 'margin', 'margin-percentages', 'padding', 'positions', 'widths', 'widths-max'],
  spacing: {
    none: 0,
    auto: 'auto',
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
    xxl: '14rem'
  },
  spacingDirections: ['', 'l', 't', 'r', 'b', 'x', 'y'],
  textAlignment: ['left', 'right', 'center', 'justify'],
  textDecorations: {
    none: 'none',
    line: 'line-through',
    underline: 'underline'
  },
  textTransforms: {
    upper: 'uppercase',
    lower: 'lowercase',
    capital: 'capitalize'
  },
  verticalAlignment: {
    base: 'baseline',
    bot: 'bottom',
    top: 'top',
    'text-top': 'text-top',
    'text-bot': 'text-bottom'
  },
  visibility: { visible: 'visible', invisible: 'hidden' },
  whitespace: ['pre', 'nowrap', 'normal'],
  zIndex: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
};

defaults$1.baseColors = {
  // Context colors
  primary: null,
  secondary: null,
  info: null,
  success: null,
  warning: null,
  danger: null,

  // Grayscale
  gray: '#7a7a7a',

  // General colors
  blue: '#3187c4',
  cyan: '#31c4a9',
  green: '#7db735',
  orange: '#dd6618',
  purple: '#963ebc',
  pink: '#bc328c',
  red: '#d8401e',
  yellow: '#efef00'
};

defaults$1.baseColors.primary = defaults$1.baseColors.cyan;
defaults$1.baseColors.secondary = defaults$1.baseColors.gray;
defaults$1.baseColors.info = defaults$1.baseColors.blue;
defaults$1.baseColors.success = defaults$1.baseColors.green;
defaults$1.baseColors.warning = defaults$1.baseColors.orange;
defaults$1.baseColors.danger = defaults$1.baseColors.red;

function createColors() {
  var baseColors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var gradients = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var colors = {};

  // Generate color gradients version for all colors.
  lodash.map(baseColors, function (val, key) {
    if (gradients) colors[key + '-lightest'] = lightness(val, 50);
    if (gradients) colors[key + '-lighter'] = lightness(val, 45);
    if (gradients) colors[key + '-light'] = lightness(val, 30);
    colors[key] = val;
    if (gradients) colors[key + '-dark'] = lightness(val, -10);
    if (gradients) colors[key + '-darker'] = lightness(val, -16);
    if (gradients) colors[key + '-darkest'] = lightness(val, -24);
  });

  // Some base colors that never change, thus they don't need
  // to be configurable
  colors.transparent = 'transparent';
  colors.black = 'black';
  colors.white = 'white';

  return colors;
}

function options() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var opts = Object.assign({}, defaults$1, overrides);
  opts.colors = createColors(opts.baseColors, opts.colorGradients);
  return opts;
}

function positionValue(prefix, dir, val) {
  var _ref6, _ref7;

  switch (dir) {
    case 'a':
      return defineProperty({}, prefix, val);
      break;
    case 'l':
      return defineProperty({}, prefix + '-left', val);
      break;
    case 't':
      return defineProperty({}, prefix + '-top', val);
      break;
    case 'r':
      return defineProperty({}, prefix + '-right', val);
      break;
    case 'b':
      return defineProperty({}, prefix + '-bottom', val);
      break;
    case 'x':
      return _ref6 = {}, defineProperty(_ref6, prefix + '-left', val), defineProperty(_ref6, prefix + '-right', val), _ref6;
      break;
    case 'y':
      return _ref7 = {}, defineProperty(_ref7, prefix + '-top', val), defineProperty(_ref7, prefix + '-bottom', val), _ref7;
      break;
    default:
      console.error(prefix, dir, val);
      throw new Error('invalid "' + prefix + '" value: ' + val + ', direction: ' + dir);
      break;
  }
}

function spacingValue(prefix, dir, val) {
  var _ref13, _ref14;

  switch (dir) {
    case '':
      return defineProperty({}, prefix, val);
      break;
    case 'l':
      return defineProperty({}, prefix + '-left', val);
      break;
    case 't':
      return defineProperty({}, prefix + '-top', val);
      break;
    case 'r':
      return defineProperty({}, prefix + '-right', val);
      break;
    case 'b':
      return defineProperty({}, prefix + '-bottom', val);
      break;
    case 'x':
      return _ref13 = {}, defineProperty(_ref13, prefix + '-left', val), defineProperty(_ref13, prefix + '-right', val), _ref13;
      break;
    case 'y':
      return _ref14 = {}, defineProperty(_ref14, prefix + '-top', val), defineProperty(_ref14, prefix + '-bottom', val), _ref14;
      break;
    default:
      throw new Error('invalid position "' + dir + '"');
      break;
  }
}

var templates = {
  // ---------------------------------------------------------
  // Display
  // ---------------------------------------------------------

  display: {
    name: 'Display',
    rules: function rules(opts) {
      return lodash.map(opts.display, function (val, key) {
        return {
          selector: '.' + key,
          properties: { display: val }
        };
      });
    }
  },
  overflow: {
    name: 'Overflow',
    rules: function rules(opts) {
      return lodash.map(opts.overflow, function (val, key) {
        return {
          selector: '.of-' + val,
          properties: { overflow: val }
        };
      });
    }
  },
  opacity: {
    name: 'Opacity',
    rules: function rules(opts) {
      return lodash.map(opts.opacity, function (val, key) {
        return {
          selector: '.o-' + key,
          properties: { opacity: val }
        };
      });
    }
  },
  'opacity-hover': {
    name: 'Opacity (hover)',
    rules: function rules(opts) {
      return lodash.map(opts.opacity, function (val, key) {
        return {
          selector: '.hov-o-' + key + ':hover',
          properties: { opacity: val }
        };
      });
    }
  },
  'z-index': {
    name: 'Z-Index',
    rules: function rules(opts) {
      return lodash.map(opts.zIndex, function (val, key) {
        return {
          selector: '.z-' + val,
          properties: { 'z-index': val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Positioning and display
  // ---------------------------------------------------------

  floats: {
    name: 'Floats',
    rules: function rules(opts) {
      return lodash.map(opts.floats, function (val, key) {
        return {
          selector: '.f' + val[0],
          properties: { float: val }
        };
      });
    }
  },
  positions: {
    name: 'Positioning',
    rules: function rules(opts) {
      return lodash.map(opts.positions, function (val, key) {
        return {
          selector: '.' + val,
          properties: { position: val }
        };
      });
    }
  },
  'text-alignment': {
    name: 'Text alignment',
    rules: function rules(opts) {
      return lodash.map(opts.textAlignment, function (val, key) {
        return {
          selector: '.' + val,
          properties: { 'text-align': val }
        };
      });
    }
  },
  'vertical-alignment': {
    name: 'Vertical alignment',
    rules: function rules(opts) {
      return lodash.map(opts.verticalAlignment, function (val, key) {
        return {
          selector: '.v-' + key,
          properties: { 'vertical-align': val }
        };
      });
    }
  },
  visibility: {
    name: 'Visibility',
    rules: function rules(opts) {
      return lodash.map(opts.visibility, function (val, key) {
        return {
          selector: '.' + key,
          properties: { visibility: val }
        };
      });
    }
  },
  clearfix: {
    name: 'Clearfix',
    rules: function rules(opts) {
      return [{
        selector: '.cf:after',
        properties: { clear: 'both', display: 'table', content: '""' }
      }];
    }
  },

  // ---------------------------------------------------------
  // Sizes
  // ---------------------------------------------------------

  widths: {
    name: 'Widths',
    rules: function rules(opts) {
      return lodash.map(opts.percentageSizes, function (val, key) {
        return {
          selector: '.w-' + key,
          properties: { width: val }
        };
      });
    }
  },
  'widths-max': {
    name: 'Widths (max)',
    rules: function rules(opts) {
      return lodash.map(opts.percentageSizes, function (val, key) {
        return {
          selector: '.mw-' + key,
          properties: { 'max-width': val }
        };
      });
    }
  },
  heights: {
    name: 'Heights',
    rules: function rules(opts) {
      return lodash.map(opts.percentageSizes, function (val, key) {
        return {
          selector: '.h-' + key,
          properties: { height: val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Colors
  // ---------------------------------------------------------

  'text-colors': {
    name: 'Text colors',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.' + key,
          properties: { color: val }
        };
      });
    }
  },
  'text-colors-hover': {
    name: 'Text colors (hover)',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.hov-' + key + ':hover',
          properties: { color: val }
        };
      });
    }
  },
  'background-colors': {
    name: 'Background colors',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.bg-' + key,
          properties: { background: val }
        };
      });
    }
  },
  'background-colors-hover': {
    name: 'Background colors (hover)',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.hov-bg-' + key + ':hover',
          properties: { background: val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Box styles
  // ---------------------------------------------------------

  'box-shadows': {
    name: 'Box shadows',
    rules: function rules(opts) {
      return lodash.map(opts.boxShadows, function (val, key) {
        return {
          selector: '.bs-' + key,
          properties: { 'box-shadow': val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Typography
  // ---------------------------------------------------------

  'font-sizes': {
    name: 'Font sizes',
    rules: function rules(opts) {
      return lodash.map(opts.fontSizes, function (val, key) {
        return {
          selector: '.txt-' + key,
          properties: { 'font-size': val }
        };
      });
    }
  },
  'text-transforms': {
    name: 'Text transforms',
    rules: function rules(opts) {
      return lodash.map(opts.textTransforms, function (val, key) {
        return {
          selector: '.' + key,
          properties: { 'text-transform': val }
        };
      });
    }
  },
  'font-styles': {
    name: 'Font styles',
    rules: function rules(opts) {
      return lodash.map(opts.fontStyles, function (val, key) {
        return {
          selector: '.' + val,
          properties: { 'font-style': val }
        };
      });
    }
  },
  'font-weights': {
    name: 'Font weights',
    rules: function rules(opts) {
      return lodash.map(opts.fontWeights, function (val, key) {
        return {
          selector: '.fw-' + key,
          properties: { 'font-weight': val }
        };
      });
    }
  },
  'text-decorations': {
    name: 'Text decorations',
    rules: function rules(opts) {
      return lodash.map(opts.textDecorations, function (val, key) {
        return {
          selector: '.td-' + key,
          properties: { 'text-decoration': val }
        };
      });
    }
  },
  'text-decorations-hover': {
    name: 'Text decorations (hover)',
    rules: function rules(opts) {
      return lodash.map(opts.textDecorations, function (val, key) {
        return {
          selector: '.hov-td-' + key + ':hover',
          properties: { 'text-decoration': val }
        };
      });
    }
  },
  'letter-spacing': {
    name: 'Letter spacing',
    rules: function rules(opts) {
      return lodash.map(opts.letterSpacing, function (val, key) {
        return {
          selector: '.ls-' + key,
          properties: { 'letter-spacing': val }
        };
      });
    }
  },
  'line-heights': {
    name: 'Line heights',
    rules: function rules(opts) {
      return lodash.map(opts.lineHeights, function (val, key) {
        return {
          selector: '.lh-' + key,
          properties: { 'line-height': val }
        };
      });
    }
  },
  'normalize-font': {
    name: 'Normalize font',
    rules: function rules(opts) {
      return [{
        selector: '.normal',
        properties: {
          'font-style': 'normal',
          'font-weight': 'normal',
          'text-decoration': 'none',
          'text-transform': 'none'
        }
      }];
    }
  },
  'font-families': {
    name: 'Font families',
    rules: function rules(opts) {
      return lodash.map(opts.fontFamilies, function (val, key) {
        return {
          selector: '.' + key,
          properties: { 'font-family': val }
        };
      });
    }
  },
  whitespace: {
    name: 'Whitespace',
    rules: function rules(opts) {
      return lodash.map(opts.whitespace, function (val, key) {
        return {
          selector: '.ws-' + val,
          properties: { 'white-space': val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Borders
  // ---------------------------------------------------------

  'border-positions': {
    name: 'Border positions',
    rules: function rules(opts) {
      return lodash.map(opts.positionValues, function (val, key) {
        return {
          selector: '.b' + val,
          properties: positionValue('border', val, '1px solid')
        };
      });
    }
  },
  'border-removal': {
    name: 'Border removal',
    rules: function rules(opts) {
      return lodash.map(opts.positionValues, function (val, key) {
        return {
          selector: '.b' + val + '-none',
          properties: positionValue('border', val, 'none')
        };
      });
    }
  },
  'border-styles': {
    name: 'Border styles',
    rules: function rules(opts) {
      return lodash.map(opts.borderStyles, function (val, key) {
        return {
          selector: '.b-' + val,
          properties: { 'border-style': val }
        };
      });
    }
  },
  'border-widths': {
    name: 'Border widths',
    rules: function rules(opts) {
      return lodash.map(opts.borderWidths, function (val, key) {
        return {
          selector: '.bw-' + key,
          properties: { 'border-width': val }
        };
      });
    }
  },
  'border-radii': {
    name: 'Border radii',
    rules: function rules(opts) {
      return lodash.map(opts.borderRadii, function (val, key) {
        return {
          selector: '.rad-' + key,
          properties: { 'border-radius': val }
        };
      });
    }
  },
  'border-radii-positions': {
    name: 'Border radii positions',
    rules: function rules(opts) {
      return lodash.map(opts.borderRadiiPositions, function (val, key) {
        var properties = void 0;
        switch (val) {
          case 'left':
            properties = {
              'border-top-right-radius': 0,
              'border-bottom-right-radius': 0
            };
            break;
          case 'top':
            properties = {
              'border-bottom-right-radius': 0,
              'border-bottom-left-radius': 0
            };
            break;
          case 'right':
            properties = {
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0
            };
            break;
          case 'bottom':
            properties = {
              'border-top-right-radius': 0,
              'border-top-left-radius': 0
            };
            break;
          default:
            throw new Error('invalid border radii position');
            break;
        }
        return {
          selector: '.rad-' + val,
          properties: properties
        };
      });
    }
  },
  'border-collapse': {
    name: 'Border collapse',
    rules: function rules(opts) {
      return [{
        selector: '.collapse',
        properties: { 'border-collapse': 'collapse' }
      }];
    }
  },
  'border-colors': {
    name: 'Border colors',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.bc-' + key,
          properties: { 'border-color': val }
        };
      });
    }
  },
  'border-colors-hover': {
    name: 'Border colors (hover)',
    rules: function rules(opts) {
      return lodash.map(opts.colors, function (val, key) {
        return {
          selector: '.hov-bc-' + key + ':hover',
          properties: { 'border-color': val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Flexbox
  // ---------------------------------------------------------

  'flex-direction': {
    name: 'Flex direction',
    rules: function rules(opts) {
      return lodash.map(opts.flexDirection, function (val, key) {
        return {
          selector: '.fd-' + key,
          properties: { 'flex-direction': val }
        };
      });
    }
  },
  'justify-content': {
    name: 'Justify content',
    rules: function rules(opts) {
      return lodash.map(opts.justifyContent, function (val, key) {
        return {
          selector: '.jc-' + key,
          properties: { 'justify-content': val }
        };
      });
    }
  },
  'align-items': {
    name: 'Align items',
    rules: function rules(opts) {
      return lodash.map(opts.alignItems, function (val, key) {
        return {
          selector: '.ai-' + key,
          properties: { 'align-items': val }
        };
      });
    }
  },
  'align-self': {
    name: 'Align self',
    rules: function rules(opts) {
      return lodash.map(opts.alignSelf, function (val, key) {
        return {
          selector: '.as-' + key,
          properties: { 'align-self': val }
        };
      });
    }
  },
  'align-content': {
    name: 'Align content',
    rules: function rules(opts) {
      return lodash.map(opts.alignContent, function (val, key) {
        return {
          selector: '.ac-' + key,
          properties: { 'align-content': val }
        };
      });
    }
  },
  'flex-wrap': {
    name: 'Flex wrap',
    rules: function rules(opts) {
      return lodash.map(opts.flexWrap, function (val, key) {
        return {
          selector: '.fw-' + key,
          properties: { 'flex-wrap': val }
        };
      });
    }
  },
  'flex-order': {
    name: 'Flex order',
    rules: function rules(opts) {
      return lodash.map(opts.flexOrder, function (val, key) {
        return {
          selector: '.fo-' + key,
          properties: { 'flex-order': val }
        };
      });
    }
  },

  // ---------------------------------------------------------
  // Spacing
  // ---------------------------------------------------------

  margin: {
    name: 'Margin',
    rules: function rules(opts) {
      return lodash.flatten(lodash.map(opts.margins, function (val, key) {
        return lodash.map(opts.spacingDirections, function (dir) {
          return {
            selector: '.m' + dir + '-' + key,
            properties: spacingValue('margin', dir, val)
          };
        });
      }));
    }
  },
  'margin-percentages': {
    name: 'Margin (percentages)',
    rules: function rules(opts) {
      return lodash.flatten(lodash.map(opts.percentageSizes, function (val, key) {
        return lodash.map(opts.spacingDirections, function (dir) {
          return {
            selector: '.m' + dir + '-' + key,
            properties: spacingValue('margin', dir, val)
          };
        });
      }));
    }
  },
  padding: {
    name: 'Padding',
    rules: function rules(opts) {
      return lodash.flatten(lodash.map(opts.paddings, function (val, key) {
        return lodash.map(opts.spacingDirections, function (dir) {
          return {
            selector: '.p' + dir + '-' + key,
            properties: spacingValue('padding', dir, val)
          };
        });
      }));
    }
  },

  // ---------------------------------------------------------
  // Lists
  // ---------------------------------------------------------

  lists: {
    name: 'Lists',
    rules: function rules(opts) {
      return [{
        selector: '.unstyled',
        properties: {
          'list-style': 'none'
        }
      }];
    }
  },

  // ---------------------------------------------------------
  // Other styles
  // ---------------------------------------------------------

  'background-sizes': {
    name: 'Background sizes',
    rules: function rules(opts) {
      return lodash.map(opts.backgroundSizes, function (val, key) {
        return {
          selector: '.' + val,
          properties: { 'background-size': val }
        };
      });
    }
  },
  cursors: {
    name: 'Cursors',
    rules: function rules(opts) {
      return lodash.map(opts.cursors, function (val, key) {
        return {
          selector: '.c-' + val,
          properties: { cursor: val }
        };
      });
    }
  }
};

function euphoria() {
  var customOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options$$1 = options(customOpts);

  var rulesets = function rulesets() {
    return createRuleSets(templates, options$$1);
  };
  var ast = function ast() {
    return createAST(rulesets(), options$$1.breakpoints);
  };
  var css = function css() {
    return createCSS(ast());
  };

  return { ast: ast, css: css, defaults: defaults$1, options: options$$1, rulesets: rulesets };
}

module.exports = euphoria;
