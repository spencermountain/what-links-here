const vscode = require('vscode')
const getImports = require('./src/getImports')
const getFiles = require('./src/getFiles')
const dropDown = require('./src/dropDown')

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.what-links-here',
    function () {
      let ourFile = vscode.window.activeTextEditor.document.fileName
      // console.log(ourFile)
      let allFiles = getFiles()
      let foundFiles = []
      allFiles.forEach((file) => {
        let required = []
        try {
          required = getImports(file)
          if (required.find((f) => f === ourFile)) {
            foundFiles.push(file)
          }
        } catch (e) {}
      })
      dropDown(foundFiles, ourFile)
    }
  )

  context.subscriptions.push(disposable)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
