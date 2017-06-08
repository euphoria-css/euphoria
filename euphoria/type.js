module.exports = () => {
  const transform = `.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }`

  return transform //[transform].join('\n')
}
