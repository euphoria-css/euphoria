import React from 'react'
import { spacing } from './config'

const directions = ['', 'b', 'l', 'r', 't', 'x', 'y']

export default function Spacing() {
  return (
    <div>

      <h2 id="padding">Padding</h2>

      <h3 id="padding-remove">Remove Padding</h3>
      <div className="bg-muted p-none mb-sm">
        Div with the class <code>.p-none</code>.
      </div>

      <h3 id="padding-sizes">Sizes</h3>
      {Object.keys(spacing).map((k, i) => (
        <div className={`bg-muted mb-sm p-${k}`} key={i}>
          Div with the class <code>.p-{k}</code>.
        </div>
      ))}

      <h3 id="padding-directions">Directions</h3>
      {directions.map((d, i) => (
        <div className={`bg-muted mb-sm p${d}-sm`} key={i}>
          Div with the class <code>.p{d}-sm</code>.
        </div>
      ))}

      <h2 id="margins">Margins</h2>

      <h3 id="margins-remove">Remove Margins</h3>
      <div className="bg-muted m-none">
        Div with the class <code>.m-none</code>.
      </div>

      <h3 id="margins-sizes" className="mt-md">Sizes</h3>
      {Object.keys(spacing).map((k, i) => (
        <div className={`bg-muted m-${k}`} key={i}>
          Div with the class <code>.m-{k}</code>.
        </div>
      ))}

      <h3 id="margins-directions">Directions</h3>
      {directions.map((d, i) => (
        <div className={`bg-muted m${d}-sm`} key={i}>
          Div with the class <code>.m{d}-sm</code>.
        </div>
      ))}
    </div>
  )
}
