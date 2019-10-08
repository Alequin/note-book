import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sortBy from "lodash/sortBy";
import filterRoutesToDisplay from "./filter-routes-to-display";
import itemsToDisplay from "./items-to-display";

import images from "assets/images";
import ROOTS from "../routes.json";

const useCurrentRoute = () => {
  const [currentRoute, setCurrentRoute] = useState([]);

  const addToCurrentRoute = newRouteSegment =>
    setCurrentRoute([...currentRoute, newRouteSegment]);

  const resetToInitialRoute = () => setCurrentRoute([]);
  const stepCurrentRouteBackBy = amount =>
    setCurrentRoute(currentRoute.slice(0, -amount));

  return {
    currentRoute,
    addToCurrentRoute,
    resetToInitialRoute,
    stepCurrentRouteBackBy
  };
};

const RouteExplorer = () => {
  const {
    currentRoute,
    addToCurrentRoute,
    resetToInitialRoute,
    stepCurrentRouteBackBy
  } = useCurrentRoute();

  const directoriesAndFilesToDisplay = itemsToDisplay(
    filterRoutesToDisplay(currentRoute, ROOTS),
    currentRoute.length
  );

  return (
    <>
      <button onClick={resetToInitialRoute}>Return to route directory</button>
      <CurrentRoute
        currentRoute={currentRoute}
        stepCurrentRouteBackBy={stepCurrentRouteBackBy}
      />
      <ItemSection>
        {sortBy(
          directoriesAndFilesToDisplay,
          ({ isDirectory }) => !isDirectory
        ).map(({ isDirectory, name, to }, index) =>
          isDirectory ? (
            <Directory
              key={index + name}
              name={name}
              onClick={() => addToCurrentRoute(name)}
            />
          ) : (
            <File key={index + name} name={name} to={to}></File>
          )
        )}
      </ItemSection>
    </>
  );
};

const CurrentRoute = ({ currentRoute, stepCurrentRouteBackBy }) => (
  <CurrentRouteSection>
    Current Path: /
    {currentRoute.map((pathSegment, index) => (
      <BlankButton onClick={() => stepCurrentRouteBackBy(-index)}>
        {pathSegment}/
      </BlankButton>
    ))}
  </CurrentRouteSection>
);

const Directory = ({ name, onClick }) => (
  <Item name={name} onClick={onClick} image={images("folder")} />
);
const File = ({ name, to }) => (
  <Link to={to}>
    <Item name={name} image={images("file")} />
  </Link>
);

const Item = ({ name, onClick, image }) => (
  <ItemBox onClick={onClick}>
    <img src={image}></img>
    <p>Name: {name}</p>
  </ItemBox>
);

const ItemSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
`;

const CurrentRouteSection = styled.p`
  display: flex;
  alignitems: center;
  font-size: 1rem;
`;

const BlankButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 1rem;
`;

const ItemBox = styled(BlankButton)`
  text-align: center;
  width: 100%;
  padding: 0;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  &:active {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default RouteExplorer;