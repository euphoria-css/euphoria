import Highlight from './highlight'
import React from 'react'
import SectionHeading from './section-heading'
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
      <SectionHeading>Install</SectionHeading>
      <p>
        The easiest way to get started with Euphoria is to use the{' '}
        <strong>CDN version</strong>:
      </p>
      <Highlight lang="html">{`<link href="//unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" type="text/css" />`}</Highlight>
      <p>
        Install with <strong>Yarn</strong>:
      </p>
      <Highlight lang="bash">{`yarn add euphoria`}</Highlight>
      <p>
        Install with <strong>npm</strong>:
      </p>
      <Highlight lang="bash">{`npm install --save euphoria

# or even shorter:
npm i -S euphoria`}</Highlight>

      <SectionHeading>Starter HTML</SectionHeading>
      <Highlight lang="html">{`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>My App</title>
  </head>
  <body class='p-none m-none'>
    ...your HTML here...
  </body>
</html>`}</Highlight>
    </div>
  )
}

export default Usage
