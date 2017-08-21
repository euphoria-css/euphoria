import Highlight from './highlight'
import React from 'react'

export default function Display() {
  return (
    <div>
      <h2 id="display">Display</h2>

      <h4 id="display-usage">Usage</h4>
      <Highlight lang="js">{`import euphoria from 'euphoria'
import { css } from 'glamor'

euphoria.display().map(rule => css.insert(rule))`}</Highlight>

      <h4 id="display-display">Display</h4>
      <ul>
        <li>
          <code>.display-block</code>
        </li>
        <li>
          <code>.display-inline</code>
        </li>
        <li>
          <code>.display-inline-block</code>
        </li>
        <li>
          <code>.display-flex</code>
        </li>
        <li>
          <code>.display-inline-flex</code>
        </li>
        <li>
          <code>.display-none</code>
        </li>
      </ul>

      <h4 id="display-visibility">Visibility</h4>
      <ul>
        <li>
          <code>.visible</code>
        </li>
        <li>
          <code>.invisible</code>
        </li>
      </ul>
    </div>
  )
}
