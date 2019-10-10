const asyncFlow = require("async-flow");

const buildJsonFiles = asyncFlow(
  require("./build-routes-json-file/build-routes-json-file"),
  require("./build-flash-cards-json-file/build-flash-cards-json-file"),
  require("./build-encoded-image-json/build-encoded-image-json")
);

if (require.main === module) buildJsonFiles();
module.exports = buildJsonFiles;
