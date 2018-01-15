import { addProperty, addSuffix, create } from './rule-helpers'

// describe('.create', () => {
//   test('Should create a simple rule', () => {
//     const actual = create('.foo', { padding: '1em' })
//     const expected = { '.foo': { padding: '1em' } }
//     expect(actual).toEqual(expected)
//   })
// })

// describe('.addProperty', () => {
//   test('Should add additional property to rule', () => {
//     const rule = create('.foo', { padding: '1em' })
//     const actual = addProperty(rule, { display: 'none' })
//     const expected = { '.foo': { padding: '1em', display: 'none' } }
//     expect(actual).toEqual(expected)
//   })
// })

describe('.addSuffix', () => {
  test('Should add a suffix to a class name', () => {
    const actual = addSuffix('.foo', 'mobile')
    const expected = '.foo-mobile'
    expect(actual).toEqual(expected)
  })

  test('Should add a suffix to a pseudo-selector name', () => {
    const actual = addSuffix('.foo:hover:after', 'mobile')
    const expected = '.foo-mobile:hover:after'
    expect(actual).toEqual(expected)
  })
})
