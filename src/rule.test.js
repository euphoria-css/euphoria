import test from 'ava'
import Rule from './rule'

// true, truthy, false, falsy, is, not, deepEqual, throws

//----------------------------------------------
// Basic tests
//----------------------------------------------

const r1Args = {
  selector: '.my-class:hover',
  properties: { 'text-align': 'left' },
}
const r1 = new Rule(r1Args)

test('should expose properties', t =>
  t.deepEqual(r1.properties, r1Args.properties))
test('should expose type property', t => t.is(r1.type, 'Rule'))
test('name property should match selector', t => t.is(r1.name, r1Args.selector))
test('should expose selector', t => t.is(r1.selector, r1.selector))
test('should expose className', t => t.is(r1.className, 'my-class'))
test('should return CSS with toString method', t =>
  t.is(r1.toString(), '.my-class:hover { text-align: left; }'))
test('css getter should produce same output as toString', t =>
  t.is(r1.toString(), r1.css))

//----------------------------------------------
// Responsive tests
//----------------------------------------------

const r2Args = {
  selector: '.responsive-class',
  properties: { color: 'red' },
  breakpoint: 'lg-up',
  media: 'min-width: 900px',
  important: true,
}
const r2 = new Rule(r2Args)

test('should create CSS wrapped by media query', t =>
  t.is(
    r2.css,
    '@media only screen and (min-width: 900px) { .responsive-class-lg-up { color: red !important; } }'
  ))
test('should expose breakpoint', t => t.is(r2.breakpoint, r2Args.breakpoint))
test('should expose media', t => t.is(r2.media, r2Args.media))
test('should expose important', t => t.true(r2.important))

//----------------------------------------------
// Non-class selectors
//----------------------------------------------

const r3Args = {
  selector: 'p',
  inherits: ['.lh-md'],
}
const r3 = new Rule(r3Args)

test('should handle non-class selectors', t =>
  t.is(r3.selector, r3Args.selector))

const r4Args = {
  selector: '#header',
  properties: { color: 'orange' },
}
const r4 = new Rule(r4Args)

test('should handle non-class selectors', t =>
  t.is(r4.selector, r4Args.selector))

test.todo('should handle multiple pseudo selectors')
