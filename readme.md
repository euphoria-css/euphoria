![Euphoria](https://cl.ly/l4hy/Screen%20Shot%202017-06-17%20at%202.03.11%20PM.png)

> Euphoric CSS styling utility library for CSS-in-JS projects

**To view examples of how to use Euphoria, check out the [Examples site](http://danawoodman.com/euphoria/)!**

This library contains a collection of building blocks for assembling web UIs that are common across most applications. The helpers include:

- [**All**](#all) - return all Euphoria utils with optional mappings
- [**Alignment**](#alignment)
  - *Float*: `.float-left`, `.float-right`, `.float-none`
  - *Alignment*: `.align-top`, `.align-middle`, `.align-basline`, etc...
  - *Text*: `.text-right`, `.text-center`, `.text-justify`, etc...
  - *Sizes*: `.full-width` and `.full-height`
  - *Position*: `.position-absolute`, `.position-relative`, `.position-fixed`
  - *Flexbox*: `.flex-row`, `.align-items-center`, `.justify-content-start`, etc...
- [**Colors**](#colors)
  - *Text colors*: `.text-primary`, `.text-white`, `.text-gray-dark`, etc...
  - *Background*: `.bg-info`, `.bg-danger`, `.bg-gray-lightest`, etc...
- [**Display**](#display)
  - *Display*: `.display-none`, `.display-block`, `.display-flex`, etc...
  - *Visibility*: `.visible`, `.invisible`
- [**Spacing**](#spacing)
  - *Padding*: `.p-xl`, `.px-none`, `.pl-xxs`, etc...
  - *Margins*: `.m-md`, `.mx-auto`, `.my-none`, etc...
- [**Text**](#text)
  - *Transforms*: `.text-uppercase`, `.text-lowercase`, `.text-capitalize`
  - *Sizes*: `.text-xxs`, `.text-xs`, `.text-sm`, `.text-md`, etc...
  - *Style*: `.text-bold`, `.text-italic`, `.text-normal`
  - *Decoration*: `.text-underline`, `.text-line-through`

Euphoria provides common styling classes for creating user interfaces in CSS-in-JS projects. All Euphoria functions return a collection of CSS classes as an `Array` of `String`s that can be injected into a webpage, for example using [glamor](https://github.com/threepointone/glamor) (which all the following examples refer to). You can use Euphoria however you like of course.

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
euphoria.all().map(rule => css.insert(rule))

// or just a certain utils:
euphoria.alignment().map(rule => css.insert(rule))
euphoria.display().map(rule => css.insert(rule))
// etc...
```

You can of course also just import the utils you want like:

```js
import { colors } from 'euphoria'
import { css } from 'glamor'

colors().map(rule => css.insert(rule))
```


## Utilities

### `all`

**Usage:** `euphoria.all([mappings])`

If you call `euphoria.all()` it will return all the below utilities together with default mappings:

```js
import { css } from 'glamor'
import { all } from 'euphoria'

all().map(rule => css.insert(rule))
```

You can pass in **custom mappings** also:

```js
import { css } from 'glamor'
import { all } from 'euphoria'


all({
  colors: {
    angry: 'red',
    happy: 'green',
  },
  spacing: {
    tiny: '0.2rem',
    huge: '4rem',
  },
  text: {
    tiny: '0.6rem',
    huge: '3rem',
  },
}).map(rule => css.insert(rule))

```

These mapping will get passed directly to the helpers below based on the key (eg `colors`, `spacing`, etc)

### `alignment`

**Usage:** `euphoria.alignment()`

```js
import { css } from 'glamor'
import { alignment } from 'euphoria'

alignment().map(rule => css.insert(rule))
```

Will result in:

```css
/* Text alignment */
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.text-justify { text-align: justify !important; }

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

/* Position */
.position-relative { position: relative !important; }
.position-absolute { position: absolute !important; }
.position-fixed { position: fixed !important; }

/* Sizing */
.height-10p { height: 10% !important; }
.width-10p { width: 10% !important; }
.height-20p { height: 20% !important; }
.width-20p { width: 20% !important; }
.height-25p { height: 25% !important; }
.width-25p { width: 25% !important; }
.height-30p { height: 30% !important; }
.width-30p { width: 30% !important; }
.height-33p { height: 33.3% !important; }
.width-33p { width: 33.3% !important; }
.height-40p { height: 40% !important; }
.width-40p { width: 40% !important; }
.height-50p { height: 50% !important; }
.width-50p { width: 50% !important; }
.height-60p { height: 60% !important; }
.width-60p { width: 60% !important; }
.height-66p { height: 66.6% !important; }
.width-66p { width: 66.6% !important; }
.height-70p { height: 70% !important; }
.width-70p { width: 70% !important; }
.height-75p { height: 75% !important; }
.width-75p { width: 75% !important; }
.height-80p { height: 80% !important; }
.width-80p { width: 80% !important; }
.height-90p { height: 90% !important; }
.width-90p { width: 90% !important; }
.height-100p { height: 100% !important; }
.width-100p { width: 100% !important; }

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
import { colors } from 'euphoria'

colors().map(rule => css.insert(rule))
```

Will result in:

```css
/* Text colors */
.text-primary { color: lightseagreen !important; }
.text-success { color: forestgreen !important; }
.text-muted { color: gray !important; }
.text-info { color: teal !important; }
.text-warning { color: orange !important; }
.text-danger { color: crimson !important; }

/* Background colors */
.bg-primary { background: lightseagreen !important; }
.bg-success { background: forestgreen !important; }
.bg-info { background: teal !important; }
.bg-muted { background: gray !important; }
.bg-warning { background: orange !important; }
.bg-danger { background: crimson !important; }
.bg-muted { background: gray !important; }
```

You can pass in your own color mappings like:

```js
colors({
  angry: 'red',
  happy: 'green',
}).map(rule => css.insert(rule))
```

Which will return: 
```css
/* Text colors */
.text-angry { color: red !important; }
.text-happy { color: green !important; }

/* Background colors */
.bg-angry { background: red !important; }
.bg-happy { background: green !important; }

```


### `display`

**Usage:** `euphoria.display()`

```js
import { css } from 'glamor'
import { display } from 'euphoria'

display().map(rule => css.insert(rule))
```

Results in:

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
import { spacing } from 'euphoria'

spacing({
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
}).map(rule => css.insert(rule))
```

Now you will have the following classes available to you:

```css
/* Padding */
.p-none { padding: 0 !important; }
.p-sm { padding: 0.5rem !important; }
.p-md { padding: 1rem !important; }
.p-lg { padding: 2rem !important; }

.pb-none { padding-bottom: 0 !important; }
.pb-sm { padding-bottom: 0.5rem !important; }
.pb-md { padding-bottom: 1rem !important; }
.pb-lg { padding-bottom: 2rem !important; }

.pl-none { padding-left: 0 !important; }
.pl-sm { padding-left: 0.5rem !important; }
.pl-md { padding-left: 1rem !important; }
.pl-lg { padding-left: 2rem !important; }

.pr-none { padding-right: 0 !important; }
.pr-sm { padding-right: 0.5rem !important; }
.pr-md { padding-right: 1rem !important; }
.pr-lg { padding-right: 2rem !important; }

.pt-none { padding-top: 0 !important; }
.pt-sm { padding-top: 0.5rem !important; }
.pt-md { padding-top: 1rem !important; }
.pt-lg { padding-top: 2rem !important; }

.px-none { padding-left: 0 !important; padding-right: 0 !important; }
.px-sm { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
.px-md { padding-left: 1rem !important; padding-right: 1rem !important; }
.px-lg { padding-left: 2rem !important; padding-right: 2rem !important; }

.py-none { padding-top: 0 !important; padding-bottom: 0 !important; }
.py-sm { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
.py-md { padding-top: 1rem !important; padding-bottom: 1rem !important; }
.py-lg { padding-top: 2rem !important; padding-bottom: 2rem !important; }

/* Margins */
.m-none { margin: 0 !important; }
.m-sm { margin: 0.5rem !important; }
.m-md { margin: 1rem !important; }
.m-lg { margin: 2rem !important; }
.m-auto { margin: auto !important; }

.mb-none { margin-bottom: 0 !important; }
.mb-sm { margin-bottom: 0.5rem !important; }
.mb-md { margin-bottom: 1rem !important; }
.mb-lg { margin-bottom: 2rem !important; }
.mb-auto { margin-bottom: auto !important; }

.ml-none { margin-left: 0 !important; }
.ml-sm { margin-left: 0.5rem !important; }
.ml-md { margin-left: 1rem !important; }
.ml-lg { margin-left: 2rem !important; }
.ml-auto { margin-left: auto !important; }

.mr-none { margin-right: 0 !important; }
.mr-sm { margin-right: 0.5rem !important; }
.mr-md { margin-right: 1rem !important; }
.mr-lg { margin-right: 2rem !important; }
.mr-auto { margin-right: auto !important; }

.mt-none { margin-top: 0 !important; }
.mt-sm { margin-top: 0.5rem !important; }
.mt-md { margin-top: 1rem !important; }
.mt-lg { margin-top: 2rem !important; }
.mt-auto { margin-top: auto !important; }

.mx-none { margin-left: 0 !important; margin-right: 0 !important; }
.mx-sm { margin-left: 0.5rem !important; margin-right: 0.5rem !important; }
.mx-md { margin-left: 1rem !important; margin-right: 1rem !important; }
.mx-lg { margin-left: 2rem !important; margin-right: 2rem !important; }
.mx-auto { margin-left: auto !important; margin-right: auto !important; }

.my-none { margin-top: 0 !important; margin-bottom: 0 !important; }
.my-sm { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
.my-md { margin-top: 1rem !important; margin-bottom: 1rem !important; }
.my-lg { margin-top: 2rem !important; margin-bottom: 2rem !important; }
.my-auto { margin-top: auto !important; margin-bottom: auto !important; }
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


### `text`

**Usage:** `euphoria.text()`

```js
import { css } from 'glamor'
import { text } from 'euphoria'

text().map(rule => css.insert(rule))
```

Will result in:

```css
/* Font sizes */
.text-xxs { font-size: 0.7rem !important; }
.text-xs { font-size: 0.8rem !important; }
.text-sm { font-size: 0.9rem !important; }
.text-md { font-size: 1rem !important; }
.text-lg { font-size: 1.25rem !important; }
.text-xl { font-size: 1.5rem !important; }
.text-xxl { font-size: 2rem !important; }
.text-xxxl { font-size: 3rem !important; }

/* Text transforms */
.text-uppercase { text-transform: uppercase !important; }
.text-lowercase { text-transform: lowercase !important; }
.text-capitalize { text-transform: capitalize !important; }

/* Text decoration */
.text-line-through { text-decoration: line-through !important; }
.text-underline { text-decoration: underline !important; }

/* Font style */
.text-normal { font-style: normal !important; }
.text-bold { font-style: bold !important; }
.text-italic { font-style: italic !important; }
```

To override default font styles, pass in a configuration object:

```js
import { css } from 'glamor'
import { text } from 'euphoria'

text({
  tiny: '0.3rem',
  huge: '3rem',
}).map(rule => css.insert(rule))
```

Will result in:

```css
/* Font sizes */
.text-tiny { font-size: 0.3rem !important; }
.text-huge { font-size: 3rem !important; }

/* Text transforms */
/* ...same as above... */

/* Text decoration */
/* ...same as above... */

/* Font style */
/* ...same as above... */
```


## Changelog

### v1.7.0

- [**DEPRECATED**] Remove `.full-height` and `.full-width` and replaced with `.width-100p`, `.height-100p`, etc...
- Add width/height styling for all commonly divisible percentage widths

### v1.6.0

- Change API to return an array of strings instead of just a string so we can support more CSS-in-JS libraries and fix integration with Glamor. 
- Remove autoprefixer dependency; consuming codebase should use autoprefixer as desired.

### v1.5.3

- Add `.position-absolute`, `.position-relative` and `.position-fixed` alignment helpers

### v1.5.2

- Add `.full-height` and `.full-width` alignment helpers

### v1.5.1

- Add `.flex-row-reverse` direction

### v1.5.0 - Use autoprefixer to add vendor prefixes as necessary.

### v1.4.4

- Finish adding examples to example site
- Fix `.text-bold`

### v1.4.3

- Further improve example site.

### v1.4.2

- Add examples site

### v1.4.1

- Add `muted` color to defaults

### v1.4.0

- Add text decoration and font styles

### v1.3.0

- **BREAKING**: Rename `type` to `text`
- Cleanup readme

### v1.2.0

- Make `font-size` helpers

### v1.1.1

- Make type helpers use `!important` flag.

### v1.1.0

- Add "text-transform" helpers.

### v1.0.3

- Set `!important` flag for color styles.

### v1.0.2

- Update readme.

### v1.0.1

- Update readme.

### v1.0.0

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
- If you're updating examples, make sure to run `npm run build-examples` and commit compiled changes before submitting a PR.

## Credits

[Dana Woodman](http://danawoodman.com)


## License

MIT
