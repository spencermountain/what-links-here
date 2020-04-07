const vscode = require('vscode')
const fs = require('fs')
const path = require('path')

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    function wantToWalk(f) {
      return !['node_modules', 'bower_components', '.git'].includes(f)
    }
    filelist =
      fs.statSync(path.join(dir, file)).isDirectory() && wantToWalk(file)
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const getFiles = function () {
  let workspaceFolders = vscode.workspace.workspaceFolders
  let workspaceFolderPaths = workspaceFolders.map((folder) => folder.uri.fsPath)
  let jsFiles = []
  for (const str of workspaceFolderPaths) {
    jsFiles = jsFiles.concat(
      walkSync(str).filter((f) => f.toLowerCase().endsWith('.js'))
    )
  }
  return jsFiles
}
module.exports = getFiles
