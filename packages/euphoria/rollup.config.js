import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const babelConfig = {
  babelrc: false,
  ignore: 'node_modules/**',
  presets: [['env', { modules: false }]],
  plugins: ['external-helpers'],
}

export default [
  {
    input: 'src/index.js',
    external: ['css-selector-parser', 'lightness', 'lodash', 'url-slug'],
    plugins: [babel(babelConfig)],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
