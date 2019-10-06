const fs = require("fs-extra");
const { IMAGES_JSON_FILE, ROUTES_JSON_FILE } = require("../config/environment");
const paths = require("./scripts-config/paths");

/**
 * Remove all content created by previous builds
 */
const removeOldBuildFiles = () =>
  [paths.appBuild, paths.rootHtml, IMAGES_JSON_FILE, ROUTES_JSON_FILE].forEach(
    deleteIfExists
  );

const deleteIfExists = dir => fs.existsSync(dir) && fs.removeSync(dir);

if (require.main === module) removeOldBuildFiles();
module.exports = removeOldBuildFiles;
