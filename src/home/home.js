import React from "react";
import styled from "styled-components";
import UnstyledLink from "../components/unstyled-link";
import Button from "../components/button";
import REACT_ROUTES from "../react-routes";

const Home = () => (
  <FlexBox>
    <HomePageButton to={REACT_ROUTES.flashCards}>Flash Cards</HomePageButton>
    <HomePageButton to={REACT_ROUTES.tagExplorer}>Tag Explorer</HomePageButton>
    <HomePageButton to={REACT_ROUTES.routeExplorer}>
      Route Explorer
    </HomePageButton>
  </FlexBox>
);

const HomePageButton = ({ to, children }) => (
  <BigLink to={to}>
    <BigButton>{children}</BigButton>
  </BigLink>
);

const FlexBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigLink = styled(UnstyledLink)`
  margin: 2rem 0;
`;

const BigButton = styled(Button)`
  padding: 1rem;
  font-size: 1.5rem;
`;

export default Home;
