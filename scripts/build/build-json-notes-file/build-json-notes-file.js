const { startCase } = require('lodash')
const fs = require('fs-extra')
const asyncFlow = require('async-flow')
const allFilesInDirectory = require('./all-files-in-directory')
const fileNameFromPath = require('./file-name-from-path')
const readMarkdownFile = require('./read-markdown-file')
const tags = require('./tags/tags')
const markdownLastModifiedDate = require('./markdown-last-modified-date')
const {
  ROOTS_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require('../../../config/environment')

const fetchAllMarkdownFiles = async directory => ({
  originalDirectory: directory,
  filePaths: await allFilesInDirectory(directory)
})

const makeNotesFileObject = ({ originalDirectory, filePaths }) =>
  filePaths.map(filePath => {
    const content = readMarkdownFile(filePath)
    return {
      path: filePath.replace(`${originalDirectory}/`, ''),
      name: startCase(fileNameWithoutExtension(filePath)),
      content,
      tags: tags(content)
    }
  })

const fileNameWithoutExtension = filePath =>
  fileNameFromPath(filePath).replace(/\..*$/, '')

const addLastModifiedDateToNoteFileObjects = fileObjects => {
  const previousJsonFile =
    fs.existsSync(ROOTS_JSON_FILE) && fs.readJSONSync(ROOTS_JSON_FILE)
  return fileObjects.map(file => ({
    ...file,
    lastModified: markdownLastModifiedDate(file, previousJsonFile)
  }))
}

const writeJsonFile = fileObjects =>
  fs.writeJsonSync(ROOTS_JSON_FILE, fileObjects)

const buildJsonNotesFile2 = asyncFlow(
  fetchAllMarkdownFiles,
  makeNotesFileObject,
  addLastModifiedDateToNoteFileObjects,
  writeJsonFile
)

if (require.main === module) buildJsonNotesFile2(RAW_NOTES_DIRECTORY)
module.exports = buildJsonNotesFile2
