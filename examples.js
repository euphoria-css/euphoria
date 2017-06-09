const euphoria = require('./euphoria')

//console.log('ALL')
//console.log(euphoria.all())

//console.log('ALL (CUSTOM MAPPING)')
//console.log(
//euphoria.all({ spacing: { tiny: '0.1rem' }, colors: { baamm: 'red' } })
//)

console.log('\nALIGNMENT')
console.log(euphoria.alignment())

console.log('\nCOLORS')
console.log(euphoria.colors())

console.log('\nDISPLAY')
console.log(euphoria.display())

console.log('\nSPACING')
console.log(euphoria.spacing({ tiny: '0.2rem', huge: '3rem' }))

console.log('\nTEXT')
//console.log(euphoria.text({ tiny: '0.2rem', huge: '3rem' }))
console.log(euphoria.text())
