const rule = require('./utils/create-rule')
const R = require('ramda')

const types = ['padding', 'margin']
const directions = ['', 'bottom', 'left', 'right', 'top', 'x', 'y']

const defaultSpacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.75rem',
  xl: '3.25rem',
  xxl: '5rem',
}

function makeSpacingClass(type, direction, sizeName, size) {
  const classname = `.${type[0]}${direction ? direction[0] : ''}-${sizeName}`

  const t = type
  const s = size
  const d = direction
  let space
  switch (d) {
    case 'x':
      space = `${t}-left: ${s} !important; ${t}-right: ${s} !important;`
      break
    case 'y':
      space = `${t}-bottom: ${s} !important; ${t}-top: ${s} !important;`
      break
    case 'bottom':
      space = `${t}-${d}: ${s} !important;`
      break
    case 'left':
      space = `${t}-${d}: ${s} !important;`
      break
    case 'right':
      space = `${t}-${d}: ${s} !important;`
      break
    case 'top':
      space = `${t}-${d}: ${s} !important;`
      break
    default:
      space = `${t}: ${s} !important;`
  }
  return `${classname} { ${space} }`
}

module.exports = (spacing = defaultSpacing) =>
  R.flatten(
    R.concat(
      R.map(
        t =>
          R.map(
            d =>
              R.map(
                s => makeSpacingClass(t, d, s[0], s[1]),
                R.toPairs(R.merge(spacing, { none: 0 }))
              ),
            directions
          ),
        types
      ),
      // Append auto margin classes.
      [
        rule('m-auto', ['margin', 'auto']),
        rule('ml-auto', ['margin-left', 'auto']),
        rule('mr-auto', ['margin-right', 'auto']),
        rule('mb-auto', ['margin-bottom', 'auto']),
        rule('mt-auto', ['margin-top', 'auto']),
        rule('mx-auto', ['margin-left', 'auto']),
        rule('my-auto', ['margin-top', 'auto']),
      ]
    )
  )
