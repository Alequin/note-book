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
require('../scripts-config/env')

const asyncFlow = require('async-flow')

// Generate configuration
const CONFIG = require('../scripts-config/webpack.config')('production')

asyncFlow(
  require('./build-json-notes-file/build-json-notes-file'),
  require('./check-required-files-exist'),
  require('./check-browsers'),
  require('../remove-old-build-files'),
  require('./copy-public-folder'),
  require('./run-webpack-compiler')(CONFIG),
  require('./log-compile-results')(CONFIG),
  require('./move-index-file-to-root')
)()
