const markdownImageRegex = /!\[.*\]\(.*\)/g;
const findAllImagesInMarkdown = markdown =>
  markdown.match(markdownImageRegex) || [];
module.exports = findAllImagesInMarkdown;
