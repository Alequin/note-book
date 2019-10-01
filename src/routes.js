import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouteExplorer from "./route-explorer/route-explorer";
import ROOTS from "./routes.json";

const Roots = () => (
  <Router>
    <Route path="/route-explorer">
      <RouteExplorer />
    </Route>
    {ROOTS.map(({ path, content }, index) => (
      <Route key={index} exact path={path}>
        <div>{content}</div>
      </Route>
    ))}
  </Router>
);

export default Roots;
