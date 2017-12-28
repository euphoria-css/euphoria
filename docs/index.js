import _ from 'lodash'
import AllRules from './all-rules'
import Defaults from './defaults'
import Euphoria from '../src/euphoria'
import Example from './example'
import Header from './header'
import React from 'react'
import ReactDOM from 'react-dom'
import ruleSetAnchor from './ruleset-anchor'
import slugify from 'slugify'
import TOC from './toc'
import Usage from './usage'
import { css } from 'glamor'
import { HashRouter, Route, Link } from 'react-router-dom'

// Generate the Euhpria CSS
const euphoria = new Euphoria({})

// If development, load euphoria via glamor, otherwise use
// latest CDN version.
if (process.env.NODE_ENV === 'development') css.insert(euphoria.toString())

const RULES = _.sortBy(euphoria.rules, 'name')

function Documentation() {
  return (
    <HashRouter>
      <div className="sans-serif cf">
        <Header />
        <div className="cf">
          <div className="fl w-20-md-up w-100 br bc-gray-lighter pr-none-xs-only">
            <TOC rules={RULES} />
          </div>
          <div className="fl w-80-md-up w-100 pl-lg-md-up py-md">
            <Route exact path="/" component={Usage} />
            <Route
              path="/defaults"
              component={() => <Defaults defaults={euphoria.defaults} />}
            />
            <Route
              path="/all"
              component={() => <AllRules css={euphoria.toString()} />}
            />
            {RULES.map((ruleset, key) => (
              <Route
                path={`/${ruleSetAnchor(ruleset.name)}`}
                component={() => <Example ruleset={ruleset} />}
                key={key}
              />
            ))}
          </div>
        </div>
        <div className="py-lg center gray-light bt bc-gray-lighter">
          Built with Euphoria
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.docs'))
