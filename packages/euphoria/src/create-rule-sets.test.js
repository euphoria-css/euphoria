import { map } from 'lodash'
import createRuleSets from './create-rule-sets'
import templates from './rule-templates'
import Rule from './rule'
import RuleSet from './rule-set'

describe('createRuleSets', () => {
  test('creates a ruleset', () => {
    const templates = {
      'border-styles': {
        name: 'Border styles',
        rules: opts =>
          map(opts.borderStyles, (val, key) => ({
            selector: `.b-${val}`,
            properties: { 'border-style': val },
          })),
      },
    }
    const options = {
      borderStyles: ['solid', 'dotted', 'dashed'],
    }
    expect(createRuleSets(templates, options)).toEqual({
      'border-styles': new RuleSet({
        key: 'border-styles',
        name: 'Border styles',
        rules: [
          new Rule({
            properties: { 'border-style': 'solid' },
            selector: '.b-solid',
          }),
          new Rule({
            properties: { 'border-style': 'dotted' },
            selector: '.b-dotted',
          }),
          new Rule({
            properties: { 'border-style': 'dashed' },
            selector: '.b-dashed',
          }),
        ],
      }),
    })
  })

  test('create rules with rules method', () => {
    const template = {
      margins: {
        name: 'Margins',
        rules(opts) {
          return [
            {
              selector: `.p-sm`,
              properties: { padding: '10px' },
            },
          ]
        },
      },
    }
    expect(createRuleSets(template, {})).toEqual({
      margins: new RuleSet({
        key: 'margins',
        name: 'Margins',
        rules: [
          new Rule({ properties: { padding: '10px' }, selector: '.p-sm' }),
        ],
      }),
    })
  })

  test('can handle key/value rules', () => {
    const template = {
      'text-transforms': {
        name: 'Text transforms',
        rules: opts =>
          map(opts.textTransforms, (val, key) => ({
            selector: `.${key}`,
            properties: { 'text-transform': val },
          })),
      },
    }
    const options = {
      textTransforms: {
        upper: 'uppercase',
        lower: 'lowercase',
        capital: 'capitalize',
      },
    }
    expect(createRuleSets(template, options)).toEqual({
      'text-transforms': new RuleSet({
        key: 'text-transforms',
        name: 'Text transforms',
        rules: [
          new Rule({
            properties: { 'text-transform': 'uppercase' },
            selector: '.upper',
          }),
          new Rule({
            properties: { 'text-transform': 'lowercase' },
            selector: '.lower',
          }),
          new Rule({
            properties: { 'text-transform': 'capitalize' },
            selector: '.capital',
          }),
        ],
      }),
    })
  })

  test('creates responsive rules', () => {
    const templates = {
      foo: {
        name: 'Foo',
        rules: opts =>
          map(opts.foo, (val, key) => ({
            selector: `.foo-${key}`,
            properties: { padding: val },
          })),
      },
    }
    const options = {
      breakpoints: {
        mobile: 'max-width: 400px',
      },
      foo: {
        sm: '1em',
      },
      responsive: ['foo'],
    }
    expect(createRuleSets(templates, options)).toEqual({
      foo: new RuleSet({
        key: 'foo',
        name: 'Foo',
        rules: [
          new Rule({ properties: { padding: '1em' }, selector: '.foo-sm' }),
        ],
      }),
      'foo-responsive': new RuleSet({
        key: 'foo-responsive',
        name: 'Foo (responsive)',
        rules: [
          new Rule({
            selector: '.foo-sm-mobile',
            properties: { padding: '1em' },
            breakpoint: 'mobile',
          }),
        ],
        responsive: true,
      }),
    })
  })

  describe('disable rules', () => {
    test('should omit disabled rulesets', () => {
      const template = {
        foo: {
          name: 'Foo',
          rules: () => [{ selector: '.foo', properties: { color: 'red' } }],
        },
        buttons: {
          name: 'Buttons',
          rules: () => [{ selector: '.btn', properties: { width: '10px' } }],
        },
      }
      const options = { disabledRules: ['foo'] }
      expect(createRuleSets(template, options)).toEqual({
        buttons: new RuleSet({
          key: 'buttons',
          name: 'Buttons',
          rules: [
            new Rule({
              properties: { width: '10px' },
              selector: '.btn',
            }),
          ],
        }),
      })
    })
  })

  describe('custom rules', () => {
    test('adds additional rules if passed in', () => {
      const templates = {}
      const options = {
        customRules: {
          buttons: {
            name: 'Buttons',
            rules: () => [{ selector: '.btn', properties: { width: '10px' } }],
          },
        },
      }
      expect(createRuleSets(templates, options)).toEqual({
        buttons: new RuleSet({
          key: 'buttons',
          name: 'Buttons',
          rules: [
            new Rule({
              properties: { width: '10px' },
              selector: '.btn',
            }),
          ],
        }),
      })
    })

    test('creates responsive rules', () => {
      const options = {
        customRules: {
          buttons: {
            name: 'Buttons',
            rules: () => [{ selector: '.btn', properties: { width: '10px' } }],
          },
        },
        responsive: ['buttons'],
        breakpoints: {
          mobile: 'max-width: 599px',
        },
      }
      const templates = {}
      expect(createRuleSets(templates, options)).toEqual({
        buttons: new RuleSet({
          key: 'buttons',
          name: 'Buttons',
          rules: [
            new Rule({
              properties: { width: '10px' },
              selector: '.btn',
            }),
          ],
        }),
        'buttons-responsive': new RuleSet({
          key: 'buttons-responsive',
          name: 'Buttons (responsive)',
          rules: [
            new Rule({
              properties: { width: '10px' },
              selector: '.btn-mobile',
              breakpoint: 'mobile',
            }),
          ],
          responsive: true,
        }),
      })
    })

    test('supports mixing in other styles', () => {
      const template = {
        foo: {
          name: 'Foo',
          rules: () => [{ selector: '.foo', properties: { display: 'block' } }],
        },
      }
      const options = {
        customRules: {
          buttons: {
            name: 'Buttons',
            rules: () => [
              {
                selector: '.btn',
                properties: { width: '10px' },
                inherits: ['.foo'],
              },
            ],
          },
        },
        breakpoints: { mobile: 'max-width: 499px' },
        responsive: ['buttons'],
      }
      expect(createRuleSets(template, options)).toEqual({
        foo: new RuleSet({
          key: 'foo',
          name: 'Foo',
          rules: [
            new Rule({
              properties: { display: 'block' },
              selector: '.foo',
            }),
          ],
        }),
        buttons: new RuleSet({
          key: 'buttons',
          name: 'Buttons',
          rules: [
            new Rule({
              properties: { width: '10px', display: 'block' },
              selector: '.btn',
            }),
          ],
        }),
        'buttons-responsive': new RuleSet({
          key: 'buttons-responsive',
          name: 'Buttons (responsive)',
          responsive: true,
          rules: [
            new Rule({
              breakpoint: 'mobile',
              properties: { width: '10px', display: 'block' },
              selector: '.btn-mobile',
            }),
          ],
        }),
      })
    })
  })
})
