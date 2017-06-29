import Alignment from './alignment'
import Colors from './colors'
import Display from './display'
import euphoria from '../euphoria'
import React from 'react'
import ReactDOM from 'react-dom'
import Spacing from './spacing'
import Text from './text'
import { css } from 'glamor'
import { colors, spacing } from './config'

// Include everything:
css.insert(
  euphoria.all({
    colors,
    spacing,
  })
)

// Example specific styles
css.insert(`
body {
  font-family: Lato, sans-serif;
  margin: 0;
  padding: 0;
}
a {
  color: ${colors.primary};
  text-decoration: none;
}
h1, h2, h3, h4 {
  margin: 1.8em 0 0.8em 0;
}
h1, h2, h3 {
  font-family: Mogra, serif;
}
h1 {
  color: ${colors.warning};
  font-size: 3.75rem;
}
h2 {
  color: ${colors.primary};
  border-top: 1px solid #f5f5f5;
  font-size: 2.85rem;
  padding-top: 1.8em;
}
h3 {
  font-size: 2.25rem;
}
h4 {
  font-size: 1.3rem;
}
h4 {
  font-weight: bold;
}
code {
  color: #c62da8;
}
pre {
  padding: ${spacing.lg} !important;
}
pre code {
  color: #333;
}
`)

function TOC() {
  return (
    <ul>
      <li>
        <a href="#alignment"><strong>Alignment</strong></a>
        <ul>
          <li><a href="#alignment-usage">Usage</a></li>
          <li><a href="#alignment-text">Text</a></li>
          <li><a href="#alignment-floats">Floats</a></li>
          <li><a href="#alignment-sizing">Sizing</a></li>
          <li><a href="#alignment-position">Position</a></li>
          <li><a href="#alignment-vertical">Vertical Alignment</a></li>
          <li><a href="#alignment-flexbox">Flexbox</a></li>
        </ul>
      </li>
      <li>
        <a href="#colors"><strong>Colors</strong></a>
        <ul>
          <li><a href="#colors-usage">Usage</a></li>
          <li><a href="#colors-text">Text</a></li>
          <li><a href="#colors-background">Background</a></li>
        </ul>
      </li>
      <li>
        <a href="#display"><strong>Display</strong></a>
        <ul>
          <li><a href="#display-usage">Usage</a></li>
          <li><a href="#display-display">Display</a></li>
          <li><a href="#display-visibility">Visiblity</a></li>
        </ul>
      </li>
      <li>
        <a href="#spacing"><strong>Spacing</strong></a>
        <ul>
          <li>
            <a href="#spacing-usage">Usage</a>
          </li>
          <li>
            <a href="#padding"><strong>Padding</strong></a>
            <ul>
              <li><a href="#padding-remove">Remove Padding</a></li>
              <li><a href="#padding-sizes">Sizes</a></li>
              <li><a href="#padding-directions">Directions</a></li>
            </ul>
          </li>
          <li>
            <a href="#margins"><strong>Margins</strong></a>
            <ul>
              <li><a href="#margins-remove">Remove Padding</a></li>
              <li><a href="#margins-sizes">Sizes</a></li>
              <li><a href="#margins-directions">Directions</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="#text"><strong>Text</strong></a>
        <ul>
          <li><a href="#text-usage">Usage</a></li>
          <li><a href="#text-sizes">Sizes</a></li>
          <li><a href="#text-transforms">Transforms</a></li>
          <li><a href="#text-decoration">Decoration</a></li>
          <li><a href="#text-styles">Styles</a></li>
        </ul>
      </li>
    </ul>
  )
}

function Examples() {
  const container = css({
    width: '50rem',
  })

  return (
    <div {...container} className="mx-auto my-lg">
      <h1>Euphoria 🏝</h1>
      <p>
        Examples of how to use Euphoria styles in your CSS-in-JS project. Please
        see
        {' '}
        <a href="https://github.com/danawoodman/euphoria">Euphoria on Github</a>
        {' '}
        for more information on usage.
      </p>
      <h2>Examples</h2>
      <TOC />
      <Alignment />
      <Colors />
      <Display />
      <Spacing />
      <Text />
    </div>
  )
}

const root = document.querySelector('.root')
ReactDOM.render(<Examples />, root)
