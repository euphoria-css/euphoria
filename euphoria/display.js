module.exports = () => {
  const display = [
    '.display-block { display: block !important; }',
    '.display-inline { display: inline !important; }',
    '.display-inline-block { display: inline-block !important; }',
    '.display-flex { display: flex !important; }',
    '.display-inline-flex { display: inline-flex !important; }',
    '.display-none { display: none !important; }',
  ]

  const visibility = [
    '.visible { visibility: visible !important; }',
    '.invisible { visibility: hidden !important; }',
  ]

  return [].concat(display, visibility)
}
