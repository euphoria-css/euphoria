import _ from 'lodash'
import AllRules from './all-rules'
import Customize from './customize'
import Euphoria from '../src/euphoria'
import Example from './example'
import Header from './header'
import React from 'react'
import ReactDOM from 'react-dom'
import ruleSetAnchor from './ruleset-anchor'
import ScrollToTop from './scroll-to-top'
import TOC from './toc'
import Usage from './usage'
import { css } from 'glamor'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

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
        <div className="fixed-md-up w-100 z-100">
          <Header />
        </div>
        <div className="cf">
          <div className="cf fl-md-up w-20-md-up w-100 br bc-gray-lighter pr-none-xs-only h-100 fixed-md-up of-auto bg-white py-xl-md-up">
            <TOC rules={RULES} />
          </div>
          <Switch>
            <ScrollToTop>
              <div className="fl-md-up w-80-md-up offset-20-md-up w-100 p-md px-lg-md-up py-xl-md-up">
                <Route exact path="/" component={Usage} />
                <Route
                  path="/customize"
                  component={() => <Customize defaults={euphoria.defaults} />}
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
            </ScrollToTop>
          </Switch>
        </div>
        <div className="py-lg center gray-light bt bc-gray-lighter">
          Built with Euphoria
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.docs'))
