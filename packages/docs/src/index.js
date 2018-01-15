import { map, filter, sortBy } from 'lodash'
import AllRules from './all-rules'
import Customize from './customize'
import euphoria from '../../euphoria/lib/euphoria.cjs'
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

const styles = euphoria()

const RULES = sortBy(map(styles.rulesets(), rs => rs), 'name')

function Container({ children, className = '' }) {
  return (
    <div
      className={`fixed-md-up relative-lg-up w-90-lg-up mx-auto-lg-up w-100 ${className}`}
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
          <div className="fl-md-up w-20-md-up w-100 br bc-gray-lighter pr-none-xs-only h-100 fixed-md-up relative-lg-up py-xl-md-up py-md-lg-up of-auto bg-white">
            <TOC rules={RULES} />
          </div>
          <div className="fl-md-up w-80-md-up w-100 ml-20-md-up ml-0-lg-up">
            <div className="p-md px-lg-md-up py-xl-md-up py-md-lg-up">
              <Switch>
                <ScrollToTop>
                  <Route exact path="/" component={Overview} />
                  <Route path="/usage" component={Usage} />
                  <Route
                    path="/customize"
                    component={() => <Customize defaults={styles.defaults} />}
                  />
                  <Route
                    path="/all"
                    component={() => <AllRules css={styles.css()} />}
                  />
                  {RULES.map((ruleset, key) => (
                    <Route
                      path={`/${ruleSetAnchor(ruleset.name)}`}
                      component={() => <Example ruleset={ruleset} />}
                      key={key}
                    />
                  ))}
                </ScrollToTop>
              </Switch>
            </div>
          </div>
        </Container>
        <div className="py-lg center gray-light bt bc-gray-lighter">
          Built with Euphoria
        </div>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Documentation />, document.querySelector('.docs'))
