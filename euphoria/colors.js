const R = require('ramda')

const defaultColors = {
  primary: 'lightseagreen',
  success: 'forestgreen',
  info: 'teal',
  warning: 'orange',
  danger: 'crimson',
}

function makeColorClass(color) {
  return [
    `.bg-${color[0]} { background: ${color[1]}; }`,
    `.text-${color[0]} { color: ${color[1]}; }`,
  ]
}

module.exports = (colors = defaultColors) => {
  return R.join(
    '\n',
    R.flatten(R.map(c => makeColorClass(c), R.toPairs(colors)))
  )
}
