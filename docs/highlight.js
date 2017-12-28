import css from 'react-syntax-highlighter/dist/languages/css'
import vs from 'react-syntax-highlighter/dist/styles/vs'
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
    <div className="px-md py-xs bl bw-md bc-purple">
      <SyntaxHighlighter language={lang} style={vs}>
        {children.toString()}
      </SyntaxHighlighter>
    </div>
  )
}

export default Highlight
