const vscode = require('vscode')
const path = require('path')

const dropDown = function (foundFiles, ourFile) {
  if (foundFiles.length === 0) {
    // show 'no files found'
    vscode.window
      .showQuickPick([
        {
          label: 'No links found',
        },
      ])
      .then(() => { })
    return
  }
  let showArr = foundFiles.map((abs, i) => {
    let rel = path.relative(ourFile, abs)
    return {
      id: i,
      description: rel,
      label: path.basename(abs),
      abs: abs,
    }
  })
  vscode.window.showQuickPick(showArr).then((item) => {
    vscode.workspace.openTextDocument(item.abs).then((document) => {
      vscode.window.showTextDocument(document, { preview: false })
    })
  })
}
module.exports = dropDown
