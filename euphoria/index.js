const R = require('ramda')

const alignment = require('./alignment')
const colors = require('./colors')
const display = require('./display')
const spacing = require('./spacing')

const all = {
  alignment,
  colors,
  display,
  spacing,
}

module.exports = Object.assign({}, all, {
  all(mapping = {}) {
    const css = R.mapObjIndexed((func, name) => {
      return func(mapping[name])
    }, all)
    return R.join('\n', R.values(css))
  },
})
