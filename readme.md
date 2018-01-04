![Euphoria Banner](https://cl.ly/oWlv/euphoria-banner.png)

> A euphoric CSS micro-framework.

## Quick Start

To try out Euphoria, just add the following to the `<head>` of your page:

```html
<link href="//unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" type="text/css" />
```

Now check the [documentation site][docs] for usage information.

## Documentation

Please see [euphoria-css.com][docs] for information on installation and usage!

Also, have a look at the [examples folder][examples] for a real-world example of using Euphoria.

## Contributing

**PRs welcome!**

Checkout the project and run:

```bash
# Using NVM, install proper node version.
nvm install
nvm use

# Install dependencies.
npm i

# Make sure things work.
npm test

# Run dev server:
npm start
```

Once you're happy with your changes, build (and commit) the compiled code:

```bash
npm run build
```

### Formatting

Please run Prettier (use `npm run format` if your editor isn't setup to use Prettier) on all code before submitting.

### Test

Please write tests for your code! Test files are next to the source files (with a `.test.js` extension) and we're using the [ava][ava] test library. Run tests with `npm test` or `npm run watch-test`

### Build

If you're updating code, make sure to run `npm run build-examples` and commit compiled changes before submitting a PR.

## TODO

### Rules:

* [ ] Animations (default and hover versions)
  * [ ] Fade
  * [ ] Show child
  * [ ] Hide child
  * [ ] Grow
  * [ ] Shake
  * [ ] Rotate
* Better Pseudo-selector support
  * [ ] Placeholder `::placeholder` text
  * [ ] Outline `:outline` styling
  * [ ] Focus `:focus` styling
  * [ ] Hover `:hover` styling
* [ ] Font families:
  * [ ] Have a set of common "web safe" fonts
  * [ ] Have a font stack for common Google Web Fonts (Open Sans, Roboto, etc)
* Someday:
  * [ ] Grid layout helpers

### Build:

* [ ] Add autoprefixer

## Changelog

### v2.6.2

* Migrate all code to using Lerna for package management
* Merge CLI codebase into project

### v2.5.0

* Major design work to docs site
* Support non-class rule creation
* Usage and overview docs pages
* Improve colors to be more consistent + more colors
* Remove `xl` breakpoint (for now)
* Remove usage of yarn
* Opacity hover styles
* Move readme content to docs site
* Add some basic tests
* Lots of other cleanup and optimizations

### v2.1.0

* Big doc site refactor
* Add font weights
* Add background sizes
* Box shadow styling
* Readme updates
* Code reorganization
* Update vertical align rule
* Add whitespace rules
* Add opacity rules
* Color tweaks

### v2.0.0

* [**BREAKING**] Complete code rewrite: Tons of new selectors, more consistent naming, short/verbose names, breakpoints, easier configuration, add custom style extensions and a lot more.

### v1.7.1

* Set Prettier version
* Add `.prettierrc` config file

### v1.7.0

* [**DEPRECATED**] Remove `.full-height` and `.full-width` and replaced with `.width-100p`, `.height-100p`, etc...
* Add width/height styling for all commonly divisible percentage widths

### v1.6.0

* Change API to return an array of strings instead of just a string so we can support more CSS-in-JS libraries and fix integration with Glamor.
* Remove autoprefixer dependency; consuming codebase should use autoprefixer as desired.

### v1.5.3

* Add `.position-absolute`, `.position-relative` and `.position-fixed` alignment helpers

### v1.5.2

* Add `.full-height` and `.full-width` alignment helpers

### v1.5.1

* Add `.flex-row-reverse` direction

### v1.5.0

* Use autoprefixer to add vendor prefixes as necessary.

### v1.4.4

* Finish adding examples to example site
* Fix `.text-bold`

### v1.4.3

* Further improve example site.

### v1.4.2

* Add examples site

### v1.4.1

* Add `muted` color to defaults

### v1.4.0

* Add text decoration and font styles

### v1.3.0

* **BREAKING**: Rename `type` to `text`
* Cleanup readme

### v1.2.0

* Make `font-size` helpers

### v1.1.1

* Make type helpers use `!important` flag.

### v1.1.0

* Add "text-transform" helpers.

### v1.0.3

* Set `!important` flag for color styles.

### v1.0.2

* Update readme.

### v1.0.1

* Update readme.

### v1.0.0

* Bump to v1 because npm wasn't allowing minor versions...?

### v0.2.0

* Move to CSS-in-JS implementation
* Add alignment, display, colors, spacing helpers

### v0.1.0

* Initial prototype

## Credits

Created by [Dana Woodman][dana]

### Inspiration

Euphoria was inspired by a lot of awesome projects, including:

* [Bootstrap][bootstrap]
* [Tachyons][tachyons]
* [glamor][glamor]

Thank you to all those that have put in a lot of thought and energy around pushing CSS forward!

## License

MIT

[ava]: https://github.com/avajs/ava
[bootstrap]: https://getbootstrap.com
[cosmicconfig]: https://github.com/davidtheclark/cosmiconfig
[cli]: https://github.com/euphoria-css/euphoria-cli
[dana]: http://danawoodman.com
[docs]: http://euphoria-css.com
[examples]: /packages/example
[glamor]: https://github.com/threepointone/glamor
[options]: #options
[tachyons]: http://tachyons.io
[usage]: #usage
