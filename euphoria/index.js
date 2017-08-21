const R = require('ramda')

const alignment = require('./alignment')
const colors = require('./colors')
const display = require('./display')
const spacing = require('./spacing')
const text = require('./text')

const allStyles = {
  alignment,
  colors,
  display,
  spacing,
  text,
}

function all(mapping = {}) {
  const css = R.mapObjIndexed((func, name) => {
    return func(mapping[name])
  }, allStyles)
  return R.flatten(R.values(css))
}

module.exports = Object.assign({}, allStyles, { all })
