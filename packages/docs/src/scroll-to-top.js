import React from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div ref={cont => (this.container = cont)} className="h-100 of-auto">
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(ScrollToTop)
