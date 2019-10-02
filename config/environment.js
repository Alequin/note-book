const path = require("path");
const ROOT_DIR = `${__dirname}/..`;

const isTestEnvironment = process.env.IS_TEST;

const newPath = ({ forTests, standardPath }) =>
  isTestEnvironment && forTests
    ? path.resolve(`${ROOT_DIR}/${forTests}`)
    : path.resolve(`${ROOT_DIR}/${standardPath}`);

const RAW_NOTES_DIRECTORY = newPath({
  forTests: "./mock-dirs/test-raw-notes",
  standardPath: "./raw-notes"
});

const ROUTES_JSON_FILE = newPath({
  forTests: "./mock-dirs/test-routes.json",
  standardPath: "./src/routes.json"
});

const ASSETS_DIRECTORY = newPath({
  forTests: "./mock-dirs/test-assets",
  standardPath: "./assets"
});

module.exports = Object.freeze({
  RAW_NOTES_DIRECTORY,
  ROUTES_JSON_FILE,
  ASSETS_DIRECTORY
});
