const getDate = require("./get-date");

const markDownLastModifiedDate = (newMarkdownFile, lastJsonFile) => {
  const previousMarkdownFile =
    lastJsonFile &&
    lastJsonFile.find(({ path }) => path === newMarkdownFile.path);

  const shouldUseTodayAsLastModified =
    !previousMarkdownFile ||
    previousMarkdownFile.content !== newMarkdownFile.content;

  return shouldUseTodayAsLastModified
    ? getDate()
    : previousMarkdownFile.lastModified;
};

module.exports = markDownLastModifiedDate;
