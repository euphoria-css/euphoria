![Euphoria](https://cl.ly/l4hy/Screen%20Shot%202017-06-17%20at%202.03.11%20PM.png)

> Euphoric CSS styling utility library for CSS-in-JS projects

**To view examples of how to use Euphoria, check out the [Examples site][docs]!**

## Quick Start

To try out Euphoria, just add the following to the `<head>` of your page and then see the [documentation][docs] for available styles:

```html
<link href="//unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" type="text/css" />
```

## Introduction

At its core, Euphoria is a set of minimal CSS styles that you can use to assemble user interfaces for the web. However, Euphoria is much more than that.

Euphoria leverages the power of JavaScript to generate a powerful set of CSS utility classes that can be used to assemble frontend UIs. This toolset is similar to tools like [Bootstrap][bootstrap] or [Tachyons][tachyons] in that they give you the building blocks you need to create a responsive, feature rich UI without having to write a line of CSS.

Euphoria is built using JavaScript which gives you the power to do nearly anything you want with the generated styles. By default, Euphoria outputs a sane default set of styles that work for quickly mocking up UIs. However, since most websites and applications need certain design elements that Euphoria doesn't ship with, we've made it easy to add and extend the set of styles that Euphoria outputs.

The most common properties of Euphoria that you will most likely change are our bundled selection of colors, fonts and font sizes. Most other styles (`.float-left`, `.display-block`, etc.) are generic enough that they don't need to be changed. We make it easy to override the defaults for:

* Border radius
* Breakpoints
* Colors
* Cursors
* Font families
* Font sizes
* Letter spacing
* Line heights
* Opacity
* Sizes (widths, heights)
* Spacing (paddings, margins)

You can override any of these settings easily either using our JavaScript API or command line build tool, [euphoria-cli][cli]. There is no need to write any CSS, use any pre or post-processing tools (LESS, Sass, PostCSS) in order to do this. See the [Usage][usage] section to learn more how to customize Euphoria.

In addition, for projects that leverage CSS-in-JS frameworks like [glamor][glamor], all the outputted styles are available to you and you can share common settings for font sizes, colors, etc between Euphoria and your CSS-in-JS tool of choice. The recommended approach would be to use [euphoria-cli][cli] in your build process and have your `euphoria.config.js` file import and global CSS for things like colors, fonts, etc that you need.

## Features

* **Atomic Styles**: Styles in Euphoria are designed to be assembled together to create the styles you desire. Each class is as simple as possible and 
* **Customizable rules**: We give you the freedom to customize nearly everything in Euphoria including colors, fonts, spacing sizes and a lot more. You can even add custom rules that extend built-in Euphoria rules.
* **Short and Verbose Styles**: We provide, out of the box, two sets of styles for different preferences. One style is what we call "short" which provide abbreviated class names so you don't need to write long style names (e.g. `.fl` instead of `.float-left`). For those that like more explicit and verbose styles, we provide a "verbose" version of Euphoria that has all the class names as clear as possible (e.g. `.overflow-visible`, `.text-center`, or `.background-color-primary`). Choose whatever style you want and if you don't want to output one of the styles, just configure Euphoria to omit the one you don't want (see [Options][options] below)
* **No pre/post-processors needed**: Doesn't rely on CSS pre/post-processors like LESS, Sass or PostCSS which frees you up to use the tools you like and none you don't.
* **Simplicity**: Styles are short, simple and isolated. Add or remove styles and things behave as you expect. There is no magic in this library.
* **Consistency**: We attempt to keep a common format for styles that are predictable and consistent. In certain situations for the "short" styles, we made exceptions to improve the usability of the library.


## Install

Use the CDN version:

```html
<link href="//unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" type="text/css" />
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

### CDN version

Just include the version of Euphoria you want in the `<head>` of your page:

```html
<!doctype html>
<html>
  <head>
    <title>My Site</title>
    <link href="//unpkg.com/euphoria@2.0.4/dist/euphoria.min.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  ...content here...
  </body>
</html>
```

Now you have access to the default set of Euphoria styles. If you want to customize these styles, please read on:

### Command line usage

**COMING SOON!**

After installing Euphoria, create a `euphoria.config.js` (or  `.euphoriarc` that contains JSON or YAML) file at the base of your project that exports a configuration `Object`:

```js
const colors = require('./colors')

module.exports = {
  output: 'dist/euphoria.css',
  colors: {
    red: 'red',
    green: '#00aa00',
    blue: 'rgb(0, 0, 220)',
    orange: colors.orange,
  },
}
```

And now you can run the following to generate your very own customized Euphoria bundle:

```bash
euphoria
```

Please see [euphoria-cli][cli] for complete documentation on the command line tool.

This will look up your `euphoria.config.js` file and use your custom configuration and (optional) `output` path and create a compressed CSS file that you can use in your project. Since this is just JavaScript, you can use this in any way you'd like based on how you setup your build process.

See the [Options][options] section below to see all available options.

### Usage with WebPack

**Coming soon...**

### JavaScript API

Coming soon, how to import Euphoria into your build process and generate CSS from our JavaScript API.

### Glamor

**Note: this approach is not ideal as the loading time of a page increases drastically, please import CSS instead**

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

### Disabling rules

**Coming soon...**

Disabling rules is useful if you already have a set of styles that serve your needs for a particular set of styles and you don't want the duplicate rules taking up bandwidth. Another use case is if you don't want the responsive styles that Euphoria provides.

How to disable:

* Responsiveness
* Each type of ruleset (floats, colors, fonts, etc)

```js
const euphoria = new Euphoria({
  disable: ['floats', 'text-colors', 'font-families'],
})

console.log(euphoria.toString())
```

This will output the Euphoria styles minus those for floats, colors or font-families.

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

Now, if you change the definitions for any of the inherited styles, the `.btn` class will automatically use the latest version. This way, you get all the flexibility of mixins but with the flexibility of JavaScript.

## TODO

Rules: 

- [ ] Box shadow
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
- [ ] Font families:
  - [ ] Have a set of common "web safe" fonts
  - [ ] Have a font stack for common Google Web Fonts (Open Sans, Roboto, etc)

Build:

- [ ] Add autoprefixer

Documentation:

- [ ] Auto generated documentation of customized code
  - How to handle custom rules?
- Custom style examples:
  - Links
  - Buttons
  - Form elements
    - Inputs
  - Card
  - Tables
- Examples
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

### Inspiration

Euphoria was inspired by a lot of awesome projects, including:

- [Bootstrap][bootstrap]
- [Tachyons][tachyons]
- [glamor][glamor]

Thank you to all those that have put in a lot of thought and energy around pushing CSS forward!


## License

MIT

[bootstrap]: https://getbootstrap.com/
[cli]: https://github.com/danawoodman.com/euphoria-cli
[docs]: http://danawoodman.com/euphoria/
[glamor]: https://github.com/threepointone/glamor
[options]: #options
[tachyons]: http://tachyons.io
[usage]: #usage