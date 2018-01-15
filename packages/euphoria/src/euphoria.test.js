import ALL_CSS from '../test/fixtures/css'
import defaults from './default-options'
import euphoria, { DEFAULT_CONFIG, breakpoint } from './euphoria'

describe('configure', () => {
  test('returns default configuration object for debugging', () => {
    expect(euphoria().defaults).toBe(defaults)
  })

  test('returns customized options', () => {
    const styles = euphoria({ colorGradients: false })
    expect(styles.options.colorGradients).toBe(false)
  })
})

describe('.css()', () => {
  test('should match expected CSS', () => {
    const css = euphoria().css()
    // console.log(css)
    expect(css).toEqual(ALL_CSS)
  })
})
