const paths = require('../../config/paths')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')

const checkRequiredFilesExist = () => {
  const doFilesExist = checkRequiredFiles([paths.appHtml, paths.appIndexJs])
  if (!doFilesExist) {
    throw new Error(
      `Missing required Files: ${JSON.stringify({
        appHtml: paths.appHtml,
        addIndexJs: paths.appIndexJs
      })}`
    )
  }
}

module.exports = checkRequiredFilesExist
