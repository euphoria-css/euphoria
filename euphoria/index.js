const R = require('ramda')

const alignment = require('./alignment')
const border = require('./border')
const clearfix = require('./clearfix')
const colors = require('./colors')
const display = require('./display')
const floats = require('./floats')
const fontFamily = require('./font-family')
const sizes = require('./sizes')
const spacing = require('./spacing')
const text = require('./text')

const allStyles = {
  alignment,
  border,
  clearfix,
  colors,
  display,
  floats,
  fontFamily,
  sizes,
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
