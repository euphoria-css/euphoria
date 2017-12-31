import bash from 'react-syntax-highlighter/dist/languages/bash'
import css from 'react-syntax-highlighter/dist/languages/css'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import PropTypes from 'prop-types'
import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'
import vs from 'react-syntax-highlighter/dist/styles/vs'
import xml from 'react-syntax-highlighter/dist/languages/xml'

registerLanguage('javascript', js)
registerLanguage('css', css)
registerLanguage('html', xml)
registerLanguage('bash', bash)

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(['bash', 'javascript', 'css', 'html']).isRequired,
}

function Highlight({ children, inline = false, lang }) {
  return (
    <div className={inline ? 'dib' : 'px-md py-xs bl bw-md bc-purple'}>
      <SyntaxHighlighter language={lang} style={vs}>
        {children.toString()}
      </SyntaxHighlighter>
    </div>
  )
}

export default Highlight
