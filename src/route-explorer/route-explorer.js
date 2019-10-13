import React, { useState } from "react";
import styled from "styled-components";
import sortBy from "lodash/sortBy";
import BlankButton from "../components/blank-button";
import DirectoryButton from "../components/directory-button";
import FileButton from "../components/file-button";
import filterRoutesToDisplay from "./filter-routes-to-display";
import transformToDisplayableItems from "./transform-to-displayable-items";

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

  const directoriesAndFilesToDisplay = transformToDisplayableItems(
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
            <DirectoryButton
              key={index + name}
              name={name}
              onClick={() => addToCurrentRoute(name)}
            />
          ) : (
            <FileButton key={index + name} name={name} to={to} />
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

const ItemSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
`;

const CurrentRouteSection = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default RouteExplorer;
