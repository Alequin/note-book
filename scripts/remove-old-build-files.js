const fs = require('fs-extra')
const paths = require('./scripts-config/paths')

/**
 * Remove all content created by previous builds
 */
const removeOldBuildFiles = () => {
  deleteIfExists(paths.appBuild)
  deleteIfExists(paths.rootHtml)
}

const deleteIfExists = dir => fs.existsSync(dir) && fs.removeSync(dir)

if (require.main === module) removeOldBuildFiles()
module.exports = removeOldBuildFiles
