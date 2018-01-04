import PropTypes from 'prop-types'
import React from 'react'

SectionHeading.defaultProps = {}

SectionHeading.propTypes = {}

function SectionHeading({ children }) {
  return (
    <h3 className="txt-lg mt-lg mb-md pb-xs bb bc-gray-lighter fw-1">
      {children}
    </h3>
  )
}

export default SectionHeading
