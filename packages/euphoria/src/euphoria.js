import createAST from './create-ast'
import createCSS from './create-css'
import createRuleSets from './create-rule-sets'
import defaults from './default-options'
import mergeOptions from './merge-options'
import templates from './rule-templates'

function euphoria(customOpts = {}) {
  const options = mergeOptions(customOpts)

  const rulesets = () => createRuleSets(templates, options)
  const ast = () => createAST(rulesets(), options.breakpoints)
  const css = () => createCSS(ast())

  return { ast, css, defaults, options, rulesets }
}

export default euphoria
