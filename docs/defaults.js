import Code from './code'
import Highlight from './highlight'
import React from 'react'
import Title from './title'

function Defaults({ defaults }) {
  return (
    <div>
      <Title>Defaults</Title>
      <p>
        Below is a full list of Euphoria's defaults. You can override any of
        these settings by passing in a configuration object to Euphoria which
        will be merged with the defaults, for example:
      </p>
      <Highlight lang="js">{`new Euphoria({
  colors: {
    red: 'red'
  }
})`}</Highlight>
      <p>
        This will override the default <Code>colors</Code> settings but will
        retain all the other defaults.
      </p>
      <h3>Defaults</h3>
      <Highlight lang="css">{JSON.stringify(defaults, null, 2)}</Highlight>
    </div>
  )
}

export default Defaults
