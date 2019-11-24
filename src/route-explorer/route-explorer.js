import React, { useState } from "react";
import styled from "styled-components";
import sortBy from "lodash/sortBy";
import BlankButton from "../components/blank-button";
import ItemGrid from "../components/item-grid";
import DirectoryButton from "../components/directory-button";
import FileButton from "../components/file-button";
import filterRoutesToDisplay from "./filter-routes-to-display";
import transformToDisplayableItems from "./transform-to-displayable-items";

import REACT_ROUTES from "../react-routes";
import ROUTES from "../routes.json";

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
    filterRoutesToDisplay(currentRoute, ROUTES),
    currentRoute.length
  );

  return (
    <>
      <button onClick={resetToInitialRoute}>Return to route directory</button>
      <CurrentRoute
        currentRoute={currentRoute}
        stepCurrentRouteBackBy={stepCurrentRouteBackBy}
      />
      <ItemGrid>
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
            <FileButton
              key={index + name}
              name={name}
              to={`${REACT_ROUTES.baseRoute}${to}`}
            />
          )
        )}
      </ItemGrid>
    </>
  );
};

const CurrentRoute = ({ currentRoute, stepCurrentRouteBackBy }) => (
  <CurrentRouteSection>
    Current Path: /
    {currentRoute.map((pathSegment, index) => (
      <BlankButton
        key={pathSegment}
        onClick={() => stepCurrentRouteBackBy(-index)}
      >
        {pathSegment}/
      </BlankButton>
    ))}
  </CurrentRouteSection>
);

const CurrentRouteSection = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default RouteExplorer;
