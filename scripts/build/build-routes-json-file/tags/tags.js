const identifyTags = require("./identify-tags");

const tags = content => {
  const allTags = identifyTags(content);
  return allTags ? allTags.split(",") : [];
};

module.exports = tags;
