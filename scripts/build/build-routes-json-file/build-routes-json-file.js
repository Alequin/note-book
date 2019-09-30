const { startCase, flow } = require("lodash");
const fs = require("fs-extra");
const asyncFlow = require("async-flow");
const allFilesInDirectory = require("./all-files-in-directory");
const removeExtensionFromFilePath = require("./remove-extension-from-file-path");
const fileNameFromPath = require("./file-name-from-path");
const readMarkdownFile = require("./read-markdown-file");
const tags = require("./tags/tags");
const markdownLastModifiedDate = require("./markdown-last-modified-date");
const {
  ROUTES_JSON_FILE,
  RAW_NOTES_DIRECTORY
} = require("../../../config/environment");

const fetchAllMarkdownFiles = async () => ({
  originalDirectory: RAW_NOTES_DIRECTORY,
  filePaths: await allFilesInDirectory(RAW_NOTES_DIRECTORY)
});

const makeNotesFileObject = ({ originalDirectory, filePaths }) =>
  filePaths.map(filePath => {
    const content = readMarkdownFile(filePath);
    return {
      path: removeExtensionFromFilePath(filePath).replace(
        `${originalDirectory}`,
        ""
      ),
      name: startCase(fileNameWithoutExtension(filePath)),
      content,
      tags: tags(content)
    };
  });

const fileNameWithoutExtension = flow(
  fileNameFromPath,
  removeExtensionFromFilePath
);

const addLastModifiedDateToNoteFileObjects = fileObjects => {
  const previousJsonFile =
    fs.existsSync(ROUTES_JSON_FILE) && fs.readJSONSync(ROUTES_JSON_FILE);
  return fileObjects.map(file => ({
    ...file,
    lastModified: markdownLastModifiedDate(file, previousJsonFile)
  }));
};

const writeJsonFile = fileObjects =>
  fs.writeJsonSync(ROUTES_JSON_FILE, fileObjects);

const buildRoutesJsonFile = asyncFlow(
  fetchAllMarkdownFiles,
  makeNotesFileObject,
  addLastModifiedDateToNoteFileObjects,
  writeJsonFile
);

if (require.main === module) buildRoutesJsonFile();

module.exports = buildRoutesJsonFile;
