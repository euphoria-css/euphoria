import slugify from 'slugify'

function ruleSetAnchor(name) {
  return slugify(name.toLowerCase())
}

export default ruleSetAnchor
