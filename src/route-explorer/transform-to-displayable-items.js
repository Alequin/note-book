const { uniqBy, flow } = require("lodash");

const removeDuplicateItems = items => uniqBy(items, "name");

const transformToDisplayableItems = (routes, directoryDepth) =>
  routes.map(({ name, pathSegments, path }) => {
    const isDirectory = directoryDepth < pathSegments.length - 1;
    return isDirectory
      ? {
          isDirectory,
          name: pathSegments[directoryDepth]
        }
      : {
          isDirectory,
          name,
          to: path
        };
  });

module.exports = flow(
  transformToDisplayableItems,
  removeDuplicateItems
);
