import Code from './code'
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
        Learn{' '}
        <Link to="/customize" className="primary">
          how to customize Euphoria
        </Link>{' '}
        or see{' '}
        <Link to="/all" className="primary">
          all Euphoria CSS styles
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
      <Highlight lang="bash">{`yarn add euphoria euphoria-cli`}</Highlight>
      <p>
        Install with <strong>npm</strong>:
      </p>
      <Highlight lang="bash">{`npm install --save euphoria euphoria-cli

# or even shorter:
npm i -S euphoria euphoria-cli`}</Highlight>

      <SectionHeading>Customizing Euphoria</SectionHeading>
      <p>
        Now that you have Euphoria and the accompanying CLI tool, you can run
        the CLI to generate the CSS locally:
      </p>
      <Highlight lang="bash">{`euphoria`}</Highlight>
      <p>
        This will, by default, generate Euphoria CSS default styles to{' '}
        <Code>dist/euphoria.min.css</Code>.
      </p>
      <p>
        If you'd like to customize Euphoria, create a{' '}
        <Code>euphoria.config.js</Code> file and export a configuration object.
      </p>
      <p>
        See{' '}
        <Link className="primary" to="/customize">
          Customize
        </Link>{' '}
        for more information on how to customize Euphoria.
      </p>

      <SectionHeading>Starter HTML</SectionHeading>
      <p>Copy and paste the below HTML to get started with Euphoria:</p>
      <Highlight lang="html">{`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>My App</title>

    <!-- Optional: Apply a global CSS reset before using Euphoria -->
    <link href="https://unpkg.com/ress/dist/ress.min.css" rel="stylesheet" />>

    <!-- Use the CDN version of Euphoria: -->
    <link href="https://unpkg.com/euphoria/dist/euphoria.min.css" rel="stylesheet" />

  </head>
  <body class='p-none m-none'>

    ...your HTML here...

  </body>
</html>`}</Highlight>
    </div>
  )
}

export default Usage
