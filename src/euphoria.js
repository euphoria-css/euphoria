const _ = require('lodash')
const Rule = require('./rule')
const RuleSet = require('./rule-set')
const SizeRule = require('./size-rule')
const shader = require('shader')

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
    'gray-lightest': '#f6f6f6',
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
    [`${name}-dark`]: shader(color, -0.35),
    [`${name}-darker`]: shader(color, -0.5),
    [`${name}-darkest`]: shader(color, -0.65),
  }
}

class Euphoria {
  constructor(options) {
    this.defaults = {
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
        'xl-up': 'min-width: 1800px',
      },
      colors: COLORS,
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
        xxxl: '4rem',
        xxl: '2.6rem',
        xl: '1.9rem',
        lg: '1.3rem',
        md: '1rem',
        sm: '0.85rem',
        xs: '0.7rem',
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
    }

    // TODO: shall or deep merge?
    this.options = Object.assign({}, this.defaults, options)

    this.rules = this.rawRules.map(
      ruleset =>
        new RuleSet({
          name: ruleset.name,
          rules: ruleset.rules.map(props => new Rule(props)),
          breakpoints: ruleset.breakpoints,
        })
    )
  }

  get rawRules() {
    return [
      {
        name: 'Display',
        rules: [
          {
            short: 'db',
            verbose: 'display-block',
            properties: { display: 'block' },
          },
          {
            short: 'di',
            verbose: 'display-inline',
            properties: { display: 'inline' },
          },
          {
            short: 'dib',
            verbose: 'display-inline-block',
            properties: { display: 'inline-block' },
          },
          {
            short: 'df',
            verbose: 'display-flex',
            properties: { display: 'flex' },
          },
          {
            short: 'dfb',
            verbose: 'display-flex-block',
            properties: { display: 'flex-block' },
          },
          {
            short: 'dt',
            verbose: 'display-table',
            properties: { display: 'table' },
          },
          {
            short: 'dtc',
            verbose: 'display-table-cell',
            properties: { display: 'table-cell' },
          },
          {
            short: 'dn',
            verbose: 'display-none',
            properties: { display: 'none' },
          },
        ],
      },
      {
        name: 'Floats',
        rules: this._createFloatRules(),
      },
      {
        name: 'Floats (responsive)',
        rules: this._createFloatRules(),
        breakpoints: this.options.breakpoints,
      },
      {
        name: 'Positioning',
        rules: ['relative', 'absolute', 'fixed'].map(p => ({
          short: p,
          verbose: `position-${p}`,
          properties: { position: p },
        })),
      },
      {
        name: 'Text alignment',
        rules: ['left', 'right', 'center', 'justify'].map(d => ({
          short: d,
          verbose: `text-align-${d}`,
          properties: { 'text-align': d },
        })),
      },
      {
        name: 'Widths',
        rules: this._createSizeRules('w', 'width'),
      },
      {
        name: 'Widths (responsive)',
        rules: this._createSizeRules('w', 'width'),
        breakpoints: this.options.breakpoints,
      },
      {
        name: 'Widths (max)',
        rules: this.options.sizes.map(s => {
          const label = s === 'auto' ? 'auto' : parseInt(s)
          const size = s === 'auto' ? 'auto' : `${s}%`
          return {
            short: `mw-${label}`,
            verbose: `max-width-${label}`,
            properties: { 'max-width': size },
          }
        }),
      },
      {
        name: 'Heights',
        rules: this.options.sizes.map(s => {
          const label = s === 'auto' ? 'auto' : parseInt(s)
          const size = s === 'auto' ? 'auto' : `${s}%`
          return {
            short: `h-${label}`,
            verbose: `height-${label}`,
            properties: { height: size },
          }
        }),
      },
      {
        name: 'Heights (max)',
        rules: this.options.sizes.map(s => {
          const label = s === 'auto' ? 'auto' : parseInt(s)
          const size = s === 'auto' ? 'auto' : `${s}%`
          return {
            short: `mh-${label}`,
            verbose: `max-height-${label}`,
            properties: { 'max-height': size },
          }
        }),
      },
      {
        name: 'Text colors',
        rules: _.map(this.options.colors, (color, name) => ({
          short: `${name}`,
          verbose: `text-color-${name}`,
          properties: { color },
        })),
      },
      {
        name: 'Text colors (hover)',
        rules: _.map(this.options.colors, (color, name) => ({
          short: `hov-${name}`,
          verbose: `hover-text-color-${name}`,
          properties: { color },
          hover: true,
        })),
      },
      {
        name: 'Overflow',
        rules: ['visible', 'hidden', 'scroll', 'auto'].map(overflow => ({
          short: `of-${overflow}`,
          verbose: `overflow-${overflow}`,
          properties: { overflow },
        })),
      },
      {
        name: 'Background colors',
        rules: _.map(this.options.colors, (color, name) => ({
          short: `bg-${name}`,
          verbose: `background-color-${name}`,
          properties: { background: color },
        })),
      },
      {
        name: 'Background colors (hover)',
        rules: _.map(this.options.colors, (color, name) => ({
          short: `hov-bg-${name}`,
          verbose: `hover-background-color-${name}`,
          properties: { background: color },
          hover: true,
        })),
      },
      {
        name: 'Background sizes',
        rules: _.map(['contain', 'cover'], size => ({
          short: `${size}`,
          verbose: `background-size-${size}`,
          properties: { 'background-size': size },
        })),
      },
      {
        name: 'Clearfix',
        rules: [
          {
            short: 'cf',
            verbose: 'clearfix',
            properties: { clear: 'both', display: 'table', content: '""' },
            after: true,
          },
        ],
      },
      {
        name: 'Box shadows',
        rules: _.map(this.options.boxShadows, (shadow, name) => ({
          short: `bs-${name}`,
          verbose: `box-shadow-${name}`,
          properties: { 'box-shadow': shadow },
        })),
      },
      {
        name: 'Text transforms',
        rules: [
          {
            short: 'uppercase',
            verbose: 'text-transform-uppercase',
            properties: { 'text-transform': 'uppercase' },
          },
          {
            short: 'lowercase',
            verbose: 'text-transform-lowercase',
            properties: { 'text-transform': 'lowercase' },
          },
          {
            short: 'capitalize',
            verbose: 'text-transform-capitalize',
            properties: { 'text-transform': 'capitalize' },
          },
        ],
      },
      {
        name: 'Text styles',
        rules: [
          {
            short: 'italic',
            verbose: 'font-style-italic',
            properties: { 'font-style': 'italic' },
          },
        ],
      },
      {
        name: 'Font weights',
        rules: _.map(
          [
            { name: 'bold', size: 'bold' },
            { name: 'normal', size: 'normal' },
            { name: '1', size: '100' },
            { name: '2', size: '200' },
            { name: '3', size: '300' },
            { name: '4', size: '400' },
            { name: '5', size: '500' },
            { name: '6', size: '600' },
            { name: '7', size: '700' },
            { name: '8', size: '800' },
            { name: '9', size: '900' },
          ],
          ({ size, name }) => ({
            short: name === 'bold' ? 'bold' : `fw-${name}`,
            verbose: `font-weight-${size}`,
            properties: { 'font-weight': size },
          })
        ),
      },
      {
        name: 'Text decoration',
        rules: [
          {
            short: 'line-through',
            verbose: 'text-decoration-line-through',
            properties: {
              'text-decoration': 'line-through',
            },
          },
          {
            short: 'underline',
            verbose: 'text-decoration-underline',
            properties: {
              'text-decoration': 'underline',
            },
          },
          {
            short: 'no-decoration',
            verbose: 'text-decoration-none',
            properties: {
              'text-decoration': 'none',
            },
          },
        ],
      },
      {
        name: 'Letter spacing',
        rules: _.map(this.options.letterSpacing, (size, label) => ({
          short: `ls-${label}`,
          verbose: `letter-spacing-${label}`,
          properties: {
            'letter-spacing': size,
          },
        })),
      },
      {
        name: 'Line height',
        rules: _.map(this.options.lineHeights, (size, label) => ({
          short: `lh-${label}`,
          verbose: `line-height-${label}`,
          properties: { 'line-height': size },
        })),
      },
      {
        name: 'Normalize font',
        rules: [
          {
            short: 'normal',
            verbose: 'normalize-font',
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
        name: 'Vertical alignment',
        rules: [
          {
            short: 'v-base',
            verbose: 'align-baseline',
            properties: { 'vertical-align': 'baseline' },
          },
          {
            short: 'v-top',
            verbose: 'align-top',
            properties: { 'vertical-align': 'top' },
          },
          {
            short: 'v-mid',
            verbose: 'align-middle',
            properties: { 'vertical-align': 'middle' },
          },
          {
            short: 'v-bot',
            verbose: 'align-bottom',
            properties: { 'vertical-align': 'bottom' },
          },
          {
            short: 'v-text-top',
            verbose: 'align-text-top',
            properties: { 'vertical-align': 'text-top' },
          },
          {
            short: 'v-text-bot',
            verbose: 'align-text-bottom',
            properties: {
              'vertical-align': 'text-bottom',
            },
          },
        ],
      },
      {
        name: 'Border positions',
        rules: [
          {
            short: 'ba',
            verbose: 'border',
            properties: { border: '1px solid' },
          },
          {
            short: 'bl',
            verbose: 'border-left',
            properties: { 'border-left': '1px solid' },
          },
          {
            short: 'bt',
            verbose: 'border-top',
            properties: { 'border-top': '1px solid' },
          },
          {
            short: 'br',
            verbose: 'border-right',
            properties: { 'border-right': '1px solid' },
          },
          {
            short: 'bb',
            verbose: 'border-bottom',
            properties: { 'border-bottom': '1px solid' },
          },
          {
            short: 'bx',
            verbose: 'border-x',
            properties: {
              'border-left': '1px solid',
              'border-right': '1px solid',
            },
          },
          {
            short: 'by',
            verbose: 'border-y',
            properties: {
              'border-top': '1px solid',
              'border-bottom': '1px solid',
            },
          },
        ],
      },
      {
        name: 'Border widths',
        rules: _.map(this.options.borderWidths, (size, name) => ({
          short: `bw-${name}`,
          verbose: `border-width-${name}`,
          properties: { 'border-width': size },
        })),
      },
      {
        name: 'Border styles',
        rules: [
          {
            short: 'b-solid',
            verbose: 'border-style-solid',
            properties: {
              'border-style': 'solid',
            },
          },
          {
            short: 'b-dotted',
            verbose: 'border-style-dotted',
            properties: {
              'border-style': 'dotted',
            },
          },
          {
            short: 'b-dashed',
            verbose: 'border-style-dashed',
            properties: {
              'border-style': 'dashed',
            },
          },
        ],
      },
      {
        name: 'Border radius',
        rules: _.map(this.options.borderRadii, (size, label) => ({
          short: `br-${label}`,
          verbose: `border-radius-${label}`,
          properties: {
            'border-radius': size,
          },
        })),
      },
      {
        name: 'Border radius position',
        rules: [
          {
            short: 'br-left',
            verbose: 'border-radius-left',
            properties: {
              'border-top-right-radius': '0',
              'border-bottom-right-radius': '0',
            },
          },
          {
            short: 'br-top',
            verbose: 'border-radius-top',
            properties: {
              'border-bottom-right-radius': '0',
              'border-bottom-left-radius': '0',
            },
          },
          {
            short: 'br-right',
            verbose: 'border-radius-right',
            properties: {
              'border-top-left-radius': '0',
              'border-bottom-left-radius': '0',
            },
          },
          {
            short: 'br-bottom',
            verbose: 'border-radius-bottom',
            properties: {
              'border-top-right-radius': '0',
              'border-top-left-radius': '0',
            },
          },
        ],
      },
      {
        name: 'Border removal',
        rules: [
          {
            short: 'bn',
            verbose: 'border-none',
            properties: { border: 'none' },
          },
          {
            short: 'bn-l',
            verbose: 'border-none-left',
            properties: { 'border-left': 'none' },
          },
          {
            short: 'bn-r',
            verbose: 'border-none-right',
            properties: { 'border-right': 'none' },
          },
          {
            short: 'bn-b',
            verbose: 'border-none-bottom',
            properties: { 'border-bottom': 'none' },
          },
          {
            short: 'bn-t',
            verbose: 'border-none-top',
            properties: { 'border-top': 'none' },
          },
          {
            short: 'bn-x',
            verbose: 'border-none-x',
            properties: {
              'border-left': 'none',
              'border-right': 'none',
            },
          },
          {
            short: 'bn-y',
            verbose: 'border-none-y',
            properties: {
              'border-top': 'none',
              'border-bottom': 'none',
            },
          },
        ],
      },
      {
        name: 'Border collapse',
        rules: [
          {
            short: 'collapse',
            verbose: 'border-collapse',
            properties: {
              'border-collapse': 'collapse',
            },
          },
        ],
      },
      {
        name: 'Border colors',
        rules: _.map(this.options.colors, (val, key) => ({
          short: `bc-${key}`,
          verbose: `border-color-${key}`,
          properties: { 'border-color': val },
        })),
      },
      {
        name: 'Border colors (hover)',
        rules: _.map(this.options.colors, (val, key) => ({
          short: `hov-bc-${key}`,
          verbose: `hover-border-color-${key}`,
          properties: { 'border-color': val },
          hover: true,
        })),
      },
      // TODO: Allow customizing font families
      {
        name: 'Font families',
        rules: _.map(this.options.fontFamilies, (stack, name) => {
          return {
            short: name,
            verbose: `font-family-${name}`,
            properties: { 'font-family': stack },
          }
        }),
      },
      {
        name: 'Font sizes',
        rules: _.map(this.options.fontSizes, (prop, name) => ({
          short: `txt-${name}`,
          verbose: `text-size-${name}`,
          properties: {
            'font-size': prop,
          },
        })),
      },
      {
        name: 'Margins',
        rules: this._createSpacingRules('margin'),
      },
      {
        name: 'Margins (responsive)',
        rules: this._createSpacingRules('margin'),
        breakpoints: this.options.breakpoints,
      },
      {
        name: 'Padding',
        rules: this._createSpacingRules('padding'),
      },
      {
        name: 'Padding (responsive)',
        rules: this._createSpacingRules('padding'),
        breakpoints: this.options.breakpoints,
      },
      {
        name: 'Lists',
        rules: [
          {
            short: 'unstyled',
            verbose: 'list-unstyled',
            properties: {
              'list-style': 'none',
              margin: 0,
              padding: 0,
              '& li': {
                margin: 0,
                padding: 0,
              },
            },
          },
        ],
      },
      {
        name: 'Visibility',
        rules: [
          {
            short: 'visible',
            verbose: 'visibility-visible',
            properties: { visibility: 'visible' },
          },
          {
            short: 'invisible',
            verbose: 'visibility-invisible',
            properties: {
              visibility: 'hidden',
            },
          },
        ],
      },
      {
        name: 'Cursor',
        rules: this.options.cursors.map(cursor => ({
          short: `c-${cursor}`,
          verbose: `cursor-${cursor}`,
          properties: { cursor },
        })),
      },
      {
        name: 'Flexbox',
        rules: [
          {
            short: 'f-row',
            verbose: 'flex-direction-row',
            properties: { 'flex-direction': 'row' },
          },
          {
            short: 'f-row-reverse',
            verbose: 'flex-direction-row-reverse',
            properties: { 'flex-direction': 'row-reverse' },
          },
          {
            short: 'f-column',
            verbose: 'flex-direction-column',
            properties: { 'flex-direction': 'column' },
          },
          {
            short: 'f-column-reverse',
            verbose: 'flex-direction-column-reverse',
            properties: {
              'flex-direction': 'column-reverse',
            },
          },
          {
            short: 'jc-start',
            verbose: 'justify-content-flex-start',
            properties: { 'justify-content': 'flex-start' },
          },
          {
            short: 'jc-end',
            verbose: 'justify-content-flex-end',
            properties: { 'justify-content': 'flex-end' },
          },
          {
            short: 'jc-center',
            verbose: 'justify-content-center',
            properties: { 'justify-content': 'center' },
          },
          {
            short: 'jc-between',
            verbose: 'justify-content-space-between',
            properties: {
              'justify-content': 'space-between',
            },
          },
          {
            short: 'jc-around',
            verbose: 'justify-content-space-around',
            properties: {
              'justify-content': 'space-around',
            },
          },
          {
            short: 'ai-start',
            verbose: 'align-items-flex-start',
            properties: { 'align-items': 'flex-start' },
          },
          {
            short: 'ai-end',
            verbose: 'align-items-flex-end',
            properties: { 'align-items': 'flex-end' },
          },
          {
            short: 'ai-center',
            verbose: 'align-items-center',
            properties: { 'align-items': 'center' },
          },
          {
            short: 'ai-baseline',
            verbose: 'align-items-baseline',
            properties: { 'align-items': 'baseline' },
          },
          {
            short: 'ai-stretch',
            verbose: 'align-items-stretch',
            properties: { 'align-items': 'stretch' },
          },
          {
            short: 'as-start',
            verbose: 'align-self-flex-start',
            properties: { 'align-self': 'flex-start' },
          },
          {
            short: 'as-end',
            verbose: 'align-self-flex-end',
            properties: { 'align-self': 'flex-end' },
          },
          {
            short: 'as-center',
            verbose: 'align-self-center',
            properties: { 'align-self': 'center' },
          },
          {
            short: 'as-baseline',
            verbose: 'align-self-baseline',
            properties: { 'align-self': 'baseline' },
          },
          {
            short: 'as-stretch',
            verbose: 'align-self-stretch',
            properties: { 'align-self': 'stretch' },
          },
          {
            short: 'ac-start',
            verbose: 'align-content-start',
            properties: { 'align-content': 'flex-start' },
          },
          {
            short: 'ac-end',
            verbose: 'align-content-flex-end',
            properties: { 'align-content': 'flex-end' },
          },
          {
            short: 'ac-center',
            verbose: 'align-content-center',
            properties: { 'align-content': 'center' },
          },
          {
            short: 'ac-stretch',
            verbose: 'align-content-stretch',
            properties: { 'align-content': 'stretch' },
          },
          {
            short: 'ac-between',
            verbose: 'align-content-space-between',
            properties: {
              'align-content': 'space-between',
            },
          },
          {
            short: 'ac-around',
            verbose: 'align-content-space-around',
            properties: { 'align-content': 'space-around' },
          },
          {
            short: 'fw',
            verbose: 'flex-wrap',
            properties: { 'flex-wrap': 'wrap' },
          },
          {
            short: 'fw-reverse',
            verbose: 'flex-wrap-reverse',
            properties: { 'flex-wrap': 'wrap-reverse' },
          },
          {
            short: 'fw-none',
            verbose: 'flex-wrap-none',
            properties: { 'flex-wrap': 'nowrap' },
          },
          {
            short: 'fo-first',
            verbose: 'flex-order-first',
            properties: { order: '-1' },
          },
          {
            short: 'fo-last',
            verbose: 'flex-order-last',
            properties: { order: '1' },
          },
        ],
      },
      {
        name: 'Opacity',
        rules: _.map(this.options.opacity, (value, name) => ({
          short: `o-${name}`,
          verbose: `opacity-${name}`,
          properties: { opacity: value },
        })),
      },
      {
        name: 'Opacity (hover)',
        rules: _.map(this.options.opacity, (value, name) => ({
          short: `hov-o-${name}`,
          verbose: `hover-opacity-${name}`,
          properties: { opacity: value },
          hover: true,
        })),
      },
      {
        name: 'Whitespace',
        rules: ['pre', 'nowrap', 'normal'].map(ws => ({
          short: `ws-${ws}`,
          verbose: `white-space-${ws}`,
          properties: { 'white-space': ws },
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
    short,
    verbose,
    properties = {},
    inherits = [],
    hover = false,
    responsive = false,
    important = false,
    after = false,
  }) {
    if (inherits.length) {
      this.rules.map(set => {
        set.rules.map(rule => {
          if (
            inherits.indexOf(rule.classNameShort) != -1 ||
            inherits.indexOf(rule.classNameVerbose) != -1
          ) {
            Object.assign(properties, rule.properties)
          }
        })
      })
    }

    this.rules.push(
      new Rule({ short, verbose, properties, hover, responsive, after })
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

  _createSizeRules(prefixShort, prefixVerbose) {
    return _.map(this.options.sizes, size =>
      new SizeRule({ prefixShort, prefixVerbose, size }).toObject()
    )
  }

  _createFloatRules() {
    return ['left', 'right', 'none'].map(float => ({
      short: `f${float[0]}`,
      verbose: `float-${float}`,
      properties: { float },
    }))
  }

  _createSpacingRules(type) {
    const spacing = this.options.spacing
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

        rules.push({ short, verbose, properties })
      })
    })

    return rules
  }
}

module.exports = Euphoria
