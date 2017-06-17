import Colors from './colors'
import euphoria from '../euphoria'
import React from 'react'
import ReactDOM from 'react-dom'
import Spacing from './spacing'
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
h1, h2 {
  font-family: Mogra, serif;
}
h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.35rem;
}
h3 {
  font-weight: bold;
}
`)

function TOC() {
  return (
    <ul>
      <li>
        <a href="#colors"><strong>Colors</strong></a>
        <ul>
          <li><a href="#olors-text">Text Colors</a></li>
          <li><a href="#olors-background">Background Colors</a></li>
        </ul>
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
          <li><a href="#padding-remove">Remove Padding</a></li>
          <li><a href="#padding-sizes">Sizes</a></li>
          <li><a href="#padding-directions">Directions</a></li>
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
      <h1 className="text-primary">Euphoria 🏝</h1>
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
      <Colors />
      <Spacing />
    </div>
  )
}

const root = document.querySelector('.root')
ReactDOM.render(<Examples />, root)
