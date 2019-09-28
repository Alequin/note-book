const chalk = require('react-dev-utils/chalk')
const webpack = require('webpack')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

// Create the production build and print the deployment instructions.
const runWebpackComplier = config => async () => {
  try {
    // We used to support resolving modules according to `NODE_PATH`.
    // This now has been deprecated in favor of jsconfig/tsconfig.json
    // This lets you use absolute paths in imports inside large monorepos:
    if (process.env.NODE_PATH) {
      console.log(
        chalk.yellow(
          'Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.'
        )
      )
      console.log()
    }

    console.log('Creating an optimized production build...')

    const compiler = webpack(config)
    return await runCompiler(compiler, config)
  } catch (error) {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  }
}

const runCompiler = compiler =>
  new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages
      if (err) {
        if (!err.message) {
          return reject(err)
        }
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: []
        })
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        )
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }

      return resolve({
        stats,
        warnings: messages.warnings
      })
    })
  })

module.exports = runWebpackComplier
