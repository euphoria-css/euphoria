import Highlight from './highlight'
import React from 'react'
import stringify from './stringify'
import { spacing } from './config'

const directions = ['', 'b', 'l', 'r', 't', 'x', 'y']

export default function Spacing() {
  return (
    <div>

      <h2 id="spacing">Spacing</h2>

      <h4 id="spacing-usage">Usage</h4>
      <Highlight lang="javascript">{`import euphoria from 'euphoria'
import { css } from 'glamor'

css.insert(euphoria.spacing(${stringify(spacing)}))
`}</Highlight>

      <h3 id="padding">Padding</h3>

      <h4 id="padding-remove">Remove Padding</h4>
      <div className="bg-muted p-none mb-sm">
        Div with the class <code>.p-none</code>.
      </div>

      <h4 id="padding-sizes">Sizes</h4>
      {Object.keys(spacing).map((k, i) => (
        <div className={`bg-muted mb-sm p-${k}`} key={i}>
          Div with the class <code>.p-{k}</code>.
        </div>
      ))}

      <h4 id="padding-directions">Directions</h4>
      {directions.map((d, i) => (
        <div className={`bg-muted mb-sm p${d}-sm`} key={i}>
          Div with the class <code>.p{d}-sm</code>.
        </div>
      ))}

      <h3 id="margins">Margins</h3>

      <h4 id="margins-remove">Remove Margins</h4>
      <div className="bg-muted m-none">
        Div with the class <code>.m-none</code>.
      </div>

      <h4 id="margins-sizes" className="mt-md">Sizes</h4>
      {Object.keys(spacing).map((k, i) => (
        <div className={`bg-muted m-${k}`} key={i}>
          Div with the class <code>.m-{k}</code>.
        </div>
      ))}

      <h4 id="margins-directions">Directions</h4>
      {directions.map((d, i) => (
        <div className={`bg-muted m${d}-sm`} key={i}>
          Div with the class <code>.m{d}-sm</code>.
        </div>
      ))}
    </div>
  )
}
