import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import ReactHtmlParser from "react-html-parser";
import UnstyledLink from "./components/unstyled-link";
import Button from "./components/button";

import REACT_ROUTES from "./react-routes";
import Home from "./home/home";
import TagExplorer from "./tag-explorer/tag-explorer";
import FlashCards from "./flash-cards/flash-cards";
import RouteExplorer from "./route-explorer/route-explorer";
import BrowseTags from "./browse-tags/browse-tags";
import BadRoutePage from "./bad-route-page/bad-route-page";

import ROUTES from "./routes.json";

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

const ReactRouter = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path={REACT_ROUTES.baseRoute}>
        <Home />
      </Route>
      <RouteWithReturnButton path={REACT_ROUTES.flashCards}>
        <FlashCards />
      </RouteWithReturnButton>
      <RouteWithReturnButton path={REACT_ROUTES.tagExplorer}>
        <TagExplorer />
      </RouteWithReturnButton>
      <RouteWithReturnButton path={REACT_ROUTES.browseTags}>
        <BrowseTags />
      </RouteWithReturnButton>
      <RouteWithReturnButton path={REACT_ROUTES.routeExplorer}>
        <RouteExplorer />
      </RouteWithReturnButton>
      {ROUTES.map(({ path, content }) => (
        <RouteWithReturnButton
          key={path}
          path={`${REACT_ROUTES.baseRoute}${path}`}
        >
          <>{ReactHtmlParser(content)}</>
        </RouteWithReturnButton>
      ))}
      <RouteWithReturnButton path="*">
        <BadRoutePage />
      </RouteWithReturnButton>
    </Switch>
  </BrowserRouter>
);

const RouteWithReturnButton = ({ path, children }) => (
  <Route path={path}>
    <LayoutWrapper>
      <RouteContent>{children}</RouteContent>
      <Divider />
      <BottomBar>
        <FullLengthLink to={REACT_ROUTES.baseRoute}>
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
