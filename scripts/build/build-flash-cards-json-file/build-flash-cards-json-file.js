const { flow } = require("lodash");
const fs = require("fs-extra");
const readMarkdownFile = require("read-markdown-file");
const directoryContentsWithResolvedPaths = require("file-path/directory-contents-with-resolved-paths");
const {
  RAW_FLASH_CARDS_DIRECTORY,
  FLASH_CARDS_JSON_FILE
} = require("../../../config/environment");

const writeToJson = flashCardsList =>
  fs.writeJSONSync(FLASH_CARDS_JSON_FILE, flashCardsList);

const readFilesContents = files =>
  files
    .filter(filePath => filePath.endsWith(".md"))
    .map(filePath => ({ content: readMarkdownFile(filePath) }));

const buildFlashCardsJsonFile = flow(
  () => directoryContentsWithResolvedPaths(RAW_FLASH_CARDS_DIRECTORY),
  readFilesContents,
  writeToJson
);

module.exports = buildFlashCardsJsonFile;
