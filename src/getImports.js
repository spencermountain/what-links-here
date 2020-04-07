// 'CallExpression'
// ImportDeclaration
const acorn = require('acorn')
const fs = require('fs')

var umd = require('acorn-umd')
// const walk = require('acorn-walk')

let code = `
const foo = require('./fun')

// import lib from 'cool'
`
// code = `require('./fun')`

// walk.full(acorn.parse(code), (node, state, type) => {
//   console.log(node)
//   // console.log(`There's a ${node.type} node at ${node.ch}`)
// })
let path = '/Users/spencer/mountain/wtf_wikipedia/src/image/index.js'
const source = fs.readFileSync(path).toString()

var ast = acorn.parse(source, { ecmaVersion: 6 })
var imports = umd(ast, {
  es6: true,
  amd: false,
  cjs: true,
})

console.log(imports.map((obj) => obj.source.value))
