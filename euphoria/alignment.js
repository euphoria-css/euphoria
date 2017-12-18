const rule = require('./utils/create-rule')
const R = require('ramda')

module.exports = () => {
  const positions = ['relative', 'absolute', 'fixed'].map(p =>
    rule(`position-${p}`, ['position', p])
  )

  const flex = [
    rule('flex-row', ['flex-direction', 'row']),
    rule('flex-row-reverse', ['flex-direction', 'row-reverse']),
    rule('flex-column', ['flex-direction', 'column']),
    rule('flex-column-reverse', ['flex-direction', 'column-reverse']),
    rule('justify-content-start', ['justify-content', 'flex-start']),
    rule('justify-content-end', ['justify-content', 'flex-end']),
    rule('justify-content-center', ['justify-content', 'center']),
    rule('justify-content-between', ['justify-content', 'space-between']),
    rule('justify-content-around', ['justify-content', 'space-around']),
    rule('align-items-start', ['align-items', 'flex-start']),
    rule('align-items-end', ['align-items', 'flex-end']),
    rule('align-items-center', ['align-items', 'center']),
    rule('align-items-baseline', ['align-items', 'baseline']),
    rule('align-items-stretch', ['align-items', 'stretch']),
    rule('align-self-start', ['align-self', 'flex-start']),
    rule('align-self-end', ['align-self', 'flex-end']),
    rule('align-self-center', ['align-self', 'center']),
    rule('align-self-baseline', ['align-self', 'baseline']),
    rule('align-self-stretch', ['align-self', 'stretch']),
    rule('align-content-start', ['align-content', 'flex-start']),
    rule('align-content-end', ['align-content', 'flex-end']),
    rule('align-content-center', ['align-content', 'center']),
    rule('align-content-stretch', ['align-content', 'stretch']),
    rule('align-content-between', ['align-content', 'space-between']),
    rule('align-content-around', ['align-content', 'space-around']),
    rule('flex-wrap', ['flex-wrap', 'wrap']),
    rule('flex-wrap-reverse', ['flex-wrap', 'wrap-reverse']),
    rule('flex-nowrap', ['flex-wrap', 'nowrap']),
    rule('flex-first', ['order', '-1']),
    rule('flex-last', ['order', '1']),
  ]

  const text = ['left', 'right', 'center', 'justify'].map(dir =>
    rule(`text-${dir}`, ['text-align', dir])
  )

  const vertical = [
    rule('align-baseline', ['vertical-align', 'baseline']),
    rule('align-top', ['vertical-align', 'top']),
    rule('align-middle', ['vertical-align', 'middle']),
    rule('align-bottom', ['vertical-align', 'bottom']),
    rule('align-text-top', ['vertical-align', 'text-top']),
    rule('align-text-bottom', ['vertical-align', 'text-bottom']),
  ]

  return [].concat(positions, text, flex, vertical)
}
