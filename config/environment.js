const path = require('path')

const isTestEnvironment = process.env.IS_TEST

const newFile = ({ forTests, standardPath }) =>
  isTestEnvironment ? path.resolve(forTests) : path.resolve(standardPath)

const RAW_NOTES_DIRECTORY = isTestEnvironment
  ? path.resolve('./test-raw-notes')
  : path.resolve('./raw-notes')

const ROOTS_JSON_FILE = newFile({
  forTests: './test-roots.json',
  standardPath: './src/roots.json'
})

module.exports = Object.freeze({
  RAW_NOTES_DIRECTORY,
  ROOTS_JSON_FILE
})
