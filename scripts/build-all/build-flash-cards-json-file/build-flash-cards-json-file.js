const { flow, uniq } = require("lodash");
const fs = require("fs-extra");
const removeExtensionFromFilePath = require("file-path/remove-extension-from-file-path");
const readMarkdownFile = require("read-markdown-file");
const directoryContentsWithResolvedPaths = require("file-path/directory-contents-with-resolved-paths");
const {
  RAW_FLASH_CARDS_DIRECTORY,
  FLASH_CARDS_JSON_FILE
} = require("../../../config/environment");
const markdownToHtml = require("../markdown-to-html/markdown-to-html");

const writeToJson = flashCardsList =>
  fs.writeJSONSync(FLASH_CARDS_JSON_FILE, flashCardsList);

const transformMarkdownToHtml = markdownFlashCards =>
  markdownFlashCards.map(({ question, answer }) => ({
    question: markdownToHtml(question),
    answer: markdownToHtml(answer)
  }));

const readFilesContents = filesNames =>
  filesNames.map(fileName => ({
    question: readMarkdownFile(`${fileName}.question.md`),
    answer: readMarkdownFile(`${fileName}.answer.md`)
  }));

const getFileNamesToRead = files =>
  uniq(
    files
      .filter(filePath => filePath.endsWith(".md"))
      .map(removeExtensionFromFilePath)
  );

const buildFlashCardsJsonFile = flow(
  () => directoryContentsWithResolvedPaths(RAW_FLASH_CARDS_DIRECTORY),
  getFileNamesToRead,
  readFilesContents,
  transformMarkdownToHtml,
  writeToJson
);

module.exports = buildFlashCardsJsonFile;
