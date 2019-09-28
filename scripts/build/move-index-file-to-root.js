const fs = require('fs-extra')
const paths = require('../../config/paths')

const BUILD_INDEX_FILE_LOCATION = `${paths.appBuild}/index.html`

/** Move index.html out to allow github pages to work */
const moveIndexFileToRoot = () =>
  fs.moveSync(BUILD_INDEX_FILE_LOCATION, paths.rootHtml)

module.exports = moveIndexFileToRoot
