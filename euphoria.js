const _ = require('lodash')
const Rule = require('./rule')
const RuleSet = require('./rule-set')
const shader = require('shader')

// Grayscale
const BLACK = 'black'
const WHITE = 'white'
const GRAY = '#888'

// General colors
const PURPLE = '#9006db'
const PINK = '#db1880'
const RED = '#db2e18'
const ORANGE = '#ea780e'
const YELLOW = '#ffff00'
const GREEN = '#4eb223'
const CYAN = '#0fbc9c'
const BLUE = '#378ad3'

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
    'gray-lightest': '#f1f1f1',
    'gray-lighter': '#e1e1e1',
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
    [`${name}-dark`]: shader(color, -0.4),
    [`${name}-darker`]: shader(color, -0.55),
    [`${name}-darkest`]: shader(color, -0.7),
  }
}

class Euphoria {
  constructor(options) {
    this.defaults = {
      // TODO: more color variations
      colors: COLORS,
      sizes: [
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
      fontSizes: {
        xxxl: '4rem',
        xxl: '2.6rem',
        xl: '1.9rem',
        lg: '1.3rem',
        md: '1rem',
        sm: '0.85rem',
        xs: '0.7rem',
      },
      spacing: {
        none: '0',
        auto: 'auto',
        xxs: '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.75rem',
        xl: '3.25rem',
        xxl: '5rem',
      },
      fontFamilies: {
        '.system, .font-family-system':
          '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue" ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
        '.sans-serif, .font-family-sans-serif': 'helvetica, ariel, sans-serif',
        '.serif, .font-family-serif': 'georgia, times, serif',
        '.code, .font-family-code': 'Consolas, monaco, monospace',
        '.courier, .font-family-courier': '"Courier Next", courier, monospace',
        '.helvetica, .font-family-helvetica':
          '"helvetica neue", helvetica, sans-serif',
        '.avenir, .font-family-avenir': '"avenir next", avenir, sans-serif',
        '.athelas, .font-family-athelas': 'athelas, georgia, serif',
        '.georgia, .font-family-georgia': 'georgia, serif',
        '.times, .font-family-times': 'times, serif',
        '.bodoni, .font-family-bodoni': '"Bodoni MT", serif',
        '.calisto, .font-family-calisto': '"Calisto MT", serif',
        '.garamond, .font-family-garamond': 'garamond, serif',
        '.baskerville, .font-family-baskerville': 'baskerville, serif',
      },
    }

    // TODO: shall or deep merge?
    this.options = Object.assign({}, this.defaults, options)

    this.rules = [
      new RuleSet('Border box', [
        new Rule('*', { 'box-sizing': 'border-box' }),
      ]),
      new RuleSet('Display', [
        new Rule('.db', '.display-block', { display: 'block' }),
        new Rule('.di', '.display-inline', { display: 'inline' }),
        new Rule('.dib', '.display-inline-block', {
          display: 'inline-block',
        }),
        new Rule('.df', '.display-flex', { display: 'flex' }),
        new Rule('.dif', '.display-inline-flex', {
          display: 'inline-flex',
        }),
        new Rule('.dt', '.display-table', { display: 'table' }),
        new Rule('.dtc', '.display-table-cell', {
          display: 'table-cell',
        }),
        new Rule('.dn', '.display-none', { display: 'none' }),
      ]),
      new RuleSet('Floats', [
        new Rule('.fl', '.float-left', { float: 'left' }),
        new Rule('.fr', '.float-right', { float: 'right' }),
        new Rule('.fn', '.float-none', { float: 'none' }),
      ]),
      new RuleSet(
        'Positioning',
        ['relative', 'absolute', 'fixed'].map(
          p => new Rule(`.${p}`, `.position-${p}`, { position: p })
        )
      ),
      new RuleSet(
        'Text alignment',
        ['left', 'right', 'center', 'justify'].map(
          dir => new Rule(`.${dir}`, `.text-${dir}`, { 'text-align': dir })
        )
      ),
      new RuleSet(
        'Widths',
        this.options.sizes.map(
          s =>
            new Rule(`.w-${parseInt(s)}`, `.width-${parseInt(s)}`, {
              width: `${s}%`,
            })
        )
      ),
      new RuleSet(
        'Heights',
        this.options.sizes.map(
          s =>
            new Rule(`.h-${parseInt(s)}`, `.height-${parseInt(s)}`, {
              height: `${s}%`,
            })
        )
      ),
      new RuleSet(
        'Max widths',
        this.options.sizes.map(
          s =>
            new Rule(`.mw-${parseInt(s)}`, `.max-width-${parseInt(s)}`, {
              'max-width': `${s}%`,
            })
        )
      ),
      new RuleSet(
        'Max heights',
        this.options.sizes.map(
          s =>
            new Rule(`.mh-${parseInt(s)}`, `.max-height-${parseInt(s)}`, {
              'max-height': `${s}%`,
            })
        )
      ),
      new RuleSet(
        'Text colors',
        _.map(
          this.options.colors,
          (color, name) =>
            new Rule(`.txt-${name}`, `.text-color-${name}`, { color: color })
        )
      ),
      new RuleSet(
        'Background colors',
        _.map(
          this.options.colors,
          (color, name) =>
            new Rule(`.bg-${name}`, `.background-color-${name}`, {
              background: color,
            })
        )
      ),
      new RuleSet(
        'Text colors (hover)',
        _.map(
          this.options.colors,
          (color, name) =>
            new Rule(
              `.hover-txt-${name}:hover`,
              `.hover-text-color-${name}:hover`,
              { color: color }
            )
        )
      ),
      new RuleSet(
        'Background colors (hover)',
        _.map(
          this.options.colors,
          (color, name) =>
            new Rule(
              `.hover-bg-${name}:hover`,
              `.hover-background-color-${name}:hover`,
              { background: color }
            )
        )
      ),
      new RuleSet('Clearfix', [
        new Rule('.cf', '.clearfix', {
          clear: 'both',
        }),
        new Rule('.cf:after', '.clearfix:after', {
          clear: 'both',
          display: 'table',
          content: '""',
        }),
      ]),
      new RuleSet('Normalize font', [
        new Rule('.normal', '.normalize-font', {
          'font-style': 'normal',
          'font-weight': 'normal',
          'text-transform': 'none',
        }),
      ]),
      new RuleSet('Text transform', [
        new Rule('.uppercase', '.text-transform-uppercase', {
          'text-transform': 'uppercase',
        }),
        new Rule('.lowercase', '.text-transform-lowercase', {
          'text-transform': 'lowercase',
        }),
        new Rule('.capitalize', '.text-transform-capitalize', {
          'text-transform': 'capitalize',
        }),
      ]),
      new RuleSet('Font style and weight', [
        new Rule('.bold', '.font-weight-bold', { 'font-weight': 'bold' }),
        new Rule('.italic', '.font-style-italic', { 'font-style': 'italic' }),
      ]),
      new RuleSet('Text decoration', [
        new Rule('.line-through', `.text-decoration-line-through`, {
          'text-decoration': 'line-through',
        }),
        new Rule('.underline', `.text-decoration-underline`, {
          'text-decoration': 'underline',
        }),
        new Rule('.no-decoration', `.text-decoration-none`, {
          'text-decoration': 'none',
        }),
      ]),
      new RuleSet('Letter spacing', [
        new Rule('.ls-xs', '.letter-spacing-sm', {
          'letter-spacing': '-0.5em',
        }),
        new Rule('.ls-sm', '.letter-spacing-sm', {
          'letter-spacing': '-0.2em',
        }),
        new Rule('.ls-md', '.letter-spacing-md', { 'letter-spacing': '0' }),
        new Rule('.ls-lg', '.letter-spacing-lg', { 'letter-spacing': '0.2em' }),
        new Rule('.ls-xl', '.letter-spacing-xl', { 'letter-spacing': '0.5em' }),
        new Rule('.ls-xxl', '.letter-spacing-xxl', {
          'letter-spacing': '0.8em',
        }),
      ]),
      new RuleSet('Vertical alignment', [
        new Rule('.abl', '.align-baseline', { 'vertical-align': 'baseline' }),
        new Rule('.at', '.align-top', { 'vertical-align': 'top' }),
        new Rule('.am', '.align-middle', { 'vertical-align': 'middle' }),
        new Rule('.ab', '.align-bottom', { 'vertical-align': 'bottom' }),
        new Rule('.att', '.align-text-top', { 'vertical-align': 'text-top' }),
        new Rule('.atb', '.align-text-bottom', {
          'vertical-align': 'text-bottom',
        }),
      ]),
      new RuleSet('Borders positions', [
        new Rule('.ba', '.border', { border: '1px solid' }),
        new Rule('.bl', '.border-left', { 'border-left': '1px solid' }),
        new Rule('.bt', '.border-top', { 'border-top': '1px solid' }),
        new Rule('.br', '.border-right', { 'border-right': '1px solid' }),
        new Rule('.bb', '.border-bottom', { 'border-bottom': '1px solid' }),
        new Rule('.bx', '.border-x', {
          'border-left': '1px solid',
          'border-right': '1px solid',
        }),
        new Rule('.bx', '.border-y', {
          'border-top': '1px solid',
          'border-bottom': '1px solid',
        }),
      ]),

      new RuleSet('Border widths', [
        new Rule('.bw-xxs', '.border-width-xxs', {
          'border-width': '0.05em',
        }),
        new Rule('.bw-xs', '.border-width-xs', {
          'border-width': '0.15em',
        }),
        new Rule('.bw-sm', '.border-width-sm', { 'border-width': '0.3em' }),
        new Rule('.bw-md', '.border-width-md', { 'border-width': '0.6em' }),
        new Rule('.bw-lg', '.border-width-lg', { 'border-width': '1.2em' }),
        new Rule('.bw-xl', '.border-width-xl', {
          'border-width': '2.4em',
        }),
      ]),

      new RuleSet('Border styles', [
        new Rule('.b-solid', '.border-style-solid', {
          'border-style': 'solid',
        }),
        new Rule('.b-dotted', '.border-style-dotted', {
          'border-style': 'dotted',
        }),
        new Rule('.b-dashed', '.border-style-dashed', {
          'border-style': 'dashed',
        }),
      ]),

      new RuleSet('Border radius', [
        new Rule('.br-none', '.border-radius-none', {
          'border-radius': 'none',
        }),
        new Rule('.br-xs', '.border-radius-xs', {
          'border-radius': '0.15em',
        }),
        new Rule('.br-sm', '.border-radius-sm', {
          'border-radius': '0.3em',
        }),
        new Rule('.br-md', '.border-radius-md', {
          'border-radius': '0.6em',
        }),
        new Rule('.br-lg', '.border-radius-lg', {
          'border-radius': '1.2em',
        }),
        new Rule('.br-xl', '.border-radius-xl', {
          'border-radius': '2.4em',
        }),
        new Rule('.br-100', '.border-radius-100', { 'border-radius': '100%' }),
        new Rule('.br-pill', '.border-radius-pill', {
          'border-radius': '100em',
        }),
        new Rule('.br-left', '.border-radius-left', {
          'border-top-right-radius': '0',
          'border-bottom-right-radius': '0',
        }),
        new Rule('.br-top', '.border-radius-top', {
          'border-bottom-right-radius': '0',
          'border-bottom-left-radius': '0',
        }),
        new Rule('.br-right', '.border-radius-right', {
          'border-top-left-radius': '0',
          'border-bottom-left-radius': '0',
        }),
        new Rule('.br-bottom', '.border-radius-bottom', {
          'border-top-right-radius': '0',
          'border-top-left-radius': '0',
        }),
      ]),

      new RuleSet('Border removal', [
        new Rule('.bn', '.border-none', { border: 'none' }),
        new Rule('.bn-l', '.border-left', { 'border-left': 'none' }),
        new Rule('.bn-r', '.border-right', { 'border-right': 'none' }),
        new Rule('.bn-b', '.border-bottom', { 'border-bottom': 'none' }),
        new Rule('.bn-t', '.border-top', { 'border-top': 'none' }),
        new Rule('.bn-x', '.border-left', {
          'border-left': 'none',
          'border-right': 'none',
        }),
        new Rule('.bn-x', '.border-top', {
          'border-top': 'none',
          'border-bottom': 'none',
        }),
      ]),

      new RuleSet('Border collapse', [
        new Rule('.collapse', '.border-collapse', {
          'border-collapse': 'collapse',
        }),
      ]),
      new RuleSet(
        'Border colors',
        _.map(
          this.options.colors,
          (val, key) =>
            new Rule(`.bc-${key}`, `.border-color-${key}`, {
              'border-color': val,
            })
        )
      ),
      new RuleSet('Flexbox', [
        new Rule('.flex-row', { 'flex-direction': 'row' }),
        new Rule('.flex-row-reverse', { 'flex-direction': 'row-reverse' }),
        new Rule('.flex-column', { 'flex-direction': 'column' }),
        new Rule('.flex-column-reverse', {
          'flex-direction': 'column-reverse',
        }),
        new Rule('.justify-content-start', { 'justify-content': 'flex-start' }),
        new Rule('.justify-content-end', { 'justify-content': 'flex-end' }),
        new Rule('.justify-content-center', { 'justify-content': 'center' }),
        new Rule('.justify-content-between', {
          'justify-content': 'space-between',
        }),
        new Rule('.justify-content-around', {
          'justify-content': 'space-around',
        }),
        new Rule('.align-items-start', { 'align-items': 'flex-start' }),
        new Rule('.align-items-end', { 'align-items': 'flex-end' }),
        new Rule('.align-items-center', { 'align-items': 'center' }),
        new Rule('.align-items-baseline', { 'align-items': 'baseline' }),
        new Rule('.align-items-stretch', { 'align-items': 'stretch' }),
        new Rule('.align-self-start', { 'align-self': 'flex-start' }),
        new Rule('.align-self-end', { 'align-self': 'flex-end' }),
        new Rule('.align-self-center', { 'align-self': 'center' }),
        new Rule('.align-self-baseline', { 'align-self': 'baseline' }),
        new Rule('.align-self-stretch', { 'align-self': 'stretch' }),
        new Rule('.align-content-start', { 'align-content': 'flex-start' }),
        new Rule('.align-content-end', { 'align-content': 'flex-end' }),
        new Rule('.align-content-center', { 'align-content': 'center' }),
        new Rule('.align-content-stretch', { 'align-content': 'stretch' }),
        new Rule('.align-content-between', {
          'align-content': 'space-between',
        }),
        new Rule('.align-content-around', { 'align-content': 'space-around' }),
        new Rule('.flex-wrap', { 'flex-wrap': 'wrap' }),
        new Rule('.flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }),
        new Rule('.flex-nowrap', { 'flex-wrap': 'nowrap' }),
        new Rule('.flex-first', { order: '-1' }),
        new Rule('.flex-last', { order: '1' }),
      ]),
      // TODO: Allow customizing font families
      new RuleSet(
        'Font families',
        _.map(this.options.fontFamilies, (font, name) => {
          const namePair = name.split(', ').map(n => n.trim())
          return new Rule(namePair[0], namePair[1], { 'font-family': font })
        })
      ),
      new RuleSet(
        'Font size',
        _.map(
          this.options.fontSizes,
          (prop, name) =>
            new Rule(`.txt-${name}`, `.text-size-${name}`, {
              'font-size': prop,
            })
        )
      ),
      new RuleSet('Margins', spacingRule('margin', this.options.spacing)),
      new RuleSet('Padding', spacingRule('padding', this.options.spacing)),
      new RuleSet('Lists', [
        new Rule(
          'ul.unstyled, ol.unstyled',
          'ul.list-unstyled, ol.list-unstyled',
          {
            'list-style': 'none',
            margin: 0,
            padding: 0,
            '& li': {
              margin: 0,
              padding: 0,
            },
          }
        ),
      ]),
      new RuleSet('Visibility', [
        new Rule('.visible', '.visibility-visible', { visibility: 'visible' }),
        new Rule('.invisible', '.visibility-invisible', {
          visibility: 'hidden',
        }),
      ]),
      new RuleSet('Cursor', [
        new Rule('.pointer', '.cursor-pointer', {
          cursor: 'pointer',
        }),
      ]),
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
  addRule(selector, custom = {}, inherited = []) {
    if (inherited.length) {
      this.rules.map(set => {
        set.rules.map(rule => {
          if (inherited.indexOf(rule.selector) != -1) {
            Object.assign(custom, rule.properties)
          }
        })
      })
    }

    this.rules.push(new Rule(selector, custom))
  }

  css(separator = '\n') {
    return this.rules.map(rule => rule).join(separator)
  }

  toString() {
    return this.css()
  }
}

function spacingRule(type, spacing) {
  const rules = []
  const directions = ['', 'left', 'top', 'right', 'bottom', 'x', 'y']

  directions.map(dir => {
    _.map(spacing, (size, name) => {
      // Create selector
      const selectorShort = `.${type[0]}${dir[0] || ''}-${name}`
      const selectorVerbose = `.${type}${dir ? `-${dir}` : ''}-${name}`

      // Create properties
      const props = {}
      if (dir === '') {
        props[type] = size
      } else if (dir === 'x') {
        props[type + '-left'] = size
        props[type + '-right'] = size
      } else if (dir === 'y') {
        props[type + '-top'] = size
        props[type + '-bottom'] = size
      } else {
        props[type + `-${dir}`] = size
      }

      rules.push(new Rule(selectorShort, selectorVerbose, props))
      // rules.push(new Rule(`.${type[0]}-${dir[0]}`, { [`${type}-${dir}`]: size }))
    })
  })

  return rules
}

module.exports = Euphoria
