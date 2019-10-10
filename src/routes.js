import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteExplorer from "./route-explorer/route-explorer";
import TagExplorer from "./tag-explorer/tag-explorer";
import FlashCards from "./flash-cards/flash-cards";
import ROOTS from "./routes.json";

const Roots = () => (
  <Router>
    <Switch>
      <Route exact path="/route-explorer">
        <RouteExplorer />
      </Route>
      <Route exact path="/tag-explorer">
        <TagExplorer />
      </Route>
      <Route exact path="/flash-cards">
        <FlashCards />
      </Route>
      {ROOTS.map(({ path, content }, index) => (
        <Route key={index} exact path={path}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Route>
      ))}
      <Route path="*">Route does not exist</Route>
    </Switch>
  </Router>
);

export default Roots;
