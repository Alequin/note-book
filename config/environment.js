const path = require("path");
const ROOT_DIR = `${__dirname}/..`;

const isTestEnvironment = process.env.IS_TEST;
const isReactApp = process.title === "browser";

const newPath = ({ forTests, standardPath }) =>
  isTestEnvironment && forTests
    ? path.resolve(`${ROOT_DIR}/${forTests}`)
    : path.resolve(`${ROOT_DIR}/${standardPath}`);

const RAW_NOTES_DIRECTORY = newPath({
  forTests: "./mock-dirs/test-raw-notes",
  standardPath: "./raw-notes"
});

const RAW_FLASH_CARDS_DIRECTORY = newPath({
  forTests: "./mock-dirs/test-raw-flash-cards",
  standardPath: "./raw-flash-cards"
});

const ROUTES_JSON_FILE = newPath({
  forTests: "./mock-dirs/test-routes.json",
  standardPath: "./src/routes.json"
});

const ASSETS_DIRECTORY = newPath({
  forTests: "./mock-dirs/test-assets",
  standardPath: "./assets"
});

const IMAGES_JSON_FILE = newPath({
  forTests: "./mock-dirs/images.json",
  standardPath: `./assets/images.json`
});

const FLASH_CARDS_JSON_FILE = newPath({
  forTests: "./mock-dirs/flash.json",
  standardPath: "./src/flash-cards.json"
});

module.exports = Object.freeze({
  RAW_NOTES_DIRECTORY,
  RAW_FLASH_CARDS_DIRECTORY,
  ROUTES_JSON_FILE,
  ASSETS_DIRECTORY,
  IMAGES_JSON_FILE,
  FLASH_CARDS_JSON_FILE,
  isReactApp
});
