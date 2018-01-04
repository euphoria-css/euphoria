import _ from 'lodash';
import slugify from 'url-slug';
import { CssSelectorParser } from 'css-selector-parser';
import lightness from 'lightness';

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

var parser$1 = new CssSelectorParser();

var Rule = function () {
  function Rule(_ref) {
    var _this = this;

    var selector = _ref.selector,
        properties = _ref.properties,
        _ref$breakpoint = _ref.breakpoint,
        breakpoint = _ref$breakpoint === undefined ? null : _ref$breakpoint,
        _ref$important = _ref.important,
        important = _ref$important === undefined ? false : _ref$important,
        _ref$media = _ref.media,
        media = _ref$media === undefined ? null : _ref$media;
    classCallCheck(this, Rule);

    this._rawSelector = selector;
    this.properties = {};
    _.each(properties, function (val, key) {
      _this.properties[slugify(key)] = val;
    });
    this.important = important;
    this.breakpoint = breakpoint;
    this.media = media;
  }

  createClass(Rule, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }

    //----------------------------------------------
    // Private instance methods
    //----------------------------------------------

  }, {
    key: 'type',
    get: function get$$1() {
      return 'Rule';
    }
  }, {
    key: 'className',
    get: function get$$1() {
      return parser$1.parse(this.selector).rule.classNames[0];
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.selector;
    }
  }, {
    key: 'selector',
    get: function get$$1() {
      var parsed = parser$1.parse(this._rawSelector).rule;

      // Reconstruct the selector base name
      var selector = null;
      if (parsed.classNames) selector = '.' + parsed.classNames[0];
      if (parsed.tagName) selector = parsed.tagName;
      if (parsed.id) selector = '#' + parsed.id;

      // Add breakpoint suffix.
      if (this.breakpoint) selector += '-' + this.breakpoint;

      // Add pseudo selectors, if present.
      var pseudos = parsed.pseudos && parsed.pseudos.map(function (p) {
        return p.name;
      }).join(':');
      if (pseudos) selector += ':' + pseudos;

      return selector;
    }
  }, {
    key: 'css',
    get: function get$$1() {
      var rule = this.selector + ' { ' + this._propertyCSS + ' }';
      if (this.media) rule = '@media only screen and (' + this.media + ') { ' + rule + ' }';
      return rule;
    }
  }, {
    key: '_propertyCSS',
    get: function get$$1() {
      var _this2 = this;

      return _.map(this.properties, function (val, key) {
        return key + ': ' + val + (_this2.important ? ' !important' : '') + ';';
      }).join(' ');
    }
  }]);
  return Rule;
}();

var RuleSet = function () {
  function RuleSet(_ref) {
    var _ref$breakpoints = _ref.breakpoints,
        breakpoints = _ref$breakpoints === undefined ? null : _ref$breakpoints,
        name = _ref.name,
        rules = _ref.rules;
    classCallCheck(this, RuleSet);

    this.name = name;
    this.rules = rules;
    this.breakpoints = breakpoints;
  }

  createClass(RuleSet, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }
  }, {
    key: 'key',
    get: function get$$1() {
      return slugify(this.name.trim());
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'RuleSet';
    }
  }, {
    key: 'css',
    get: function get$$1() {
      var _this = this;

      if (!this.rules || !this.rules.length) return '';
      var separator = '\n';
      if (!this.breakpoints) return this.rules.join(separator);

      return _.map(this.breakpoints, function (value, label) {
        return ['@media only screen and (' + value + ') {', _this.rules.map(function (rule) {
          // Set the breakpoint for the rule so that
          // it will add the proper responsive suffix
          // to the class name.
          rule.breakpoint = label;
          return '  ' + rule;
        }).join(separator), '}'].join(separator);
      }).join(separator);
    }
  }]);
  return RuleSet;
}();

var parser = new CssSelectorParser();

var Euphoria = function () {
  function Euphoria() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Euphoria);

    this.defaults = {
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
      borderCollapse: true,
      borderPosition: true,
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
      borderRadiiPosition: true,
      borderRemoval: true,
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
      colorGradients: true,
      clearfix: true,
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
      display: {
        db: 'block',
        di: 'inline',
        dib: 'inline-block',
        df: 'flex',
        dfb: 'flex-block',
        dt: 'table',
        dtc: 'table-cell',
        none: 'none'
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
      lists: true,
      normalize: true,
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
      positions: ['relative', 'absolute', 'fixed'],
      sizes: ['auto', 0, 5, 10, 15, 20, 25, 30, 33.3, 40, 50, 60, 66.6, 70, 75, 80, 90, 100],
      spacing: {
        none: 0,
        xxs: '0.25rem',
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        xxl: '14rem'
      },
      textAlignment: ['left', 'right', 'center', 'justify'],
      textDecoration: {
        none: 'none',
        line: 'line-through',
        underline: 'underline'
      },
      textStyle: true,
      textTransforms: ['uppercase', 'lowercase', 'capitalize'],
      verticalAlignment: {
        base: 'baseline',
        bot: 'bottom',
        top: 'top',
        'text-top': 'text-top',
        'text-bot': 'text-bottom'
      },
      visibility: true,
      whitespace: ['pre', 'nowrap', 'normal'],
      zIndex: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

      // Set default colors
    };this.defaults.baseColors = {
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
    this.defaults.baseColors.primary = this.defaults.baseColors.cyan;
    this.defaults.baseColors.secondary = this.defaults.baseColors.gray;
    this.defaults.baseColors.info = this.defaults.baseColors.blue;
    this.defaults.baseColors.success = this.defaults.baseColors.green;
    this.defaults.baseColors.warning = this.defaults.baseColors.orange;
    this.defaults.baseColors.danger = this.defaults.baseColors.red;

    this.options = Object.assign({}, this.defaults, options);
    this.options.colors = this.createColors(options.baseColors);

    this.rules = this.rawRules.map(function (_ref) {
      var name = _ref.name,
          _ref$rules = _ref.rules,
          rules = _ref$rules === undefined ? [] : _ref$rules,
          responsive = _ref.responsive;
      return new RuleSet({
        name: name,
        rules: rules ? rules.map(function (r) {
          return new Rule(r);
        }) : [],
        breakpoints: responsive && _this.options.breakpoints
      });
    });
  }

  createClass(Euphoria, [{
    key: 'createColors',
    value: function createColors() {
      var colors = {};

      // Generate color gradients version for all colors.
      this.options.colorGradients && _.map(this.options.baseColors, function (val, key) {
        colors[key + '-lightest'] = lightness(val, 50);
        colors[key + '-lighter'] = lightness(val, 45);
        colors[key + '-light'] = lightness(val, 30);
        colors[key] = val;
        colors[key + '-dark'] = lightness(val, -10);
        colors[key + '-darker'] = lightness(val, -16);
        colors[key + '-darkest'] = lightness(val, -24);
      });

      // Some base colors that never change, thus they don't need
      // to be configurable
      colors.transparent = 'transparent';
      colors.black = 'black';
      colors.white = 'white';

      return colors;
    }
  }, {
    key: 'addRule',


    /**
     * Create a new rule to add to the list of defined rules.
     * Take the name of the new selector, any custom CSS to
     * apply to it and then a list of any of the existing
     * Euphoria selectors to merge into the rule. Think
     * of this like a mixin in LESS/SASS.
     *
     * @param {String} selector The name of the selector, eg ".my-selector".
     * @param {Object} custom Custom styles to apply to the rule.
     * @param {Array} custom An (optional) list of Euphoria selectors to combine into this new rule.
     */
    value: function addRule(_ref2) {
      var selector = _ref2.selector,
          _ref2$properties = _ref2.properties,
          properties = _ref2$properties === undefined ? {} : _ref2$properties,
          _ref2$inherits = _ref2.inherits,
          inherits$$1 = _ref2$inherits === undefined ? [] : _ref2$inherits,
          _ref2$responsive = _ref2.responsive,
          responsive = _ref2$responsive === undefined ? false : _ref2$responsive,
          _ref2$important = _ref2.important;

      if (inherits$$1.length) {
        this.rules.map(function (set$$1) {
          if (set$$1.rules && set$$1.rules.length) {
            set$$1.rules.map(function (rule) {
              if (inherits$$1.includes(rule.selector)) {
                Object.assign(properties, rule.properties);
              }
            });
          }
        });
      }

      this.rules.push(new Rule({
        selector: selector,
        properties: properties,
        responsive: responsive // TODO: get this to work!
      }));
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.css;
    }

    //----------------------------------------------------------------
    // Private methods
    //----------------------------------------------------------------

  }, {
    key: '_createSizeRules',
    value: function _createSizeRules(prefix, rule) {
      return _.map(this.options.sizes, function (s) {
        var label = s === 'auto' ? 'auto' : parseInt(s);
        var size = s === 'auto' ? 'auto' : s + '%';
        return {
          selector: '.' + prefix + '-' + label,
          properties: defineProperty({}, rule, size)
        };
      });
    }
  }, {
    key: '_createFloatRules',
    value: function _createFloatRules() {
      return _.map(this.options.floats, function (float) {
        return {
          selector: '.f' + float[0],
          // short: `f${float[0]}`,
          // verbose: `float-${float}`,
          properties: { float: float }
        };
      });
    }
  }, {
    key: '_createSpacingRules',
    value: function _createSpacingRules(type) {
      var spacing = this.options.spacing;

      if (!spacing) return [];

      var rules = [];
      var directions = ['', 'left', 'top', 'right', 'bottom', 'x', 'y'];

      // Add an extra margin auto rule.
      if (type === 'margin') spacing['auto'] = 'auto';

      directions.map(function (dir) {
        _.map(spacing, function (size, name) {
          // Create selector
          var short = '' + type[0] + (dir[0] || '') + '-' + name;
          var properties = {};
          switch (dir) {
            case '':
              properties[type] = size;
              break;
            case 'x':
              properties[type + '-left'] = size;
              properties[type + '-right'] = size;
              break;
            case 'y':
              properties[type + '-top'] = size;
              properties[type + '-bottom'] = size;
              break;
            default:
              properties[type + ('-' + dir)] = size;
              break;
          }

          rules.push({
            selector: '.' + short,
            // short,
            // verbose,
            properties: properties
          });
        });
      });

      return rules;
    }
  }, {
    key: 'rawRules',
    get: function get$$1() {
      return [
      // ---------------------------------------------------------
      // Display
      // ---------------------------------------------------------

      {
        name: 'Display',
        rules: _.map(this.options.display, function (val, key) {
          return {
            selector: '.' + key,
            properties: { display: val }
          };
        })
      }, {
        name: 'Overflow',
        rules: _.map(this.options.overflow, function (val) {
          return {
            selector: '.of-' + val,
            properties: { overflow: val }
          };
        })
      }, {
        name: 'Opacity',
        rules: _.map(this.options.opacity, function (val, name) {
          return {
            selector: '.o-' + name,
            properties: { opacity: val }
          };
        })
      }, {
        name: 'Opacity (hover)',
        rules: _.map(this.options.opacity, function (val, key) {
          return {
            selector: '.hov-o-' + key + ':hover',
            properties: { opacity: val }
          };
        })
      }, {
        name: 'Z-Index',
        rules: _.map(this.options.zIndex, function (val) {
          return {
            selector: '.z-' + val,
            properties: { 'z-index': val }
          };
        })
      },

      // ---------------------------------------------------------
      // Positioning and display
      // ---------------------------------------------------------

      {
        name: 'Floats',
        rules: this._createFloatRules()
      }, {
        name: 'Floats (responsive)',
        rules: this._createFloatRules(),
        responsive: true
      }, {
        name: 'Positioning',
        rules: _.map(this.options.positions, function (val) {
          return {
            selector: '.' + val,
            properties: { position: val }
          };
        })
      }, {
        name: 'Positioning (responsive)',
        rules: _.map(this.options.positions, function (val) {
          return {
            selector: '.' + val,
            properties: { position: val }
          };
        }),
        responsive: true
      }, {
        name: 'Text alignment',
        rules: _.map(this.options.textAlignment, function (val) {
          return {
            selector: '.' + val,
            properties: { 'text-align': val }
          };
        })
      }, {
        name: 'Vertical alignment',
        rules: _.map(this.options.verticalAlignment, function (val, key) {
          return {
            selector: '.v-' + key,
            properties: { 'vertical-align': val }
          };
        })
      }, {
        name: 'Visibility',
        rules: this.options.visibility && [{
          selector: '.visible',
          properties: { visibility: 'visible' }
        }, {
          selector: '.invisible',
          properties: {
            visibility: 'hidden'
          }
        }]
      }, {
        name: 'Clearfix',
        rules: this.options.clearfix && [{
          selector: '.cf:after',
          properties: { clear: 'both', display: 'table', content: '""' }
        }]
      },

      // ---------------------------------------------------------
      // Sizes
      // ---------------------------------------------------------

      {
        name: 'Widths',
        rules: this._createSizeRules('w', 'width')
      }, {
        name: 'Widths (responsive)',
        rules: this._createSizeRules('w', 'width'),
        responsive: true
      }, {
        name: 'Widths (max)',
        rules: this._createSizeRules('mw', 'max-width')
      }, {
        name: 'Heights',
        rules: this._createSizeRules('h', 'height')
      },
      // {
      //   name: 'Heights (max)',
      //   rules: this._createSizeRules('mh', 'max-height'),
      // },
      {
        name: 'Offsets',
        rules: this._createSizeRules('offset', 'margin-left')
      }, {
        name: 'Offsets (responsive)',
        rules: this._createSizeRules('offset', 'margin-left'),
        responsive: true
      },

      // ---------------------------------------------------------
      // Colors
      // ---------------------------------------------------------

      {
        name: 'Text colors',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.' + key,
            properties: { color: val }
          };
        })
      }, {
        name: 'Text colors (hover)',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.hov-' + key + ':hover',
            properties: { color: val }
          };
        })
      }, {
        name: 'Background colors',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.bg-' + key,
            properties: { background: val }
          };
        })
      }, {
        name: 'Background colors (hover)',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.hov-bg-' + key + ':hover',
            properties: { background: val }
          };
        })
      },

      // ---------------------------------------------------------
      // Box styles
      // ---------------------------------------------------------

      {
        name: 'Box shadows',
        rules: _.map(this.options.boxShadows, function (val, key) {
          return {
            selector: '.bs-' + key,
            properties: { 'box-shadow': val }
          };
        })
      },

      // ---------------------------------------------------------
      // Typography
      // ---------------------------------------------------------

      {
        name: 'Font sizes',
        rules: _.map(this.options.fontSizes, function (val, key) {
          return {
            selector: '.txt-' + key,
            properties: {
              'font-size': val
            }
          };
        })
      }, {
        name: 'Text transforms',
        rules: _.map(this.options.textTransforms, function (val) {
          return {
            selector: '.' + val,
            properties: { 'text-transform': val }
          };
        })
      }, {
        name: 'Text styles',
        rules: this.options.textStyle && [{
          selector: '.italic',
          properties: { 'font-style': 'italic' }
        }]
      }, {
        name: 'Font weights',
        rules: _.map(this.options.fontWeights, function (val, key) {
          return {
            selector: key === '.bold' ? 'bold' : '.fw-' + key,
            properties: { 'font-weight': val }
          };
        })
      }, {
        name: 'Text decoration',
        rules: _.map(this.options.textDecoration, function (val, key) {
          return {
            selector: '.td-' + key,
            properties: { 'text-decoration': val }
          };
        })
      }, {
        name: 'Letter spacing',
        rules: _.map(this.options.letterSpacing, function (val, key) {
          return {
            selector: '.ls-' + key,
            properties: {
              'letter-spacing': val
            }
          };
        })
      }, {
        name: 'Line height',
        rules: _.map(this.options.lineHeights, function (val, key) {
          return {
            selector: '.lh-' + key,
            properties: { 'line-height': val }
          };
        })
      }, {
        name: 'Normalize font',
        rules: this.options.normalize && [{
          selector: '.normal',
          properties: {
            'font-style': 'normal',
            'font-weight': 'normal',
            'text-decoration': 'none',
            'text-transform': 'none'
          }
        }]
      }, {
        name: 'Font families',
        rules: _.map(this.options.fontFamilies, function (val, key) {
          return {
            selector: '.' + key,
            properties: { 'font-family': val }
          };
        })
      }, {
        name: 'Whitespace',
        rules: _.map(this.options.whitespace, function (val) {
          return {
            selector: '.ws-' + val,
            properties: { 'white-space': val }
          };
        })
      },

      // ---------------------------------------------------------
      // Borders
      // ---------------------------------------------------------

      {
        name: 'Border positions',
        rules: this.options.borderPosition && [{
          selector: '.ba',
          properties: { border: '1px solid' }
        }, {
          selector: '.bl',
          properties: { 'border-left': '1px solid' }
        }, {
          selector: '.bt',
          properties: { 'border-top': '1px solid' }
        }, {
          selector: '.br',
          properties: { 'border-right': '1px solid' }
        }, {
          selector: '.bb',
          properties: { 'border-bottom': '1px solid' }
        }, {
          selector: '.bx',
          properties: {
            'border-left': '1px solid',
            'border-right': '1px solid'
          }
        }, {
          selector: '.by',
          properties: {
            'border-top': '1px solid',
            'border-bottom': '1px solid'
          }
        }]
      }, {
        name: 'Border removal',
        rules: this.options.borderRemoval && [{
          selector: '.b-none',
          properties: { border: 'none' }
        }, {
          selector: '.bl-none',
          properties: { 'border-left': 'none' }
        }, {
          selector: '.br-none',
          properties: { 'border-right': 'none' }
        }, {
          selector: '.bb-none',
          properties: { 'border-bottom': 'none' }
        }, {
          selector: '.bt-none',
          properties: { 'border-top': 'none' }
        }, {
          selector: '.bx-none',
          properties: {
            'border-left': 'none',
            'border-right': 'none'
          }
        }, {
          selector: '.by-none',
          properties: {
            'border-top': 'none',
            'border-bottom': 'none'
          }
        }]
      }, {
        name: 'Border styles',
        rules: _.map(this.options.borderStyles, function (val) {
          return {
            selector: '.b-' + val,
            properties: { 'border-style': val }
          };
        })
      }, {
        name: 'Border widths',
        rules: _.map(this.options.borderWidths, function (val, key) {
          return {
            selector: '.bw-' + key,
            properties: { 'border-width': val }
          };
        })
      }, {
        name: 'Border radius',
        rules: _.map(this.options.borderRadii, function (val, key) {
          return {
            selector: '.rad-' + key,
            properties: {
              'border-radius': val
            }
          };
        })
      }, {
        name: 'Border radii position',
        rules: this.options.borderRadiiPosition && [{
          selector: '.br-left',
          properties: {
            'border-top-right-radius': 0,
            'border-bottom-right-radius': 0
          }
        }, {
          selector: '.br-top',
          properties: {
            'border-bottom-right-radius': 0,
            'border-bottom-left-radius': 0
          }
        }, {
          selector: '.br-right',
          properties: {
            'border-top-left-radius': 0,
            'border-bottom-left-radius': 0
          }
        }, {
          selector: '.br-bottom',
          properties: {
            'border-top-right-radius': 0,
            'border-top-left-radius': 0
          }
        }]
      }, {
        name: 'Border collapse',
        rules: this.options.borderCollapse && [{
          selector: '.collapse',
          properties: {
            'border-collapse': 'collapse'
          }
        }]
      }, {
        name: 'Border colors',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.bc-' + key,
            properties: { 'border-color': val }
          };
        })
      }, {
        name: 'Border colors (hover)',
        rules: _.map(this.options.colors, function (val, key) {
          return {
            selector: '.hov-bc-' + key + ':hover',
            properties: { 'border-color': val }
          };
        })
      },

      // ---------------------------------------------------------
      // Flexbox
      // ---------------------------------------------------------

      {
        name: 'Flexbox',
        rules: [].concat(_.map(this.options.flexDirection, function (val, key) {
          return {
            selector: '.fd-' + key,
            properties: { 'flex-direction': val }
          };
        }), _.map(this.options.justifyContent, function (val, key) {
          return {
            selector: '.jc-' + key,
            properties: { 'justify-content': val }
          };
        }), _.map(this.options.alignItems, function (val, key) {
          return {
            selector: '.ai-' + key,
            properties: { 'align-items': val }
          };
        }), _.map(this.options.alignSelf, function (val, key) {
          return {
            selector: '.as-' + key,
            properties: { 'align-self': val }
          };
        }), _.map(this.options.alignContent, function (val, key) {
          return {
            selector: '.ac-' + key,
            properties: { 'align-content': val }
          };
        }), _.map(this.options.flexWrap, function (val, key) {
          return {
            selector: '.fw-' + key,
            properties: { 'flex-wrap': val }
          };
        }), _.map(this.options.flexOrder, function (val, key) {
          return {
            selector: '.fo-' + key,
            properties: { 'flex-order': val }
          };
        }))
      },

      // ---------------------------------------------------------
      // Spacing
      // ---------------------------------------------------------

      {
        name: 'Margins',
        rules: this._createSpacingRules('margin')
      }, {
        name: 'Margins (responsive)',
        rules: this._createSpacingRules('margin'),
        responsive: true
      }, {
        name: 'Padding',
        rules: this._createSpacingRules('padding')
      }, {
        name: 'Padding (responsive)',
        rules: this._createSpacingRules('padding'),
        responsive: true
      },

      // ---------------------------------------------------------
      // Lists
      // ---------------------------------------------------------

      {
        name: 'Lists',
        rules: this.options.lists && [{
          selector: '.unstyled',
          properties: {
            'list-style': 'none',
            '& li': {}
          }
        }]
      },

      // ---------------------------------------------------------
      // Other styles
      // ---------------------------------------------------------

      {
        name: 'Background sizes',
        rules: _.map(this.options.backgroundSizes, function (val) {
          return {
            selector: '.' + val,
            properties: { 'background-size': val }
          };
        })
      }, {
        name: 'Cursor',
        rules: _.map(this.options.cursors, function (val) {
          return {
            selector: '.c-' + val,
            properties: { cursor: val }
          };
        })
      }];
    }
  }, {
    key: 'css',
    get: function get$$1() {
      var separator = '\n';
      return ['* { box-sizing: border-box }'].concat(this.rules).map(function (rule) {
        return rule;
      }).join(separator);
    }
  }]);
  return Euphoria;
}();

export default Euphoria;
