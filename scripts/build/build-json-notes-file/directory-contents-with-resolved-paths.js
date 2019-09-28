const fs = require('fs-extra')
const { flow } = require('lodash')

const readDir = path => ({ files: fs.readdirSync(path), originalPath: path })
const resolvePaths = ({ files, originalPath }) =>
  files.map(file => `${originalPath}/${file}`)

const directoryContentsWithResolvedPaths = flow(
  readDir,
  resolvePaths
)

module.exports = directoryContentsWithResolvedPaths
