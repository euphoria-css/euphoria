import createAST from './create-ast'
import createCSS from './create-css'
import createRuleSets from './create-rule-sets'
import mergeOptions from './merge-options'
import templates from './rule-templates'

test('generates CSS from an AST', () => {
  const options = {}
  const templates = {
    foo: {
      name: 'Foo',
      rules: opts => [{ selector: '.foo', properties: { padding: '1em' } }],
    },
  }
  const rulesets = createRuleSets(templates, options)
  const ast = createAST(rulesets, options.breakpoints)
  const actual = createCSS(ast)
  const expected = `.foo { padding: 1em; }`
  expect(actual).toEqual(expected)
})

test('adds rulesets to responsive groups', () => {
  const options = {
    breakpoints: { mobile: 'max-width: 600px' },
    responsive: ['foo'],
  }
  const templates = {
    foo: {
      name: 'Foo',
      rules: opts => [{ selector: '.foo', properties: { padding: '1em' } }],
    },
  }
  const rulesets = createRuleSets(templates, options)
  const ast = createAST(rulesets, options.breakpoints)
  const actual = createCSS(ast)
  const expected = `.foo { padding: 1em; }
@media only screen and (max-width: 600px) {
  .foo-mobile { padding: 1em; }
}`
  expect(actual).toEqual(expected)
})
