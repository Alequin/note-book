const fs = require("fs");
const flow = require("lodash/flow");
const { RAW_FLASH_CARDS_DIRECTORY } = require("../config/environment");

const getFileNameFromConsoleArgs = () => process.argv[2];

const validateFileName = fileName => {
  if (!fileName)
    throw new Error("File name must be provided as a console argument");
  return fileName;
};

const getPathsForBothQuestionAndAnswerFiles = fileName => {
  const pathWithoutFileExtension = `${RAW_FLASH_CARDS_DIRECTORY}/${fileName}`;
  return [
    `${pathWithoutFileExtension}.question.md`,
    `${pathWithoutFileExtension}.answer.md`
  ];
};

const makeNewFlashCardFiles = filePaths => filePaths.forEach(fs.writeFileSync);

flow(
  getFileNameFromConsoleArgs,
  validateFileName,
  getPathsForBothQuestionAndAnswerFiles,
  makeNewFlashCardFiles
)();
