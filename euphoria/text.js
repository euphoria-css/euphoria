const rule = require('./utils/create-rule')
const R = require('ramda')
const { fontSizes } = require('./defaults')

module.exports = (sizes = fontSizes) => {
  const transform = [
    rule('uppercase', ['text-transform', 'uppercase']),
    rule('lowercase', ['text-transform', 'lowercase']),
    rule('capitalize', ['text-transform', 'capitalize']),
  ]

  const style = [
    rule('normal', ['font-style', 'normal'], ['font-weight', 'normal']),
    rule('bold', ['font-weight', 'bold']),
    rule('italic', ['font-style', 'italic']),
  ]

  const decoration = [
    rule('line-through', ['text-decoration', 'line-through']),
    rule('underline', ['text-decoration', 'underline']),
  ]

  const fontSizes = R.flatten(
    R.map(s => rule(`text-${s[0]}`, ['font-size', s[1]]), R.toPairs(sizes))
  )

  const spacing = [
    rule('ls-sm', ['letter-spacing', '-0.5em']),
    rule('ls-md', ['letter-spacing', '0']),
    rule('ls-lg', ['letter-spacing', '0.2em']),
    rule('ls-xl', ['letter-spacing', '0.5em']),
    rule('ls-xxl', ['letter-spacing', '0.8em']),
  ]

  return [].concat(fontSizes, decoration, style, transform, spacing)
}
