import Highlight from './highlight'
import React from 'react'
import Title from './title'

function Defaults({ defaults }) {
  return (
    <div>
      <Title>Defaults</Title>
      <Highlight lang="css">{JSON.stringify(defaults, null, 2)}</Highlight>
    </div>
  )
}

export default Defaults
