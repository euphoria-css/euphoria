const R = require('ramda')

const defaultColors = {
  primary: 'lightseagreen',
  success: 'forestgreen',
  muted: 'lightgray',
  info: 'teal',
  warning: 'orange',
  danger: 'crimson',
}

function makeColorClass(color) {
  return [
    `.bg-${color[0]} { background: ${color[1]} !important; }`,
    `.text-${color[0]} { color: ${color[1]} !important; }`,
  ]
}

module.exports = (colors = defaultColors) => {
  return R.flatten(R.map(c => makeColorClass(c), R.toPairs(colors)))
}
