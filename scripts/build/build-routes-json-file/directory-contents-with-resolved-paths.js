const fs = require('fs-extra')
const { flow } = require('lodash')

const readDir = path => ({ files: fs.readdirSync(path), originalPath: path })
const filterOutPrivateFiles = ({ files, originalPath }) => ({
  originalPath,
  files: files.filter(file => !file.startsWith('.'))
})
const resolvePaths = ({ files, originalPath }) =>
  files.map(file => `${originalPath}/${file}`)

const directoryContentsWithResolvedPaths = flow(
  readDir,
  filterOutPrivateFiles,
  resolvePaths
)

module.exports = directoryContentsWithResolvedPaths
