const fs = require('fs-extra')
const { RAW_NOTES_DIRECTORY } = require('../../../config/environment')

const readMarkdownFile = filePath => {
  const fileBuffer = fs.readFileSync(`${RAW_NOTES_DIRECTORY}/${filePath}`)
  return fileBuffer.toString()
}

module.exports = readMarkdownFile
