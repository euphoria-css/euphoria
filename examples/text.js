import Highlight from './highlight'
import React from 'react'
import stringify from './stringify'
import { fontSizes } from './config'

export default function Text() {
  return (
    <div>
      <h2 id="text">Text</h2>

      <h4 id="text-usage">Usage</h4>
      <Highlight lang="js">{`import euphoria from 'euphoria'
import { css } from 'glamor'

euphoria.text(${stringify(
        fontSizes
      )}).map(rule => css.insert(rule))`}</Highlight>

      <h4 id="text-sizes">Sizes</h4>
      <p className="my-sm text-xxs">
        Text with the class <code>.text-xxs</code>
      </p>
      <p className="my-sm text-xs">
        Text with the class <code>.text-xs</code>
      </p>
      <p className="my-sm text-sm">
        Text with the class <code>.text-sm</code>
      </p>
      <p className="my-sm text-md">
        Text with the class <code>.text-md</code>
      </p>
      <p className="my-sm text-lg">
        Text with the class <code>.text-lg</code>
      </p>
      <p className="my-sm text-xl">
        Text with the class <code>.text-xl</code>
      </p>
      <p className="my-sm text-xxl">
        Text with the class <code>.text-xxl</code>
      </p>
      <p className="my-sm text-xxxl">
        Text with the class <code>.text-xxxl</code>
      </p>

      <h4 id="text-transforms">Transforms</h4>
      <p className="text-uppercase">
        Text with the class <code>.text-uppercase</code>
      </p>
      <p className="text-lowercase">
        Text with the class <code>.text-lowercase</code>
      </p>
      <p className="text-capitalize">
        Text with the class <code>.text-capitalize</code>
      </p>

      <h4 id="text-decoration">Decoration</h4>
      <p className="text-line-through">
        Text with the class <code>.text-line-through</code>
      </p>
      <p className="text-underline">
        Text with the class <code>.text-underline</code>
      </p>

      <h4 id="text-styles">Styles</h4>
      <p className="text-normal">
        Text with the class <code>.text-normal</code>
      </p>
      <p className="text-bold">
        Text with the class <code>.text-bold</code>
      </p>
      <p className="text-italic">
        Text with the class <code>.text-italic</code>
      </p>
    </div>
  )
}
