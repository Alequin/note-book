const writeJsonFile = require('json-files/write-file')
const allFilesInDirectory = require('./all-files-in-directory')
const {
  ROOTS_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require('../../../config/environment')

const buildJsonNotesFile = async directory => {
  const allFilesInNotesDir = await allFilesInDirectory(directory)
  const filesWithTrimmedRoots = allFilesInNotesDir.map(filePath => ({
    path: filePath.replace(`${directory}/`, '')
  }))

  writeJsonFile(ROOTS_JSON_FILE, filesWithTrimmedRoots)
}

if (require.main === module) buildJsonNotesFile(RAW_NOTES_DIRECTORY)
module.exports = buildJsonNotesFile
