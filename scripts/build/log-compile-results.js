const path = require('path')
const chalk = require('react-dev-utils/chalk')
const paths = require('../scripts-config/paths')
const printHostingInstructions = require('react-dev-utils/printHostingInstructions')
const { printFileSizesAfterBuild } = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

// create-react-app provides details on the output static files
// comparing the size before and after the build. As we delete
// the previous build files this step is not required and so
// the previous sizes is always empty. Replaced the function
// call with the result which always comes back.
const MOCK_PREVIOUS_FILE_SIZES = {
  root: paths.appBuild,
  sizes: {}
}

const logBuildResults = config => ({ stats, warnings }) => {
  try {
    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'))
      console.log(warnings.join('\n\n'))
      console.log(
        '\nSearch for the ' +
          chalk.underline(chalk.yellow('keywords')) +
          ' to learn more about each warning.'
      )
      console.log(
        'To ignore, add ' +
          chalk.cyan('// eslint-disable-next-line') +
          ' to the line before.\n'
      )
    } else {
      console.log(chalk.green('Compiled successfully.\n'))
    }

    console.log('File sizes after gzip:\n')
    printFileSizesAfterBuild(
      stats,
      MOCK_PREVIOUS_FILE_SIZES,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE
    )
    console.log()

    const appPackage = require(paths.appPackageJson)
    const publicUrl = paths.publicUrl
    const publicPath = config.output.publicPath
    const buildFolder = path.relative(process.cwd(), paths.appBuild)
    printHostingInstructions(appPackage, publicUrl, publicPath, buildFolder)
  } catch (error) {
    console.log(chalk.red('Failed to compile.\n'))
    printBuildError(error)
    process.exit(1)
  }
}

module.exports = logBuildResults
