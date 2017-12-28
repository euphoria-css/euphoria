import React from 'react'
import Title from './title'
import { Link } from 'react-router-dom'

function Usage() {
  return (
    <div>
      <Title>Usage</Title>
      <p>Use the sidebar to browse all available Euphoria styles.</p>
      <p>
        Please see{' '}
        <a href="https://github.com/euphoria-css/euphoria" className="primary">
          Euphoria
        </a>{' '}
        on Github for installation and setup documentation.
      </p>
      <p>
        See{' '}
        <Link to="/defaults" className="primary">
          all available defaults
        </Link>.
      </p>
      <p>
        You can view{' '}
        <Link to="/all" className="primary">
          all CSS rules here
        </Link>.
      </p>
    </div>
  )
}

export default Usage
