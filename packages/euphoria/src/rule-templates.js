import { flatten, map } from 'lodash'

export function positionValue(prefix, dir, val) {
  switch (dir) {
    case '':
      return { [prefix]: val }
      break
    case 'a':
      return { [prefix]: val }
      break
    case 'l':
      return { [`${prefix}-left`]: val }
      break
    case 't':
      return { [`${prefix}-top`]: val }
      break
    case 'r':
      return { [`${prefix}-right`]: val }
      break
    case 'b':
      return { [`${prefix}-bottom`]: val }
      break
    case 'x':
      return {
        [`${prefix}-left`]: val,
        [`${prefix}-right`]: val,
      }
      break
    case 'y':
      return {
        [`${prefix}-top`]: val,
        [`${prefix}-bottom`]: val,
      }
      break
    default:
      throw new Error(
        `Invalid "${prefix}" position "${dir}" with value "${val}"`
      )
      break
  }
}

export default {
  // ---------------------------------------------------------
  // Display
  // ---------------------------------------------------------

  display: {
    name: 'Display',
    rules: opts =>
      map(opts.display, (val, key) => ({
        selector: `.${key}`,
        properties: { display: val },
      })),
  },
  overflow: {
    name: 'Overflow',
    rules: opts =>
      map(opts.overflow, (val, key) => ({
        selector: `.of-${val}`,
        properties: { overflow: val },
      })),
  },
  opacity: {
    name: 'Opacity',
    rules: opts =>
      map(opts.opacity, (val, key) => ({
        selector: `.o-${key}`,
        properties: { opacity: val },
      })),
  },
  'opacity-hover': {
    name: 'Opacity (hover)',
    rules: opts =>
      map(opts.opacity, (val, key) => ({
        selector: `.hov-o-${key}:hover`,
        properties: { opacity: val },
      })),
  },
  'z-index': {
    name: 'Z-Index',
    rules: opts =>
      map(opts.zIndex, (val, key) => ({
        selector: `.z-${val}`,
        properties: { 'z-index': val },
      })),
  },

  // ---------------------------------------------------------
  // Positioning and display
  // ---------------------------------------------------------

  floats: {
    name: 'Floats',
    rules: opts =>
      map(opts.floats, (val, key) => ({
        selector: `.f${val[0]}`,
        properties: { float: val },
      })),
  },
  positions: {
    name: 'Positioning',
    rules: opts =>
      map(opts.positions, (val, key) => ({
        selector: `.${val}`,
        properties: { position: val },
      })),
  },
  'text-alignment': {
    name: 'Text alignment',
    rules: opts =>
      map(opts.textAlignment, (val, key) => ({
        selector: `.${val}`,
        properties: { 'text-align': val },
      })),
  },
  'vertical-alignment': {
    name: 'Vertical alignment',
    rules: opts =>
      map(opts.verticalAlignment, (val, key) => ({
        selector: `.v-${key}`,
        properties: { 'vertical-align': val },
      })),
  },
  visibility: {
    name: 'Visibility',
    rules: opts =>
      map(opts.visibility, (val, key) => ({
        selector: `.${key}`,
        properties: { visibility: val },
      })),
  },
  clearfix: {
    name: 'Clearfix',
    rules: opts => [
      {
        selector: '.cf:after',
        properties: { clear: 'both', display: 'table', content: '""' },
      },
    ],
  },

  // ---------------------------------------------------------
  // Sizes
  // ---------------------------------------------------------

  widths: {
    name: 'Widths',
    rules: opts =>
      map(opts.percentageSizes, (val, key) => ({
        selector: `.w-${key}`,
        properties: { width: val },
      })),
  },
  'widths-max': {
    name: 'Widths (max)',
    rules: opts =>
      map(opts.percentageSizes, (val, key) => ({
        selector: `.mw-${key}`,
        properties: { 'max-width': val },
      })),
  },
  heights: {
    name: 'Heights',
    rules: opts =>
      map(opts.percentageSizes, (val, key) => ({
        selector: `.h-${key}`,
        properties: { height: val },
      })),
  },

  // ---------------------------------------------------------
  // Colors
  // ---------------------------------------------------------

  'text-colors': {
    name: 'Text colors',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.${key}`,
        properties: { color: val },
      })),
  },
  'text-colors-hover': {
    name: 'Text colors (hover)',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.hov-${key}:hover`,
        properties: { color: val },
      })),
  },
  'background-colors': {
    name: 'Background colors',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.bg-${key}`,
        properties: { background: val },
      })),
  },
  'background-colors-hover': {
    name: 'Background colors (hover)',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.hov-bg-${key}:hover`,
        properties: { background: val },
      })),
  },

  // ---------------------------------------------------------
  // Box styles
  // ---------------------------------------------------------

  'box-shadows': {
    name: 'Box shadows',
    rules: opts =>
      map(opts.boxShadows, (val, key) => ({
        selector: `.bs-${key}`,
        properties: { 'box-shadow': val },
      })),
  },

  // ---------------------------------------------------------
  // Typography
  // ---------------------------------------------------------

  'font-sizes': {
    name: 'Font sizes',
    rules: opts =>
      map(opts.fontSizes, (val, key) => ({
        selector: `.txt-${key}`,
        properties: { 'font-size': val },
      })),
  },
  'text-transforms': {
    name: 'Text transforms',
    rules: opts =>
      map(opts.textTransforms, (val, key) => ({
        selector: `.${key}`,
        properties: { 'text-transform': val },
      })),
  },
  'font-styles': {
    name: 'Font styles',
    rules: opts =>
      map(opts.fontStyles, (val, key) => ({
        selector: `.${val}`,
        properties: { 'font-style': val },
      })),
  },
  'font-weights': {
    name: 'Font weights',
    rules: opts =>
      map(opts.fontWeights, (val, key) => ({
        selector: `.fw-${key}`,
        properties: { 'font-weight': val },
      })),
  },
  'text-decorations': {
    name: 'Text decorations',
    rules: opts =>
      map(opts.textDecorations, (val, key) => ({
        selector: `.td-${key}`,
        properties: { 'text-decoration': val },
      })),
  },
  'text-decorations-hover': {
    name: 'Text decorations (hover)',
    rules: opts =>
      map(opts.textDecorations, (val, key) => ({
        selector: `.hov-td-${key}:hover`,
        properties: { 'text-decoration': val },
      })),
  },
  'letter-spacing': {
    name: 'Letter spacing',
    rules: opts =>
      map(opts.letterSpacing, (val, key) => ({
        selector: `.ls-${key}`,
        properties: { 'letter-spacing': val },
      })),
  },
  'line-heights': {
    name: 'Line heights',
    rules: opts =>
      map(opts.lineHeights, (val, key) => ({
        selector: `.lh-${key}`,
        properties: { 'line-height': val },
      })),
  },
  'normalize-font': {
    name: 'Normalize font',
    rules: opts => [
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
  'font-families': {
    name: 'Font families',
    rules: opts =>
      map(opts.fontFamilies, (val, key) => ({
        selector: `.${key}`,
        properties: { 'font-family': val },
      })),
  },
  whitespace: {
    name: 'Whitespace',
    rules: opts =>
      map(opts.whitespace, (val, key) => ({
        selector: `.ws-${val}`,
        properties: { 'white-space': val },
      })),
  },

  // ---------------------------------------------------------
  // Borders
  // ---------------------------------------------------------

  'border-positions': {
    name: 'Border positions',
    rules: opts =>
      map(opts.positionValues, (val, key) => ({
        selector: `.b${val}`,
        properties: positionValue('border', val, '1px solid'),
      })),
  },
  'border-removal': {
    name: 'Border removal',
    rules: opts =>
      map(opts.positionValues, (val, key) => ({
        selector: `.b${val}-none`,
        properties: positionValue('border', val, 'none'),
      })),
  },
  'border-styles': {
    name: 'Border styles',
    rules: opts =>
      map(opts.borderStyles, (val, key) => ({
        selector: `.b-${val}`,
        properties: { 'border-style': val },
      })),
  },
  'border-widths': {
    name: 'Border widths',
    rules: opts =>
      map(opts.borderWidths, (val, key) => ({
        selector: `.bw-${key}`,
        properties: { 'border-width': val },
      })),
  },
  'border-radii': {
    name: 'Border radii',
    rules: opts =>
      map(opts.borderRadii, (val, key) => ({
        selector: `.rad-${key}`,
        properties: { 'border-radius': val },
      })),
  },
  'border-radii-positions': {
    name: 'Border radii positions',
    rules: opts =>
      map(opts.borderRadiiPositions, (val, key) => {
        let properties
        switch (val) {
          case 'left':
            properties = {
              'border-top-right-radius': 0,
              'border-bottom-right-radius': 0,
            }
            break
          case 'top':
            properties = {
              'border-bottom-right-radius': 0,
              'border-bottom-left-radius': 0,
            }
            break
          case 'right':
            properties = {
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0,
            }
            break
          case 'bottom':
            properties = {
              'border-top-right-radius': 0,
              'border-top-left-radius': 0,
            }
            break
          default:
            throw new Error('invalid border radii position')
            break
        }
        return {
          selector: `.rad-${val}`,
          properties,
        }
      }),
  },
  'border-collapse': {
    name: 'Border collapse',
    rules: opts => [
      {
        selector: `.collapse`,
        properties: { 'border-collapse': 'collapse' },
      },
    ],
  },
  'border-colors': {
    name: 'Border colors',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.bc-${key}`,
        properties: { 'border-color': val },
      })),
  },
  'border-colors-hover': {
    name: 'Border colors (hover)',
    rules: opts =>
      map(opts.colors, (val, key) => ({
        selector: `.hov-bc-${key}:hover`,
        properties: { 'border-color': val },
      })),
  },

  // ---------------------------------------------------------
  // Flexbox
  // ---------------------------------------------------------

  'flex-direction': {
    name: 'Flex direction',
    rules: opts =>
      map(opts.flexDirection, (val, key) => ({
        selector: `.fd-${key}`,
        properties: { 'flex-direction': val },
      })),
  },
  'justify-content': {
    name: 'Justify content',
    rules: opts =>
      map(opts.justifyContent, (val, key) => ({
        selector: `.jc-${key}`,
        properties: { 'justify-content': val },
      })),
  },
  'align-items': {
    name: 'Align items',
    rules: opts =>
      map(opts.alignItems, (val, key) => ({
        selector: `.ai-${key}`,
        properties: { 'align-items': val },
      })),
  },
  'align-self': {
    name: 'Align self',
    rules: opts =>
      map(opts.alignSelf, (val, key) => ({
        selector: `.as-${key}`,
        properties: { 'align-self': val },
      })),
  },
  'align-content': {
    name: 'Align content',
    rules: opts =>
      map(opts.alignContent, (val, key) => ({
        selector: `.ac-${key}`,
        properties: { 'align-content': val },
      })),
  },
  'flex-wrap': {
    name: 'Flex wrap',
    rules: opts =>
      map(opts.flexWrap, (val, key) => ({
        selector: `.fw-${key}`,
        properties: { 'flex-wrap': val },
      })),
  },
  'flex-order': {
    name: 'Flex order',
    rules: opts =>
      map(opts.flexOrder, (val, key) => ({
        selector: `.fo-${key}`,
        properties: { 'flex-order': val },
      })),
  },

  // ---------------------------------------------------------
  // Spacing
  // ---------------------------------------------------------

  margin: {
    name: 'Margin',
    rules(opts) {
      return flatten(
        map(opts.margins, (val, key) =>
          map(opts.spacingDirections, dir => ({
            selector: `.m${dir}-${key}`,
            properties: positionValue('margin', dir, val),
          }))
        )
      )
    },
  },
  'margin-percentages': {
    name: 'Margin (percentages)',
    rules(opts) {
      return flatten(
        map(opts.percentageSizes, (val, key) =>
          map(opts.spacingDirections, dir => ({
            selector: `.m${dir}-${key}`,
            properties: positionValue('margin', dir, val),
          }))
        )
      )
    },
  },
  padding: {
    name: 'Padding',
    rules(opts) {
      return flatten(
        map(opts.paddings, (val, key) =>
          map(opts.spacingDirections, dir => ({
            selector: `.p${dir}-${key}`,
            properties: positionValue('padding', dir, val),
          }))
        )
      )
    },
  },

  // ---------------------------------------------------------
  // Lists
  // ---------------------------------------------------------

  lists: {
    name: 'Lists',
    rules: opts => [
      {
        selector: `.unstyled`,
        properties: {
          'list-style': 'none',
        },
      },
    ],
  },

  // ---------------------------------------------------------
  // Other styles
  // ---------------------------------------------------------

  'background-sizes': {
    name: 'Background sizes',
    rules: opts =>
      map(opts.backgroundSizes, (val, key) => ({
        selector: `.${val}`,
        properties: { 'background-size': val },
      })),
  },
  cursors: {
    name: 'Cursors',
    rules: opts =>
      map(opts.cursors, (val, key) => ({
        selector: `.c-${val}`,
        properties: { cursor: val },
      })),
  },
}
