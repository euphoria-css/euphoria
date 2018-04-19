### v3.1.0

* Add `.outline-none`
* Add `.v-mid`, `.v-sub` and `.v-sup`

### v3.0.1

Complete re-write using PostCSS to simplify rules and make extensible in CSS projects.

Moving over to using CSS variables to make the library more future proof.

### v2.7.0

* Rewrote rule engine to be simpler and more flexible. Now you can just provide a "Rule Template" which creates a ruleset containing a list of rules. Each RuleSet gets the full configuration object and can do whatever it wants as long as it returns an array of rules.
* Responsiveness is improved: Any rule can be made responsive by just passing in an array of styles that you wish to make responsive.
* Disabling rules: Now just pass in an array of ruleset "Keys" to disable the given ruleset.
* Simpler CLI implementation.
* Add example project.
* Lots of other cleanup and improvements and tests.

### v2.6.3

* Various post-release cleanup

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
