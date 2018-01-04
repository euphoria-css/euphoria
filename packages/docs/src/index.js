import { filter, sortBy } from 'lodash'
import AllRules from './all-rules'
import Customize from './customize'
import Euphoria from '../../euphoria/lib/euphoria.cjs'
import Example from './example'
import Header from './header'
import Overview from './overview'
import React from 'react'
import ReactDOM from 'react-dom'
import ruleSetAnchor from './ruleset-anchor'
import ScrollToTop from './scroll-to-top'
import TOC from './toc'
import Usage from './usage'
import { css } from 'glamor'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

// Generate the Euhpria CSS
const euphoria = new Euphoria()

// Add some custom rules only for the documentation site.
// euphoria.addRule({
//   selector: 'p',
//   inherits: ['.lh-md', '.gray-darker', '.my-md'],
// })

// If development, load euphoria via glamor, otherwise use
// latest CDN version.
if (process.env.NODE_ENV === 'development') css.insert(euphoria.toString())

// Only rules within RuleSets are considered as "built-in" rules. Rules added
// via `addRule` are not contained in a RuleSet so they will be omitted in the
// docs.
const RULES = sortBy(filter(euphoria.rules, ['type', 'RuleSet']), 'name')

function Container({ children, className = '' }) {
  return (
    <div
      className={`fixed-md-up relative-lg-up w-90-lg-up mx-auto w-100 ${className}`}
    >
      {children}
    </div>
  )
}

function Documentation() {
  return (
    <HashRouter>
      <div className="sans-serif cf">
        <Container className="z-100">
          <Header />
        </Container>
        <Container className="cf">
          <div className="cf fl-md-up w-20-md-up w-100 br bc-gray-lighter pr-none-xs-only h-100 fixed-md-up relative-lg-up py-xl-md-up py-md-lg-up of-auto bg-white">
            <TOC rules={RULES} />
          </div>
          <Switch>
            <ScrollToTop>
              <div className="fl-md-up w-80-md-up offset-20-md-up offset-0-lg-up w-100 w-100-lg-up p-md px-lg-md-up py-xl-md-up py-md-lg-up">
                <Route exact path="/" component={Overview} />
                <Route path="/usage" component={Usage} />
                <Route
                  path="/customize"
                  component={() => <Customize defaults={euphoria.defaults} />}
                />
                <Route
                  path="/all"
                  component={() => <AllRules rules={RULES} />}
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
        </Container>
        <div className="py-lg center gray-light bt bc-gray-lighter">
          Built with Euphoria
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.docs'))
