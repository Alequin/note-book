const { flatten } = require("lodash");
const directoryContentsWithResolvedPaths = require("file-path/directory-contents-with-resolved-paths");
const identifyFilesAndDirectories = require("./identify-directories-and-files");

const allFilesInDirectory = async directory => {
  if (!directory) return [];
  const { files, directories } = await identifyFilesAndDirectories(
    directoryContentsWithResolvedPaths(directory)
  );
  return flatten([
    files,
    ...(await Promise.all(directories.map(allFilesInDirectory)))
  ]);
};

module.exports = allFilesInDirectory;
