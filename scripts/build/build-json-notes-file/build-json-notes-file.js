const { startCase } = require('lodash')
const writeJsonFile = require('json-files/write-file')
const allFilesInDirectory = require('./all-files-in-directory')
const fileNameFromPath = require('./file-name-from-path')
const {
  ROOTS_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require('../../../config/environment')

const buildJsonNotesFile = async directory => {
  const allFilesInNotesDir = await allFilesInDirectory(directory)
  const filesWithTrimmedRoots = allFilesInNotesDir.map(filePath => ({
    path: filePath.replace(`${directory}/`, ''),
    name: startCase(fileNameWithoutExtension(filePath))
  }))

  writeJsonFile(ROOTS_JSON_FILE, filesWithTrimmedRoots)
}

const fileNameWithoutExtension = filePath =>
  fileNameFromPath(filePath).replace(/\..*$/, '')

if (require.main === module) buildJsonNotesFile(RAW_NOTES_DIRECTORY)
module.exports = buildJsonNotesFile
