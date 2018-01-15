import createAST from './create-ast'
import createRuleSets from './create-rule-sets'
import mergeOptions from './merge-options'
import options from './default-options'
import templates from './rule-templates'
import { map } from 'lodash'

test('creates AST from ruleset', () => {
  const options = {}
  const templates = {
    foo: {
      name: 'Foo',
      rules: opts => [{ selector: '.foo', properties: { padding: '1em' } }],
    },
  }
  const rulesets = createRuleSets(templates, options)
  const actual = createAST(rulesets, options.breakpoints)
  const expected = { '.foo': { padding: '1em' } }
  expect(actual).toEqual(expected)
})

test('adds rulesets to responsive groups', () => {
  const options = {
    breakpoints: { mobile: 'max-width: 600px' },
    responsive: ['foo'],
  }
  const template = {
    foo: {
      name: 'Foo',
      rules: opts => [{ selector: '.foo', properties: { padding: '1em' } }],
    },
  }
  const rulesets = createRuleSets(template, options)
  const actual = createAST(rulesets, options.breakpoints)
  const expected = {
    '.foo': { padding: '1em' },
    '@media only screen and (max-width: 600px)': {
      '.foo-mobile': { padding: '1em' },
    },
  }
  expect(actual).toEqual(expected)
})
