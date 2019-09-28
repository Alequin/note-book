const fs = require('fs-extra')
const paths = require('../scripts-config/paths')

/**
 * Remove all content created by previous builds
 */
const removeOldBuildFiles = () => {
  fs.emptyDirSync(paths.appBuild)
  deleteRootIndexFile()
}

const deleteRootIndexFile = () =>
  fs.existsSync(paths.rootHtml) && fs.unlinkSync(paths.rootHtml)

module.exports = removeOldBuildFiles
