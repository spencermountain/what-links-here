const fs = require('fs')
const acorn = require('acorn')
const umd = require('acorn-umd')
const path = require('path')

const getImports = function (abs) {
  try {
    const source = fs.readFileSync(abs).toString()
    var ast = acorn.parse(source, { ecmaVersion: 6 })
    var imports = umd(ast, {
      es6: true,
      amd: true,
      cjs: true,
    })
  } catch (e) {
    console.log('failed')
    return []
  }
  // console.log('passed-try')
  const folder = path.dirname(abs)
  // console.log('got-folder')
  let rels = imports.map((obj) => obj.source.value)
  // console.log('did-map')
  let found = rels.map((rel) => {
    let file = path.join(folder, rel)
    // add .js to end
    if (!path.extname(file)) {
      file += '.js'
    }
    return file
  })
  return found
}
module.exports = getImports
