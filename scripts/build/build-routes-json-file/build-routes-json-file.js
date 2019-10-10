const { startCase, flow } = require("lodash");
const fs = require("fs-extra");
const asyncFlow = require("async-flow");
const readMarkdownFile = require("read-markdown-file");
const removeExtensionFromFilePath = require("file-path/remove-extension-from-file-path");
const fileNameFromPath = require("file-path/file-name-from-path");
const markdownToHtml = require("../markdown-to-html/markdown-to-html");
const allFilesInDirectory = require("./all-files-in-directory");
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
    const markdownContent = readMarkdownFile(filePath);
    const path = removeExtensionFromFilePath(filePath).replace(
      `${originalDirectory}/`,
      ""
    );
    return {
      path: `/${path}`,
      content: markdownToHtml(markdownContent),
      pathSegments: path.split("/"),
      name: startCase(fileNameWithoutExtension(filePath)),
      tags: tags(markdownContent)
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
