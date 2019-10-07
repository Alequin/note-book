const images = require("assets/images");
const marked = require("marked");
const fileNameFromPath = require("file-path/file-name-from-path");
const removeExtensionFromFilePath = require("file-path/remove-extension-from-file-path");
const findAllImagesInMarkdown = require("./find-all-images-in-markdown");

const markdownToHtml = markdown =>
  mapHtmlImagePathsToDataUri(
    marked(markdown),
    createMarkdownToHtmlImageMap(markdown)
  );

const PATH_REGEX = /\((.+)\)/;
const createMarkdownToHtmlImageMap = markdown => {
  const markdownImages = findAllImagesInMarkdown(markdown);
  return markdownImages.map(markdownImage => {
    const foundImagePathMatch = markdownImage.match(PATH_REGEX);
    const imagePath = foundImagePathMatch[1];
    const imageName = removeExtensionFromFilePath(fileNameFromPath(imagePath));

    return {
      imagePath,
      dataUri: images(imageName)
    };
  });
};

const mapHtmlImagePathsToDataUri = (html, imageMap) =>
  imageMap.reduce(
    (html, { imagePath, dataUri }) => html.replace(imagePath, dataUri),
    html
  );

module.exports = markdownToHtml;
