import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import UnstyledLink from "./components/unstyled-link";
import Button from "./components/button";

import Home from "./home/home";
import TagExplorer from "./tag-explorer/tag-explorer";
import FlashCards from "./flash-cards/flash-cards";
import RouteExplorer from "./route-explorer/route-explorer";
import BrowseTags from "./browse-tags/browse-tags";

const ReactRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <RouteWithReturnButton path="/route-explorer">
        <RouteExplorer />
      </RouteWithReturnButton>
      <RouteWithReturnButton path="/tag-explorer">
        <TagExplorer />
      </RouteWithReturnButton>
      <RouteWithReturnButton path="/flash-cards">
        <FlashCards />
      </RouteWithReturnButton>
      <RouteWithReturnButton path="/browse-tags">
        <BrowseTags />
      </RouteWithReturnButton>
      <Route path="*">Route does not exist</Route>
    </Switch>
  </BrowserRouter>
);

const RouteWithReturnButton = ({ path, children }) => (
  <Route path={path}>
    <LayoutWrapper>
      <RouteContent>{children}</RouteContent>
      <Divider />
      <BottomBar>
        <FullLengthLink to="/">
          <Button>Return Home</Button>
        </FullLengthLink>
      </BottomBar>
    </LayoutWrapper>
  </Route>
);

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const RouteContent = styled.div`
  height: 90%;
  overflow: scroll;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

const BottomBar = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullLengthLink = styled(UnstyledLink)`
  width: 100%;
`;

export default ReactRouter;
