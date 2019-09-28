// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})
// Ensure environment variables are read.
require('../../config/env')

// Generate configuration
const CONFIG = require('../../config/webpack.config')('production')

const asyncPipe = require('./utils/async-pipe')

asyncPipe(
  require('./check-required-files-exist'),
  require('./check-browsers'),
  require('./remove-old-files'),
  require('./copy-public-folder'),
  require('./run-webpack-compiler')(CONFIG),
  require('./log-compile-results')(CONFIG),
  require('./move-index-file-to-root')
)()
