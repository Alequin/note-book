const path = require("path");

const isTestEnvironment = process.env.IS_TEST;

const newFile = ({ forTests, standardPath }) =>
  isTestEnvironment ? path.resolve(forTests) : path.resolve(standardPath);

const RAW_NOTES_DIRECTORY = isTestEnvironment
  ? path.resolve("./test-raw-notes")
  : path.resolve("./raw-notes");

const ROUTES_JSON_FILE = newFile({
  forTests: "./test-routes.json",
  standardPath: "./src/routes.json"
});

module.exports = Object.freeze({
  RAW_NOTES_DIRECTORY,
  ROUTES_JSON_FILE
});
