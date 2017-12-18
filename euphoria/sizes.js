const rule = require('./utils/create-rule')

const SIZES = [
  5,
  10,
  15,
  20,
  25,
  30,
  33.3,
  40,
  50,
  60,
  66.6,
  70,
  75,
  80,
  90,
  100,
]

module.exports = () => {
  return [].concat(
    SIZES.map(s => [
      rule(`h-${parseInt(s)}`, ['height', `${s}%`]),
      rule(`w-${parseInt(s)}`, ['width', `${s}%`]),
      rule(`mh-${parseInt(s)}`, ['max-height', `${s}%`]),
      rule(`mw-${parseInt(s)}`, ['max-width', `${s}%`]),
    ])
  )
}
