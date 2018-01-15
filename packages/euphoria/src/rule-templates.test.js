import { positionValue } from './rule-templates'

describe('.positionValue', () => {
  test('all', () => {
    expect(positionValue('margin', '', '10px')).toEqual({ margin: '10px' })
    expect(positionValue('margin', 'a', '10px')).toEqual({ margin: '10px' })
  })

  test('direction', () => {
    expect(positionValue('padding', 'l', '10px')).toEqual({
      'padding-left': '10px',
    })
    expect(positionValue('padding', 't', '10px')).toEqual({
      'padding-top': '10px',
    })
    expect(positionValue('padding', 'r', '10px')).toEqual({
      'padding-right': '10px',
    })
    expect(positionValue('padding', 'b', '10px')).toEqual({
      'padding-bottom': '10px',
    })
  })

  test('x,y', () => {
    expect(positionValue('padding', 'x', '10px')).toEqual({
      'padding-left': '10px',
      'padding-right': '10px',
    })
  })
})
