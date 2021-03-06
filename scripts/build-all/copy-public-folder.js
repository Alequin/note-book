const fs = require('fs-extra')
const paths = require('../scripts-config/paths')

const copyPublicFolder = () =>
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  })

module.exports = copyPublicFolder
