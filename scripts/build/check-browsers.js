const browsersHelper = require('react-dev-utils/browsersHelper')
const paths = require('../../config/paths')
const isInteractive = process.stdout.isTTY

/** create-react-app require that you explicitly set browsers
 * and do not fall back to browserslist defaults.
 * */
const checkBrowsers = async () =>
  await browsersHelper.checkBrowsers(paths.appPath, isInteractive)

module.exports = checkBrowsers
