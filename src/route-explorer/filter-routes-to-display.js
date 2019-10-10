const filterRoutesToDisplay = (currentRoute, routes) =>
  currentRoute.length <= 0
    ? routes
    : routes.filter(
        ({ pathSegments }) =>
          isPathSegmentInRange(currentRoute, pathSegments) &&
          isRouteOnTheCurrentRoute(currentRoute, pathSegments)
      );

const isPathSegmentInRange = (currentRoute, pathSegments) =>
  currentRoute.length <= pathSegments.length;

const isRouteOnTheCurrentRoute = (currentRoute, pathSegments) =>
  currentRoute.every(
    (currentRouteSegment, segmentIndex) =>
      currentRouteSegment === pathSegments[segmentIndex]
  );

module.exports = filterRoutesToDisplay;
