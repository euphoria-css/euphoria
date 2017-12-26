![Euphoria](https://cl.ly/l4hy/Screen%20Shot%202017-06-17%20at%202.03.11%20PM.png)

> Euphoric CSS styling utility library for CSS-in-JS projects

**To view examples of how to use Euphoria, check out the [Examples site][docs]!**


This library contains a collection of building blocks for assembling web UIs that are common across most applications.

Euphoria provides common styling classes for creating user interfaces in CSS-in-JS projects. Euphoria generates CSS that can be injected into a webpage, for example using [glamor][glamor] (which all the following examples refer to) or output to a file to be served by a web server. You can use Euphoria however you like of course.


## Features

- Customizable rules
  - Colors, Fonts, Spacing sizes
  - Add custom rule definitions
- Short and verbose names
  - eg `.fl` or `.float-left`, `.uppercase` or `.text-transform-uppercase`
  - Default both are available but you can configure to use one or the other
- All common formatting styles you need to design an application
- Create custom rules that extend the built-in styles (see `addRule()` method)
- Immutable, composable styles
- Programatic styles


## Install

Use the CDN version:

```html
<link href="unpkg.com/euphoria@2.0.0/euphoria.min.css" rel="stylesheet" type="text/css" />
```

With yarn:

```bash
yarn add euphoria
```

With npm:

```bash
npm i -S euphoria
```


## Usage

### Default version

Just include the version of Euphoria you want in the `<head>` of your page:

```html
<!doctype html>
<html>
  <head>
    <title>My Site</title>
    <link href="unpkg.com/euphoria@2.0.0/euphoria.min.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  ...content here...
  </body>
</html>
```

### Glamor

```js
import Euphoria from 'euphoria'
import { css } from 'glamor'

const options = { /* options, see below */ }

const euphoria = new Euphoria(options)

css.insert(euphoria.toString())
```

This will generate a `String` of CSS that can then be inserted into the web page (via `css.insert()` in glamor) or can be included in part of a build process.

## Options

Euphoria is fully configurable and all the settings for sizes, colors and more can be changed by passing in an options `Object`.

For example, if you wanted to customize the colors that Euphoria generates for text, background and border colors, then you can pass in your own `colors` list like so:

```js
import Euphoria from 'euphoria'
import { css } from 'glamor'

const options = {
  colors: {
    primary: 'teal',
    secondary: 'gray',
    info: 'blue',
    success: 'green',
    warning: 'orange',
    danger: 'red',
  },
}

const euphoria = new Euphoria(options)

css.insert(euphoria.toString())
```

Everything that makes sense to make configurable is configurable.

Please see [the documentation website][docs] for a full list of available options.

### Adding a custom rule

You can add your own custom rules to Euphoria by using the `addRule` method. This method allows you to create a new CSS selector with optional custom CSS and a list of styles to inherit from. Think of this as the equivalent of a LESS/SASS mixin.

Usage:

```ts

euphoria.addRule({
  short: string,
  verbose: string,
  properties: Object,
  inherits: Array<string>,
  hover: boolean,
  after: boolean,
  important: boolean,
  responsive: boolean,
})
```

* **`short`**: a required `String` representing a short-form CSS selector to add as a new rule to Euphoria (eg `.btn`, `.hdr`, etc.)
* **`verbose`**: an optional `String` representing a long-form CSS selector to add as a new rule to Euphoria (eg `.button`, `.page-header`, etc.). Default is `null`.
* **`properties`**: an optional `Object` with custom CSS rules to add to the new selector. Default is `{}`.
* **`inherits`**: an optional `Array` of Euphoria selectors that the new selector will inherit from. Default is `[]`.
* **`hover`**: an optional `Boolean` indicating this style should apply to the `:hover` state of the selector. Default is `false`.
* **`after`**: an optional `Boolean` indicating this rule should be applied `:after` the selector. Default is `false`.
* **`important`**: an optional `Boolean` indicating the rule should have the `!important` flag added to it. Default is `false`.
* **`responsive`**: an optional `Boolean` indicating that the rule should have responsive states added to it via the `breakpoints` setting. Default is `false`.

```js
import Euphoria from 'euphoria'

const euphoria = new Euphoria()

euphoria.addRule({
  short: 'btn',
  verbose: 'button',
  properties: { 'box-shadow': '1px 1px 1px rgba(0, 0, 0, 0.1)' },
  inherits: ['px-lg', 'py-md', 'bg-primary', 'hov-bg-info', 'br-pill'],
  // hover: false,
  // important: false,
  // after: false,
  // responsive: false,
})
```

Now Euphoria will add a `.btn`/`.button` class to its output that has a custom box shadow and inherits the list of Euphoria styles. This would generate CSS similar to the following (depending on your settings):

```css
.btn, .button {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background: #378ad3;
  border-radius: 100em;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
```

## TODO

- [ ] Auto generated documentation of customized code
  - How to handle custom rules?
- [ ] Box shadow
- [ ] Opacity (100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 2.5, 1)
- [ ] Animations (default and hover versions)
  - [ ] Fade
  - [ ] Show child
  - [ ] Hide child
  - [ ] Grow
  - [ ] Shake
  - [ ] Rotate
- [ ] Background size
- [ ] Grid layout helpers
- [ ] Font weights
- Custom style examples:
  - Links
  - Buttons
  - Form elements
    - Inputs
  - Card
  - Tables
- Examples
  - [ ] Add custom styles
  - [ ] Change defaults
  - [ ] Only use certain styles


## Changelog

### v2.0.0

- [**BREAKING**] Complete code rewrite: Tons of new selectors, more consistent naming, short/verbose names, breakpoints, easier configuration, add custom style extensions and a lot more.

### v1.7.1

- Set Prettier version
- Add `.prettierrc` config file

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

### v1.5.0

- Use autoprefixer to add vendor prefixes as necessary.

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

[docs]: http://danawoodman.com/euphoria/
[glamor]: https://github.com/threepointone/glamor