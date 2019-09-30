import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ROOTS from "./routes.json";

const Roots = () => (
  <Router>
    {ROOTS.map(({ path, content }, index) => (
      <Route
        key={index}
        exact
        path={path}
        render={() => <div>{content}</div>}
      />
    ))}
  </Router>
);

export default Roots;
