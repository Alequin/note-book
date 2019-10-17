import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import UnstyledLink from "./components/unstyled-link";
import Button from "./components/button";

import Home from "./home/home";
import TagExplorer from "./tag-explorer/tag-explorer";
import FlashCards from "./flash-cards/flash-cards";
import RouteExplorer from "./route-explorer/route-explorer";
import BrowseTags from "./browse-tags/browse-tags";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  #root {
    height: 98%;
    width: 95%;
    margin: auto;
    padding: 1% 0 0 0;
  }`;

const ReactRouter = () =>
  console.log(useLocation()) || (
    <BrowserRouter>
      <GlobalStyle />
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
  height: 100%;
`;

const RouteContent = styled.div`
  height: 90%;
  overflow-y: scroll;
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
