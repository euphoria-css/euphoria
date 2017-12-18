/**
 * Create a CSS rule given a name and a list of rules.
 * 
 * createRule('my-rule', ['display', 'block'], ['color', 'red'])
 */
module.exports = (name, ...rules) => {
  const all = rules.map(r => `${r[0]}: ${r[1]} !important;`).join(' ')
  return `.${name} { ${all} }`
}
