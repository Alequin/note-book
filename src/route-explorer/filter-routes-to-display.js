const filterRoutesToDisplay = (currentRoute, routes) => {
  if (currentRoute.length <= 0) return routes;
  return routes.filter(
    ({ pathSegments }) =>
      isPathSegmentInRange(currentRoute, pathSegments) &&
      doPathsContainMatchingElements(currentRoute, pathSegments)
  );
};

const isPathSegmentInRange = (currentRoute, pathSegments) =>
  currentRoute.length <= pathSegments.length;

const doPathsContainMatchingElements = (currentRoute, pathSegments) =>
  currentRoute.every(
    (currentRouteSegment, segmentIndex) =>
      currentRouteSegment === pathSegments[segmentIndex]
  );

module.exports = filterRoutesToDisplay;
