const rule = require('./utils/create-rule')
const R = require('ramda')
const { colors: defaultColors } = require('./defaults')

function makeColorClass(color) {
  return [
    rule(`bg-${color[0]}`, ['background', color[1]]),
    rule(`text-${color[0]}`, ['color', color[1]]),
    rule(`hover-bg-${color[0]}:hover`, ['background', color[1]]),
    rule(`hover-text-${color[0]}:hover`, ['color', color[1]]),
  ]
}

module.exports = (colors = defaultColors) => {
  return R.flatten(R.map(c => makeColorClass(c), R.toPairs(colors)))
}
