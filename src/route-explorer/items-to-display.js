const itemsToDisplay = (routes, directoryDepth) =>
  routes.map(({ name, pathSegments, path }) => {
    const isDirectory = directoryDepth < pathSegments.length - 1;
    return {
      isDirectory,
      name: isDirectory ? pathSegments[directoryDepth] : name,
      to: isDirectory ? null : path
    };
  });

module.exports = itemsToDisplay;
