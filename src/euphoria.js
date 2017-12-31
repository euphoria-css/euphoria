const _ = require('lodash')
const Rule = require('./rule')
const RuleSet = require('./rule-set')
const shader = require('shader')
const { CssSelectorParser } = require('css-selector-parser')

const parser = new CssSelectorParser()

// Grayscale
const BLACK = 'black'
const WHITE = 'white'
const GRAY = '#888'

// General colors
const PURPLE = '#9006db'
const PINK = '#e01890'
const RED = '#db2e18'
const ORANGE = '#ea780e'
const YELLOW = '#ffff00'
const GREEN = '#61cc0a'
const CYAN = '#0fbc9c'
const BLUE = '#1990e5'

// Context specific colors
const PRIMARY = CYAN
const SECONDARY = GRAY
const INFO = BLUE
const SUCCESS = GREEN
const WARNING = ORANGE
const DANGER = RED

const COLORS = Object.assign(
  {
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
  },
  createColorVariation('purple', PURPLE),
  createColorVariation('pink', PINK),
  createColorVariation('red', RED),
  createColorVariation('orange', ORANGE),
  createColorVariation('yellow', YELLOW),
  createColorVariation('green', GREEN),
  createColorVariation('cyan', CYAN),
  createColorVariation('blue', BLUE),
  {
    white: WHITE,
    'gray-lightest': '#f9f9f9',
    'gray-lighter': '#eaeaea',
    'gray-light': '#ccc',
    gray: '#aaa',
    'gray-dark': '#999',
    'gray-darker': '#555',
    'gray-darkest': '#333',
    black: BLACK,
    transparent: 'transparent',
  }
)

function createColorVariation(name, color) {
  return {
    [`${name}-lightest`]: shader(color, 0.9),
    [`${name}-lighter`]: shader(color, 0.7),
    [`${name}-light`]: shader(color, 0.45),
    [name]: color,
    [`${name}-dark`]: shader(color, -0.35),
    [`${name}-darker`]: shader(color, -0.5),
    [`${name}-darkest`]: shader(color, -0.65),
  }
}

class Euphoria {
  constructor(options) {
    this.defaults = {
      alignContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        stretch: 'stretch',
        around: 'space-around',
        between: 'space-between',
      },
      alignItems: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      },
      alignSelf: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      },
      backgroundSizes: ['contain', 'cover'],
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
        '100': '100%',
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
        xxl: '2.4rem',
      },
      boxShadows: {
        '1': '0 0 4px 2px rgba(0, 0, 0, .2)',
        '2': '0 0 8px 2px rgba(0, 0, 0, .2)',
        '3': '2px 2px 4px 2px rgba(0, 0, 0, .2)',
        '4': '2px 2px 8px 0 rgba(0, 0, 0, .2)',
        '5': '4px 4px 4px 2px rgba(0, 0, 0, .2)',
      },
      breakpoints: {
        'xs-only': 'max-width: 599px',
        'sm-up': 'min-width: 600px',
        'md-up': 'min-width: 900px',
        'lg-up': 'min-width: 1200px',
        // 'xl-up': 'min-width: 1800px',
      },
      // TODO: easier way to change the base colors without having to reset them all
      colors: COLORS,
      clearfix: true,
      cursors: [
        // General
        'auto',
        'default',
        'none',

        // Links & status
        'context-menu',
        'help',
        'pointer',
        'progress',
        'wait',

        // Selection
        'cell',
        'crosshair',
        'text',
        'vertical-text',

        // Drag & drop
        'alias',
        'copy',
        'move',
        'no-drop',
        'not-allowed',

        // Resize
        'all-scroll',
        'col-resize',
        'row-resize',
        'n-resize',
        'e-resize',
        's-resize',
        'w-resize',
        'ne-resize',
        'nw-resize',
        'se-resize',
        'sw-resize',
        'ew-resize',
        'ns-resize',
        'nesw-resize',
        'nwse-resize',

        // Zoom
        'zoom-in',
        'zoom-out',

        // Drag/drop
        'grab',
        'grabbing',
      ],
      display: {
        db: 'block',
        di: 'inline',
        dib: 'inline-block',
        df: 'flex',
        dfb: 'flex-block',
        dt: 'table',
        dtc: 'table-cell',
        none: 'none',
      },
      flexDirection: {
        row: 'row',
        'row-reverse': 'row-reverse',
        col: 'column',
        'col-reverse': 'column-reverse',
        start: 'flex-start',
        end: 'flex-end',
      },
      flexOrder: {
        first: '-1',
        last: '1',
      },
      flexWrap: {
        wrap: 'wrap',
        reverse: 'reverse',
        none: 'nowrap',
      },
      floats: ['left', 'right', 'none'],
      fontFamilies: {
        system:
          '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue" ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
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
        times: 'times, serif',
      },
      fontSizes: {
        xxxl: '4em',
        xxl: '2.6em',
        xl: '1.9em',
        lg: '1.3em',
        md: '1em',
        sm: '0.85em',
        xs: '0.7em',
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
        '9': '900',
      },
      justifyContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
      },
      letterSpacing: {
        xxs: '-0.2em',
        xs: '-0.1em',
        sm: '-0.05em',
        md: 0,
        lg: '0.3em',
        xl: '0.6em',
        xxl: '1.2em',
      },
      lineHeights: {
        xxs: 0.5,
        xs: 0.75,
        sm: 1,
        md: 1.5,
        lg: 2,
        xl: 3,
        xxl: 4,
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
        '0': 0,
      },
      overflow: ['visible', 'hidden', 'scroll', 'auto'],
      positions: ['relative', 'absolute', 'fixed'],
      sizes: [
        'auto',
        5,
        10,
        15,
        20,
        25,
        30,
        33.3,
        40,
        50,
        60,
        66.6,
        70,
        75,
        80,
        90,
        100,
      ],
      spacing: {
        none: 0,
        xxs: '0.25rem',
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        xxl: '14rem',
      },
      textAlignment: ['left', 'right', 'center', 'justify'],
      textDecoration: {
        none: 'none',
        line: 'line-through',
        underline: 'underline',
      },
      textStyle: true,
      textTransforms: ['uppercase', 'lowercase', 'capitalize'],
      verticalAlignment: {
        base: 'baseline',
        bot: 'bottom',
        top: 'top',
        'text-top': 'text-top',
        'text-bot': 'text-bottom',
      },
      visibility: true,
      whitespace: ['pre', 'nowrap', 'normal'],
      zIndex: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    }

    // TODO: shall or deep merge?
    this.options = Object.assign({}, this.defaults, options)

    this.rules = this.rawRules.map(
      ({ name, rules = [], responsive }) =>
        new RuleSet({
          name: name,
          rules: rules && rules.map(props => new Rule(props)),
          breakpoints: responsive && this.options.breakpoints,
        })
    )
  }

  get rawRules() {
    return [
      // ---------------------------------------------------------
      // Display
      // ---------------------------------------------------------

      {
        name: 'Display',
        rules: _.map(this.options.display, (val, key) => ({
          selector: `.${key}`,
          properties: { display: val },
        })),
      },
      {
        name: 'Overflow',
        rules: _.map(this.options.overflow, overflow => ({
          selector: `.of-${overflow}`,
          properties: { overflow },
        })),
      },
      {
        name: 'Opacity',
        rules: _.map(this.options.opacity, (value, name) => ({
          selector: `.o-${name}`,
          properties: { opacity: value },
        })),
      },
      {
        name: 'Opacity (hover)',
        rules: _.map(this.options.opacity, (val, key) => ({
          selector: `.hov-o-${key}:hover`,
          properties: { opacity: val },
        })),
      },
      {
        name: 'Z-Index',
        rules: _.map(this.options.zIndex, val => ({
          selector: `.z-${val}`,
          properties: { 'z-index': val },
        })),
      },

      // ---------------------------------------------------------
      // Positioning and display
      // ---------------------------------------------------------

      {
        name: 'Floats',
        rules: this._createFloatRules(),
      },
      {
        name: 'Floats (responsive)',
        rules: this._createFloatRules(),
        responsive: true,
      },
      {
        name: 'Positioning',
        rules: _.map(this.options.positions, p => ({
          selector: `.${p}`,
          properties: { position: p },
        })),
      },
      {
        name: 'Positioning (responsive)',
        rules: _.map(this.options.positions, p => ({
          selector: `.${p}`,
          properties: { position: p },
        })),
        responsive: true,
      },
      {
        name: 'Text alignment',
        rules: _.map(this.options.textAlignment, d => ({
          selector: `.${d}`,
          properties: { 'text-align': d },
        })),
      },
      {
        name: 'Vertical alignment',
        rules: _.map(this.options.verticalAlignment, (val, key) => ({
          selector: `.v-${key}`,
          properties: { 'vertical-align': val },
        })),
      },
      {
        name: 'Visibility',
        rules: this.options.visibility && [
          {
            selector: '.visible',
            properties: { visibility: 'visible' },
          },
          {
            selector: '.invisible',
            properties: {
              visibility: 'hidden',
            },
          },
        ],
      },
      {
        name: 'Clearfix',
        rules: this.options.clearfix && [
          {
            selector: '.cf:after',
            properties: { clear: 'both', display: 'table', content: '""' },
          },
        ],
      },

      // ---------------------------------------------------------
      // Sizes
      // ---------------------------------------------------------

      {
        name: 'Widths',
        rules: this._createSizeRules('w', 'width'),
      },
      {
        name: 'Widths (responsive)',
        rules: this._createSizeRules('w', 'width'),
        responsive: true,
      },
      {
        name: 'Widths (max)',
        rules: this._createSizeRules('mw', 'max-width'),
      },
      {
        name: 'Heights',
        rules: this._createSizeRules('h', 'height'),
      },
      // {
      //   name: 'Heights (max)',
      //   rules: this._createSizeRules('mh', 'max-height'),
      // },
      {
        name: 'Offsets',
        rules: this._createSizeRules('offset', 'margin-left'),
      },
      {
        name: 'Offsets (responsive)',
        rules: this._createSizeRules('offset', 'margin-left'),
        responsive: true,
      },

      // ---------------------------------------------------------
      // Colors
      // ---------------------------------------------------------

      {
        name: 'Text colors',
        rules: _.map(this.options.colors, (color, name) => ({
          selector: `.${name}`,
          properties: { color },
        })),
      },
      {
        name: 'Text colors (hover)',
        rules: _.map(this.options.colors, (color, name) => ({
          selector: `.hov-${name}:hover`,
          properties: { color },
        })),
      },
      {
        name: 'Background colors',
        rules: _.map(this.options.colors, (color, name) => ({
          selector: `.bg-${name}`,
          properties: { background: color },
        })),
      },
      {
        name: 'Background colors (hover)',
        rules: _.map(this.options.colors, (color, name) => ({
          selector: `.hov-bg-${name}:hover`,
          properties: { background: color },
        })),
      },

      // ---------------------------------------------------------
      // Box styles
      // ---------------------------------------------------------

      {
        name: 'Box shadows',
        rules: _.map(this.options.boxShadows, (shadow, name) => ({
          selector: `.bs-${name}`,
          properties: { 'box-shadow': shadow },
        })),
      },

      // ---------------------------------------------------------
      // Typography
      // ---------------------------------------------------------

      {
        name: 'Font sizes',
        rules: _.map(this.options.fontSizes, (val, key) => ({
          selector: `.txt-${key}`,
          properties: {
            'font-size': val,
          },
        })),
      },
      {
        name: 'Text transforms',
        rules: _.map(this.options.textTransforms, trans => ({
          selector: `.${trans}`,
          properties: { 'text-transform': trans },
        })),
      },
      {
        name: 'Text styles',
        rules: this.options.textStyle && [
          {
            selector: '.italic',
            properties: { 'font-style': 'italic' },
          },
        ],
      },
      {
        name: 'Font weights',
        rules: _.map(this.options.fontWeights, (val, key) => ({
          selector: key === '.bold' ? 'bold' : `.fw-${key}`,
          properties: { 'font-weight': val },
        })),
      },
      {
        name: 'Text decoration',
        rules: _.map(this.options.textDecoration, (val, key) => ({
          selector: `.td-${key}`,
          properties: { 'text-decoration': val },
        })),
      },
      {
        name: 'Letter spacing',
        rules: _.map(this.options.letterSpacing, (val, key) => ({
          selector: `.ls-${key}`,
          properties: {
            'letter-spacing': val,
          },
        })),
      },
      {
        name: 'Line height',
        rules: _.map(this.options.lineHeights, (val, key) => ({
          selector: `.lh-${key}`,
          properties: { 'line-height': val },
        })),
      },
      {
        name: 'Normalize font',
        rules: this.options.normalize && [
          {
            selector: '.normal',
            properties: {
              'font-style': 'normal',
              'font-weight': 'normal',
              'text-decoration': 'none',
              'text-transform': 'none',
            },
          },
        ],
      },
      {
        name: 'Font families',
        rules: _.map(this.options.fontFamilies, (val, key) => {
          return {
            selector: `.${key}`,
            properties: { 'font-family': val },
          }
        }),
      },
      {
        name: 'Whitespace',
        rules: _.map(this.options.whitespace, ws => ({
          selector: `.ws-${ws}`,
          properties: { 'white-space': ws },
        })),
      },

      // ---------------------------------------------------------
      // Borders
      // ---------------------------------------------------------

      {
        name: 'Border positions',
        rules: this.options.borderPosition && [
          {
            selector: '.ba',
            properties: { border: '1px solid' },
          },
          {
            selector: '.bl',
            properties: { 'border-left': '1px solid' },
          },
          {
            selector: '.bt',
            properties: { 'border-top': '1px solid' },
          },
          {
            selector: '.br',
            properties: { 'border-right': '1px solid' },
          },
          {
            selector: '.bb',
            properties: { 'border-bottom': '1px solid' },
          },
          {
            selector: '.bx',
            properties: {
              'border-left': '1px solid',
              'border-right': '1px solid',
            },
          },
          {
            selector: '.by',
            properties: {
              'border-top': '1px solid',
              'border-bottom': '1px solid',
            },
          },
        ],
      },
      {
        name: 'Border removal',
        rules: this.options.borderRemoval && [
          {
            selector: '.b-none',
            properties: { border: 'none' },
          },
          {
            selector: '.bl-none',
            properties: { 'border-left': 'none' },
          },
          {
            selector: '.br-none',
            properties: { 'border-right': 'none' },
          },
          {
            selector: '.bb-none',
            properties: { 'border-bottom': 'none' },
          },
          {
            selector: '.bt-none',
            properties: { 'border-top': 'none' },
          },
          {
            selector: '.bx-none',
            properties: {
              'border-left': 'none',
              'border-right': 'none',
            },
          },
          {
            selector: '.by-none',
            properties: {
              'border-top': 'none',
              'border-bottom': 'none',
            },
          },
        ],
      },
      {
        name: 'Border styles',
        rules: _.map(this.options.borderStyles, val => ({
          selector: `.b-${val}`,
          properties: { 'border-style': val },
        })),
      },
      {
        name: 'Border widths',
        rules: _.map(this.options.borderWidths, (val, key) => ({
          selector: `.bw-${key}`,
          properties: { 'border-width': val },
        })),
      },
      {
        name: 'Border radius',
        rules: _.map(this.options.borderRadii, (val, key) => ({
          selector: `.rad-${key}`,
          properties: {
            'border-radius': val,
          },
        })),
      },
      {
        name: 'Border radii position',
        rules: this.options.borderRadiiPosition && [
          {
            selector: '.br-left',
            properties: {
              'border-top-right-radius': 0,
              'border-bottom-right-radius': 0,
            },
          },
          {
            selector: '.br-top',
            properties: {
              'border-bottom-right-radius': 0,
              'border-bottom-left-radius': 0,
            },
          },
          {
            selector: '.br-right',
            properties: {
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0,
            },
          },
          {
            selector: '.br-bottom',
            properties: {
              'border-top-right-radius': 0,
              'border-top-left-radius': 0,
            },
          },
        ],
      },
      {
        name: 'Border collapse',
        rules: this.options.borderCollapse && [
          {
            selector: '.collapse',
            properties: {
              'border-collapse': 'collapse',
            },
          },
        ],
      },
      {
        name: 'Border colors',
        rules: _.map(this.options.colors, (val, key) => ({
          selector: `.bc-${key}`,
          properties: { 'border-color': val },
        })),
      },
      {
        name: 'Border colors (hover)',
        rules: _.map(this.options.colors, (val, key) => ({
          selector: `.hov-bc-${key}:hover`,
          properties: { 'border-color': val },
        })),
      },

      // ---------------------------------------------------------
      // Flexbox
      // ---------------------------------------------------------

      {
        name: 'Flexbox',
        rules: [].concat(
          _.map(this.options.flexDirection, (val, key) => ({
            selector: `.fd-${key}`,
            properties: { 'flex-direction': val },
          })),
          _.map(this.options.justifyContent, (val, key) => ({
            selector: `.jc-${key}`,
            properties: { 'justify-content': val },
          })),
          _.map(this.options.alignItems, (val, key) => ({
            selector: `.ai-${key}`,
            properties: { 'align-items': val },
          })),
          _.map(this.options.alignSelf, (val, key) => ({
            selector: `.as-${key}`,
            properties: { 'align-self': val },
          })),
          _.map(this.options.alignContent, (val, key) => ({
            selector: `.ac-${key}`,
            properties: { 'align-content': val },
          })),
          _.map(this.options.flexWrap, (val, key) => ({
            selector: `.fw-${key}`,
            properties: { 'flex-wrap': val },
          })),
          _.map(this.options.flexOrder, (val, key) => ({
            selector: `.fo-${key}`,
            properties: { 'flex-order': val },
          }))
        ),
      },

      // ---------------------------------------------------------
      // Spacing
      // ---------------------------------------------------------

      {
        name: 'Margins',
        rules: this._createSpacingRules('margin'),
      },
      {
        name: 'Margins (responsive)',
        rules: this._createSpacingRules('margin'),
        responsive: true,
      },
      {
        name: 'Padding',
        rules: this._createSpacingRules('padding'),
      },
      {
        name: 'Padding (responsive)',
        rules: this._createSpacingRules('padding'),
        responsive: true,
      },

      // ---------------------------------------------------------
      // Lists
      // ---------------------------------------------------------

      {
        name: 'Lists',
        rules: this.options.lists && [
          {
            selector: '.unstyled',
            properties: {
              'list-style': 'none',
              '& li': {},
            },
          },
        ],
      },

      // ---------------------------------------------------------
      // Other styles
      // ---------------------------------------------------------

      {
        name: 'Background sizes',
        rules: _.map(this.options.backgroundSizes, size => ({
          selector: `.${size}`,
          properties: { 'background-size': size },
        })),
      },
      {
        name: 'Cursor',
        rules: _.map(this.options.cursors, cursor => ({
          selector: `.c-${cursor}`,
          properties: { cursor },
        })),
      },
    ]
  }

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
  addRule({
    selector,
    properties = {},
    inherits = [],
    responsive = false,
    important = false,
  }) {
    // TODO: remove as this is temporary:
    selector = selector || `.${short}${hover ? ':hover' : ''}`

    if (inherits.length) {
      this.rules.map(set => {
        if (set.rules && set.rules.length) {
          set.rules.map(rule => {
            if (inherits.includes(rule.selector)) {
              // if (
              //   inherits.indexOf(rule.classNameShort) != -1 ||
              //   inherits.indexOf(rule.classNameVerbose) != -1
              // ) {
              Object.assign(properties, rule.properties)
            }
          })
        }
      })
    }

    this.rules.push(
      new Rule({
        selector,
        properties,
        responsive, // TODO: get this to work!
      })
    )
  }

  css(separator = '\n') {
    return ['* { box-sizing: border-box }']
      .concat(this.rules)
      .map(rule => rule)
      .join(separator)
  }

  toString() {
    return this.css()
  }

  //----------------------------------------------------------------
  // Private methodsj
  //----------------------------------------------------------------

  _createSizeRules(prefix, rule) {
    return _.map(this.options.sizes, s => {
      const label = s === 'auto' ? 'auto' : parseInt(s)
      const size = s === 'auto' ? 'auto' : `${s}%`
      return {
        selector: `.${prefix}-${label}`,
        properties: { [rule]: size },
      }
    })
  }

  _createFloatRules() {
    return _.map(this.options.floats, float => ({
      selector: `.f${float[0]}`,
      // short: `f${float[0]}`,
      // verbose: `float-${float}`,
      properties: { float },
    }))
  }

  _createSpacingRules(type) {
    const spacing = this.options.spacing

    if (!spacing) return []

    const rules = []
    const directions = ['', 'left', 'top', 'right', 'bottom', 'x', 'y']

    // Add an extra margin auto rule.
    if (type === 'margin') spacing['auto'] = 'auto'

    directions.map(dir => {
      _.map(spacing, (size, name) => {
        // Create selector
        const short = `${type[0]}${dir[0] || ''}-${name}`
        const verbose = `${type}${dir ? `-${dir}` : ''}-${name}`

        // Create properties
        const properties = {}
        switch (dir) {
          case '':
            properties[type] = size
            break
          case 'x':
            properties[type + '-left'] = size
            properties[type + '-right'] = size
            break
          case 'y':
            properties[type + '-top'] = size
            properties[type + '-bottom'] = size
            break
          default:
            properties[type + `-${dir}`] = size
            break
        }

        rules.push({
          selector: `.${short}`,
          // short,
          // verbose,
          properties,
        })
      })
    })

    return rules
  }
}

module.exports = Euphoria
