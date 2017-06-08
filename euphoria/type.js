module.exports = () => {
  const transform = `.text-uppercase { text-transform: uppercase !important; }
.text-lowercase { text-transform: lowercase !important; }
.text-capitalize { text-transform: capitalize !important; }`

  return transform //[transform].join('\n')
}
