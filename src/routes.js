import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteExplorer from "./route-explorer/route-explorer";
import ROOTS from "./routes.json";

const Roots = () => (
  <Router>
    <Switch>
      <Route exact path="/route-explorer">
        <RouteExplorer />
      </Route>
      {ROOTS.map(({ path, content }, index) => (
        <Route key={index} exact path={path}>
          <div>{content}</div>
        </Route>
      ))}
      <Route path="*">Route does not exist</Route>
    </Switch>
  </Router>
);

export default Roots;
