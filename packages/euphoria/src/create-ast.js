import { each, isEmpty, pickBy } from 'lodash'

function createAST(rulesets, breakpoints = {}) {
  const ast = {}

  // Setup responsive rule grouping.
  const responsiveRules = {}
  if (breakpoints) {
    each(breakpoints, (val, key) => {
      responsiveRules[key] = {
        query: `@media only screen and (${val})`,
        rules: {},
      }
    })
  }

  each(rulesets, ruleset => {
    each(ruleset.rules, ({ breakpoint, properties, selector }) => {
      // Add responsive styles to specific breakpoint section
      if (breakpoint) {
        responsiveRules[breakpoint].rules[selector] = properties
      } else {
        ast[selector] = properties
      }
    })
  })

  // Add responsive rules to AST
  each(responsiveRules, (group, bp) => {
    ast[group.query] = group.rules
  })

  return pickBy(ast, v => !isEmpty(v))
}

export default createAST
