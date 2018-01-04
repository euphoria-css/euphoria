import test from 'ava'
import Rule from './rule'
import RuleSet from './rule-set'

// true, truthy, false, falsy, is, not, deepEqual, throws

const r1 = new Rule({
  selector: '.foo',
  properties: { color: 'pink' },
})
const rs1 = new RuleSet({
  name: 'My (custom) RuleSet',
  rules: [r1],
})

test('should expose type', t => t.is(rs1.type, 'RuleSet'))
test('should generate a unique key for the ruleset', t =>
  t.is(rs1.key, 'my-custom-rule-set'))
test('should export CSS', t => t.is(rs1.css, '.foo { color: pink; }'))
test('should expose the name', t => t.is(rs1.name, 'My (custom) RuleSet'))

test.todo('should export responsive CSS if breakpoints are provided')

const r2 = new Rule({
  selector: '.foo',
  properties: { color: 'pink' },
  breakpoint: 'lg-up',
  media: 'min-width: 900px',
})
const rs2 = new RuleSet({
  name: 'My (custom) RuleSet',
  rules: [r2],
})
test('should export CSS', t =>
  t.is(
    rs2.css,
    '@media only screen and (min-width: 900px) { .foo-lg-up { color: pink; } }'
  ))
