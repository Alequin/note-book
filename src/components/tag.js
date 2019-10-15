import React from "react";
import styled from "styled-components";
import BlankButton from "./blank-button";

const Tag = ({ children, onClick, large, highlight }) => (
  <Button large={large} highlight={highlight} onClick={onClick}>
    {highlight ? <strong>{children}</strong> : children}
  </Button>
);

const Button = styled(BlankButton)`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 1px solid black;

  ${({ large }) =>
    large &&
    `
    font-size: 1rem;
    padding: 0.75rem;
    margin: 0.3rem;
  `}

  ${({ highlight }) => highlight && "text-decoration: underline"}
`;

export default Tag;
