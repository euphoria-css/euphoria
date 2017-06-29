import Highlight from './highlight'
import React from 'react'

export default function Alignment() {
  return (
    <div>

      <h2 id="alignment">Alignment</h2>

      <h4 id="alignment-usage">Usage</h4>
      <Highlight lang="js">{`import euphoria from 'euphoria'
import { css } from 'glamor'

css.insert(euphoria.alignment())
`}</Highlight>

      <h3 id="alignment-text">Text Alignment</h3>
      <ul>
        <li><code>.text-left</code></li>
        <li><code>.text-right</code></li>
        <li><code>.text-center</code></li>
        <li><code>.text-justify</code></li>
      </ul>
      <div className="bg-muted mb-md text-left">
        Div with the class <code>.text-left</code>.
      </div>
      <div className="bg-muted mb-md text-right">
        Div with the class <code>.text-right</code>.
      </div>
      <div className="bg-muted mb-md text-center">
        Div with the class <code>.text-center</code>.
      </div>
      <div className="bg-muted mb-md text-justify">
        Div with the class <code>.text-justify</code>. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed
        consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.
      </div>

      <h3 id="alignment-floats">Floats</h3>
      <ul>
        <li><code>.float-left</code></li>
        <li><code>.float-right</code></li>
        <li><code>.float-none</code></li>
      </ul>

      <h3 id="alignment-sizing">Sizing</h3>
      <ul>
        <li>
          <code>.full-height</code> - applies <code>height: 100%</code> to the
          element
        </li>
        <li>
          <code>.full-width</code> - applies <code>width: 100%</code> to the
          element
        </li>
      </ul>

      <h3 id="alignment-position">Position</h3>
      <ul>
        <li><code>.position-relative</code></li>
        <li><code>.position-absolute</code></li>
        <li><code>.position-fixed</code></li>
      </ul>

      <h3 id="alignment-vertical">Vertical Alignment</h3>
      <ul>
        <li><code>.align-baseline</code></li>
        <li><code>.align-top</code></li>
        <li><code>.align-middle</code></li>
        <li><code>.align-bottom</code></li>
        <li><code>.align-text-top</code></li>
        <li><code>.align-text-bottom</code></li>
      </ul>

      <h3 id="alignment-flexbox">Flexbox</h3>
      <p>
        See <a href="#display-flex">Display</a> section for
        {' '}
        <code>.display-flex</code> reference.
      </p>
      <h4 id="alignment-flexbox-direction">Direction</h4>
      <ul>
        <li><code>.flex-row</code></li>
        <li><code>.flex-row-reverse</code></li>
        <li><code>.flex-column</code></li>
        <li><code>.flex-column-reverse</code></li>
      </ul>
      <h4 id="alignment-flexbox-justify">Justify</h4>
      <ul>
        <li><code>.justify-content-start</code></li>
        <li><code>.justify-content-end</code></li>
        <li><code>.justify-content-center</code></li>
        <li><code>.justify-content-between</code></li>
        <li><code>.justify-content-around</code></li>
      </ul>
      <h4 id="alignment-flexbox-align">Align Items</h4>
      <ul>
        <li><code>.align-items-start</code></li>
        <li><code>.align-items-end</code></li>
        <li><code>.align-items-center</code></li>
        <li><code>.align-items-baseline</code></li>
        <li><code>.align-items-stretch</code></li>
      </ul>
      <h4 id="alignment-flexbox-align">Align Self</h4>
      <ul>
        <li><code>.align-self-start</code></li>
        <li><code>.align-self-end</code></li>
        <li><code>.align-self-center</code></li>
        <li><code>.align-self-baseline</code></li>
        <li><code>.align-self-stretch</code></li>
      </ul>
      <h4 id="alignment-flexbox-content">Align Content</h4>
      <ul>
        <li><code>.align-content-start</code></li>
        <li><code>.align-content-end</code></li>
        <li><code>.align-content-center</code></li>
        <li><code>.align-content-stretch</code></li>
        <li><code>.align-content-between</code></li>
        <li><code>.align-content-around</code></li>
      </ul>
      <h4 id="alignment-flexbox-wrapping">Wrapping</h4>
      <ul>
        <li><code>.flex-wrap</code></li>
        <li><code>.flex-wrap-reverse</code></li>
        <li><code>.flex-nowrap</code></li>
      </ul>
      <h4 id="alignment-flexbox-ordering">Ordering</h4>
      <ul>
        <li><code>.flex-first</code></li>
        <li><code>.flex-last</code></li>
      </ul>
    </div>
  )
}
