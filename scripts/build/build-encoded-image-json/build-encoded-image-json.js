const DataURI = require("datauri").promise;
const asyncFlow = require("async-flow");
const fs = require("fs-extra");
const fileNameFromPath = require("file-path/file-name-from-path");
const removeExtensionFromFilePath = require("file-path/remove-extension-from-file-path");
const directoryContentsWithResolvedPaths = require("file-path/directory-contents-with-resolved-paths");
const {
  ASSETS_DIRECTORY,
  IMAGES_JSON_FILE
} = require("../../../config/environment");
const filterImageFiles = require("./filter-image-files");

const fileNamesFromAssetsDirectory = () =>
  directoryContentsWithResolvedPaths(ASSETS_DIRECTORY);

const getImagesDataURIs = imageFiles =>
  Promise.all(
    imageFiles.map(async path => ({
      name: fileNameFromPath(path),
      dataUri: await DataURI(path)
    }))
  );

const mapToJsonFileFormat = imageList =>
  imageList.reduce(
    (imagesMap, { name, dataUri }) => ({
      ...imagesMap,
      [removeExtensionFromFilePath(name)]: dataUri
    }),
    {}
  );

const writeImageJsonFile = imagesMap =>
  fs.writeJsonSync(IMAGES_JSON_FILE, imagesMap);

const buildEncodedImageJson = asyncFlow(
  fileNamesFromAssetsDirectory,
  filterImageFiles,
  getImagesDataURIs,
  mapToJsonFileFormat,
  writeImageJsonFile
);

module.exports = buildEncodedImageJson;
