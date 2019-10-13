import React from "react";
import styled from "styled-components";
import BlankButton from "./blank-button";
import { lightGreyBorder } from "../shared-css";

const ItemButton = ({ name, onClick, image }) => (
  <Button onClick={onClick}>
    <img src={image} alt={name}></img>
    <p>Name: {name}</p>
  </Button>
);

const Button = styled(BlankButton)`
  text-align: center;
  width: 100%;
  padding: 0;
  background: transparent;
  font-size: 1rem;
  ${lightGreyBorder};
`;

export default ItemButton;
