const R = require('ramda')

const defaultSizes = {
  xxs: '0.7rem',
  xs: '0.8rem',
  sm: '0.9rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '3rem',
}

module.exports = (sizes = defaultSizes) => {
  const transform = `.text-uppercase { text-transform: uppercase !important; }
.text-lowercase { text-transform: lowercase !important; }
.text-capitalize { text-transform: capitalize !important; }`

  const style = `.text-normal { font-style: normal !important; }
.text-bold { font-weight: bold !important; }
.text-italic { font-style: italic !important; }`

  const decoration = `.text-line-through { text-decoration: line-through !important; }
.text-underline { text-decoration: underline !important; }`

  const fontSizes = R.join(
    '\n',
    R.flatten(
      R.map(
        s => `.text-${s[0]} { font-size: ${s[1]} !important; }`,
        R.toPairs(sizes)
      )
    )
  )

  return [decoration, fontSizes, style, transform].join('\n')
}
