const BASE_ROUTE = "/note-book";

const newRoute = route => `${BASE_ROUTE}${route}`;

const REACT_ROUTES = Object.freeze({
  home: BASE_ROUTE,
  flashCards: newRoute("/flash-cards"),
  tagExplorer: newRoute("/tag-explorer"),
  browseTags: newRoute("/browse-tags"),
  routeExplorer: newRoute("/route-explorer")
});

export default REACT_ROUTES;
