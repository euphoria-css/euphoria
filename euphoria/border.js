const _ = require('lodash')
const rule = require('./utils/create-rule')
const { colors } = require('./defaults')

module.exports = () => {
  const color = _.map(colors, (val, key) =>
    rule(`bc-${key}`, ['border-color', val])
  )

  const widths = [
    rule('bw-xs', ['border-width', '0.15em']),
    rule('bw-sm', ['border-width', '0.3em']),
    rule('bw-md', ['border-width', '0.6em']),
    rule('bw-lg', ['border-width', '1.2em']),
    rule('bw-xl', ['border-width', '2.4em']),
  ]

  const styles = [
    rule('b-dotted', ['border-style', 'dotted']),
    rule('b-dashed', ['border-style', 'dashed']),
    rule('b-solid', ['border-style', 'solid']),
  ]

  const locations = [
    rule('ba', ['border', '1px solid']),
    rule('bl', ['border-left', '1px solid']),
    rule('bt', ['border-top', '1px solid']),
    rule('br', ['border-right', '1px solid']),
    rule('bb', ['border-bottom', '1px solid']),
    rule('bx', ['border-left', '1px solid'], ['border-right', '1px solid']),
    rule('bx', ['border-top', '1px solid'], ['border-bottom', '1px solid']),
  ]

  const radius = [
    rule('br-none', ['border-radius', 'none']),
    rule('br-xs', ['border-radius', '0.15em']),
    rule('br-sm', ['border-radius', '0.3em']),
    rule('br-md', ['border-radius', '0.6em']),
    rule('br-lg', ['border-radius', '1.2em']),
    rule('br-xl', ['border-radius', '2.4em']),
    rule('br-100', ['border-radius', '100%']),
    rule('br-pill', ['border-radius', '100em']),
    rule(
      'br-left',
      ['border-top-right-radius', '0'],
      ['border-bottom-right-radius', '0']
    ),
    rule(
      'br-top',
      ['border-bottom-right-radius', '0'],
      ['border-bottom-left-radius', '0']
    ),
    rule(
      'br-right',
      ['border-top-left-radius', '0'],
      ['border-bottom-left-radius', '0']
    ),
    rule(
      'br-bottom',
      ['border-top-right-radius', '0'],
      ['border-top-left-radius', '0']
    ),
  ]

  const collapse = [
    // Table border collapse
    rule('border-collapse', ['border-collapse', 'collapse']),
  ]

  const remove = [
    rule('bn', ['border', 'none']),
    rule('bn-l', ['border-left', 'none']),
    rule('bn-r', ['border-right', 'none']),
    rule('bn-b', ['border-bottom', 'none']),
    rule('bn-t', ['border-top', 'none']),
    rule('bn-x', ['border-left', 'none'], ['border-right', 'none']),
    rule('bn-x', ['border-top', 'none'], ['border-bottom', 'none']),
  ]

  return [].concat(locations, color, widths, styles, radius, collapse, remove)
}
