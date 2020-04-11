import React from "react";
import { useLocation } from "react-router-dom";

const BadRoutePage = () => (
  <>
    <p> Route does not exist</p>
    <p>{JSON.stringify(useLocation())}</p>
  </>
);

export default BadRoutePage;
