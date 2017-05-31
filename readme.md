# Euphoria 🏝

> A minimalize CSS toolkit for CSS-in-JS applications.

This library contains a collection of building blocks for assembling web UIs that are common across most applications. The helpers include:

- [All](#all) - return all Euphoria utils with optional mappings
- [Alignment](#alignment) - float, flexbox, text and vertical alignment helpers like `.float-left`, `.text-center`, `.align-middle`, etc..
- [Colors](#colors) - helpers like `.text-primary`, `.bg-info`, etc...
- [Display](#display) - display helpers like `.display-none`, `.display-block`,, `.display-flex`, etc...
- [Spacing](#spacing) - padding and margin helpers like `.mb-lg`, `.py-xxl`, `.ml-auto`, etc...

Euphoria provides common styling classes for creating user interfaces in CSS-in-JS projects. All Euphoria functions return a collection of CSS classes as a `String` that can be injected into a webpage, for example using [glamor](https://github.com/threepointone/glamor) (which all the following examples refer to). You can use Euphoria however you like of course.

Most of the code that makes up Euphoria is quite simple, have a look at the `euphoria` directory to learn more about how this all works.

## Install

With yarn:
```bash
yarn add euphoria
```

With npm:
```bash
npm i -S euphoria
```

## Usage

```js
import euphoria from 'euphoria'
import { css } from 'glamor'

// Include everything:
css.insert(euphoria.all())

// or just a certain utils:
css.insert(euphoria.alignment())
css.insert(euphoria.display())
// etc...
```

You can of course also just export the utils you want like:

```js
import { colors } from 'euphoria'
import { css } from 'glamor'

css.insert(colors())
```


## Utilities

### `all`

**Usage:** `euphoria.all([mappings])`

If you call `euphoria.all()` it will return all the below utilies together with default mappings.

You can pass in custom mappings also:

```js
euphoria.all({
  colors: {
    angry: 'red',
    happy: 'green',
  },
  spacing: {
    tiny: '0.2rem',
    huge: '4rem',
  }
})
```

These mapping will get passed directly to the helpers below based on the key (eg `colors`, `spacing`, etc)

### `alignment`

**Usage:** `euphoria.alignment()`

```css
/* Text alignment */
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.text-justify { text-align: justify !important; }
.text-left { text-align: left !important; }

/* Vertical alignment */
.align-baseline { vertical-align: baseline !important; }
.align-top { vertical-align: top !important; }
.align-middle { vertical-align: middle !important; }
.align-bottom { vertical-align: bottom !important; }
.align-text-top { vertical-align: text-top !important; }
.align-text-bottom { vertical-align: text-bottom !important; }

/* Floats */
.float-left { float: left !important; }
.float-right { float: right !important; }
.float-none { float: none !important; }

/* Flexbox direction */
.flex-row { flex-direction: row !important; }
.flex-column { flex-direction: column !important; }
.flex-column-reverse { flex-direction: column-reverse !important; }

/* Flexbox justification */
.justify-content-start { justify-content: flex-start !important; }
.justify-content-end { justify-content: flex-end !important; }
.justify-content-center { justify-content: center !important; }
.justify-content-between { justify-content: space-between !important; }
.justify-content-around { justify-content: space-around !important; }

/* Flexbox align items */
.align-items-start { align-items: flex-start !important; }
.align-items-end { align-items: flex-end !important; }
.align-items-center { align-items: center !important; }
.align-items-baseline { align-items: baseline !important; }
.align-items-stretch { align-items: stretch !important; }

/* Flexbox align self */
.align-self-start { align-self: flex-start !important; }
.align-self-end { align-self: flex-end !important; }
.align-self-center { align-self: center !important; }
.align-self-baseline { align-self: baseline !important; }
.align-self-stretch { align-self: stretch !important; }

/* Flexbox align content */
.align-content-start { align-content: flex-start !important; }
.align-content-end { align-content: flex-end !important; }
.align-content-center { align-content: center !important; }
.align-content-stretch { align-content: stretch !important; }
.align-content-between { align-content: space-between !important; }
.align-content-around { align-content: space-around !important; }

/* Flexbox wrapping */
.flex-wrap { flex-wrap: wrap !important; }
.flex-wrap-reverse { flex-wrap: wrap-reverse !important; }
.flex-nowrap { flex-wrap: nowrap !important; }

/* Flexbox ordering */
.flex-first { order: -1 !important; }
.flex-last { order: 1 !important; }
```

### `colors`

**Usage:** `euphoria.colors([colorsMapping])`

```js
import { css } from 'glamor'
import { spacing } from 'euphoria'

css.insert(euphoria.colors())
```

Will result in:

```css
/* Text colors */
.text-primary { color: lightseagreen; }
.text-success { color: forestgreen; }
.text-info { color: teal; }
.text-warning { color: orange; }
.text-danger { color: crimson; }

/* Background colors */
.bg-primary { background: lightseagreen; }
.bg-success { background: forestgreen; }
.bg-info { background: teal; }
.bg-warning { background: orange; }
.bg-danger { background: crimson; }
```

You can pass in your own color mappings like:

```js
euphoria.colors({
  angry: 'red',
  happy: 'green',
})
```

Which will return: 
```css
/* Text colors */
.text-angry { color: red; }
.text-happy { color: green; }

/* Background colors */
.bg-angry { background: red; }
.bg-happy { background: green; }
```

### `display`

**Usage:** `euphoria.display()`

```css
/* Display */
.display-block { display: block !important; }
.display-inline { display: inline !important; }
.display-inline-block { display: inline-block !important; }
.display-flex { display: flex !important; }
.display-inline-flex { display: inline-flex !important; }
.display-none { display: none !important; }

/* Visibility */
.visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
```

### `spacing`

**Usage:** `euphoria.spacing([spacingMapping])`

```js
import { css } from 'glamor'
import spacing from 'euphoria-spacing'

css.insert(
  spacing({
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  })
)
```

Now you will have the following classes available to you:

```css
/* Padding */
.p-none { padding: 0; }
.p-sm { padding: 0.5rem; }
.p-md { padding: 1rem; }
.p-lg { padding: 2rem; }

.pb-none { padding-bottom: 0; }
.pb-sm { padding-bottom: 0.5rem; }
.pb-md { padding-bottom: 1rem; }
.pb-lg { padding-bottom: 2rem; }

.pl-none { padding-left: 0; }
.pl-sm { padding-left: 0.5rem; }
.pl-md { padding-left: 1rem; }
.pl-lg { padding-left: 2rem; }

.pr-none { padding-right: 0; }
.pr-sm { padding-right: 0.5rem; }
.pr-md { padding-right: 1rem; }
.pr-lg { padding-right: 2rem; }

.pt-none { padding-top: 0; }
.pt-sm { padding-top: 0.5rem; }
.pt-md { padding-top: 1rem; }
.pt-lg { padding-top: 2rem; }

.px-none { padding-left: 0; padding-right: 0; }
.px-sm { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-md { padding-left: 1rem; padding-right: 1rem; }
.px-lg { padding-left: 2rem; padding-right: 2rem; }

.py-none { padding-top: 0; padding-bottom: 0; }
.py-sm { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-md { padding-top: 1rem; padding-bottom: 1rem; }
.py-lg { padding-top: 2rem; padding-bottom: 2rem; }

/* Margins */
.m-none { margin: 0; }
.m-sm { margin: 0.5rem; }
.m-md { margin: 1rem; }
.m-lg { margin: 2rem; }
.m-auto { margin: auto; }

.mb-none { margin-bottom: 0; }
.mb-sm { margin-bottom: 0.5rem; }
.mb-md { margin-bottom: 1rem; }
.mb-lg { margin-bottom: 2rem; }
.mb-auto { margin-bottom: auto; }

.ml-none { margin-left: 0; }
.ml-sm { margin-left: 0.5rem; }
.ml-md { margin-left: 1rem; }
.ml-lg { margin-left: 2rem; }
.ml-auto { margin-left: auto; }

.mr-none { margin-right: 0; }
.mr-sm { margin-right: 0.5rem; }
.mr-md { margin-right: 1rem; }
.mr-lg { margin-right: 2rem; }
.mr-auto { margin-right: auto; }

.mt-none { margin-top: 0; }
.mt-sm { margin-top: 0.5rem; }
.mt-md { margin-top: 1rem; }
.mt-lg { margin-top: 2rem; }
.mt-auto { margin-top: auto; }

.mx-none { margin-left: 0; margin-right: 0; }
.mx-sm { margin-left: 0.5rem; margin-right: 0.5rem; }
.mx-md { margin-left: 1rem; margin-right: 1rem; }
.mx-lg { margin-left: 2rem; margin-right: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

.my-none { margin-top: 0; margin-bottom: 0; }
.my-sm { margin-top: 0.5rem; margin-bottom: 0.5rem; }
.my-md { margin-top: 1rem; margin-bottom: 1rem; }
.my-lg { margin-top: 2rem; margin-bottom: 2rem; }
.my-auto { margin-top: auto; margin-bottom: auto; }
```

Calling `spacing` without arguments will get you the default spacing mapping, which is:

```js
{
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.75rem',
  xl: '3.25rem',
  xxl: '5rem',
}
```

We automatically inject `none` classes for padding and spacing (eg `.p-none { padding: 0 !important; }`) and `auto` classes for margins (eg `.m-auto { margin: auto !important; }`) since they are so commonly needed.


## Changelog

### v.1.0.2

- Update readme.

### v.1.0.1

- Update readme.

### v.1.0.0

- Bump to v1 because npm wasn't allowing minor versions...?

### v0.2.0

- Move to CSS-in-JS implementation
- Add alignment, display, colors, spacing helpers

### v0.1.0

- Initial prototype


## Contributing

PRs welcome!

- Please run `prettier --no-semi --single-quote --trailing-comma es5` on all code before submitting.
- Please write tests for your code! (coming soon 😅)

## Credits

[Dana Woodman](http://danawoodman.com)


## License

MIT
