import css from 'react-syntax-highlighter/dist/languages/css'
import docco from 'react-syntax-highlighter/dist/styles/docco'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import PropTypes from 'prop-types'
import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'

registerLanguage('javascript', js)
registerLanguage('css', css)

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(['javascript', 'css']).isRequired,
}

function Highlight({ children, lang }) {
  return (
    <SyntaxHighlighter
      className="p-md bw-md bl bw-md bc-info"
      language={lang}
      style={docco}
    >
      {children.toString()}
    </SyntaxHighlighter>
  )
}

export default Highlight
