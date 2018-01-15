import options, { createColors } from './merge-options'

describe('options', () => {
  test('override existing options', () => {
    const o = options({ backgroundSizes: ['foo'] })
    expect(o.backgroundSizes).toEqual(['foo'])
  })
})

describe('colors', () => {
  test('color helper works', () => {
    const colors = createColors({ red: '#ff0000' })
    expect(colors).toEqual({
      transparent: 'transparent',
      black: 'black',
      white: 'white',
      red: '#ff0000',
      'red-dark': '#CC0000',
      'red-darker': '#AD0000',
      'red-darkest': '#850000',
      'red-light': '#FF9999',
      'red-lighter': '#FFE5E5',
      'red-lightest': '#FFFFFF',
    })
  })

  test('colors are set', () => {
    const o = options({ baseColors: { blue: '#0000ff' } })
    expect(o.colors).toEqual({
      'blue-lightest': '#FFFFFF',
      'blue-lighter': '#E5E5FF',
      'blue-light': '#9999FF',
      blue: '#0000ff',
      'blue-dark': '#0000CC',
      'blue-darker': '#0000AD',
      'blue-darkest': '#000085',
      transparent: 'transparent',
      black: 'black',
      white: 'white',
    })
  })

  test('gradients are not set if configured', () => {
    const o = options({
      baseColors: { pink: 'pink' },
      colorGradients: false,
    })
    expect(o.colors).toEqual({
      pink: 'pink',
      transparent: 'transparent',
      black: 'black',
      white: 'white',
    })
  })
})
