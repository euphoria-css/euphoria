import bash from 'react-syntax-highlighter/dist/languages/hljs/bash'
import css from 'react-syntax-highlighter/dist/languages/hljs/css'
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript'
import PropTypes from 'prop-types'
import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light'
import vs from 'react-syntax-highlighter/dist/styles/hljs/vs'
import xml from 'react-syntax-highlighter/dist/languages/hljs/xml'

// Override stupid container styles
const styles = Object.assign({}, vs, { hljs: {} })

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
    <div
      className={
        inline
          ? 'dib txt-sm'
          : 'p-md bl bw-md bc-purple bg-purple-lightest txt-sm'
      }
    >
      <SyntaxHighlighter language={lang} style={styles}>
        {children.toString()}
      </SyntaxHighlighter>
    </div>
  )
}

export default Highlight
