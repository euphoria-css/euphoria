import slugify from 'url-slug'

function ruleSetAnchor(name = '') {
  return slugify(name.toLowerCase())
}

export default ruleSetAnchor
