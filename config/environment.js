const path = require('path')

const isTestEnvironment = process.env.IS_TEST

const RAW_NOTES_DIRECTORY = isTestEnvironment
  ? path.resolve('./test-raw-notes')
  : path.resolve('./raw-notes')

module.exports = Object.freeze({
  RAW_NOTES_DIRECTORY
})
