const fs = require("fs-extra");

const readMarkdownFile = filePath => {
  const fileBuffer = fs.readFileSync(filePath);
  return fileBuffer.toString();
};

module.exports = readMarkdownFile;
