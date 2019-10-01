import React, { useState } from "react";
import styled from "styled-components";
import filterRoutesToDisplay from "./filter-routes-to-display";
import itemsToDisplay from "./items-to-display";
import ROOTS from "../routes.json";

const RouteExplorer = () => {
  const [currentRoute, setCurrentRoute] = useState([]);

  const directoriesAndFilesToDisplay = itemsToDisplay(
    filterRoutesToDisplay(currentRoute, ROOTS),
    currentRoute.length
  );

  return null;
};

export default RouteExplorer;
