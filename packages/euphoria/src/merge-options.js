import defaults from './default-options'
import lightness from 'lightness'
import { map } from 'lodash'

export function createColors(baseColors = {}, gradients = true) {
  const colors = {}

  // Generate color gradients version for all colors.
  map(baseColors, (val, key) => {
    if (gradients) colors[`${key}-lightest`] = lightness(val, 50)
    if (gradients) colors[`${key}-lighter`] = lightness(val, 45)
    if (gradients) colors[`${key}-light`] = lightness(val, 30)
    colors[key] = val
    if (gradients) colors[`${key}-dark`] = lightness(val, -10)
    if (gradients) colors[`${key}-darker`] = lightness(val, -16)
    if (gradients) colors[`${key}-darkest`] = lightness(val, -24)
  })

  // Some base colors that never change, thus they don't need
  // to be configurable
  colors.transparent = 'transparent'
  colors.black = 'black'
  colors.white = 'white'

  return colors
}

export default function options(overrides = {}) {
  const opts = Object.assign({}, defaults, overrides)
  opts.colors = createColors(opts.baseColors, opts.colorGradients)
  return opts
}
