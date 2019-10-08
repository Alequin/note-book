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

  return {
    currentRoute,
    addToCurrentRoute
  };
};

const RouteExplorer = () => {
  const { currentRoute, addToCurrentRoute } = useCurrentRoute();

  const directoriesAndFilesToDisplay = itemsToDisplay(
    filterRoutesToDisplay(currentRoute, ROOTS),
    currentRoute.length
  );

  return (
    <>
      <CurrentRoute currentRoute={currentRoute} />
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

const CurrentRoute = ({ currentRoute }) => (
  <p>Current Path: /{currentRoute.join("/")}</p>
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

const ItemBox = styled.button`
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
