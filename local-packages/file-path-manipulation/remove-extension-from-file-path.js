const removeExtensionFromFilePath = filePath => filePath.replace(/\..*$/, "");
module.exports = removeExtensionFromFilePath;
