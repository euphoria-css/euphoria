import createAST from './create-ast'
import Rule from './rule'
import RuleSet from './rule-set'
import { addSuffix } from './rule-helpers'
import { each, flatten, isEmpty, map, reduce } from 'lodash'

function inheritProps(inherits, all) {
  if (isEmpty(inherits)) return {}
  return reduce(
    all,
    (props, rs) => {
      each(rs.rules, r => {
        if (inherits.includes(r.selector)) {
          props = { ...props, ...r.properties }
        }
      })
      return props
    },
    {}
  )
}

function createRuleSets(templates, options) {
  // Support passing in custom ruleset creators.
  templates = { ...templates, ...options.customRules }

  const rulesets = reduce(
    templates,
    (all, template, key) => {
      let { name, rules } = template
      const { breakpoints } = options
      const responsive = (options.responsive || []).includes(key)

      // Exit early if this rule is in the list of rules to disable.
      if (
        options.disabledRules &&
        options.disabledRules.length &&
        options.disabledRules.includes(key)
      ) {
        return all
      }

      // Generate a list of rules for the ruleset
      const rls = map(
        rules(options),
        ({ inherits, selector, properties }) =>
          new Rule({
            selector,
            properties: { ...properties, ...inheritProps(inherits, all) },
          })
      )

      all[key] = new RuleSet({ key, name, rules: rls })

      // Add responsive styles, if set.
      if (responsive) {
        key = `${key}-responsive`
        name = `${name} (responsive)`
        all[key] = new RuleSet({
          key,
          name,
          rules: flatten(
            map(breakpoints, (_, bp) =>
              map(
                rls,
                rule =>
                  new Rule({
                    selector: addSuffix(rule.selector, bp),
                    properties: rule.properties,
                    breakpoint: bp,
                  })
              )
            )
          ),
          responsive: true,
        })
      }

      return all
    },
    {}
  )

  return rulesets
}

export default createRuleSets
