import styled from "styled-components";
import BlankButton from "../components/blank-button";
import { lightGreyBorder } from "../shared-css";

const TagButton = styled(BlankButton)`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0;
  ${lightGreyBorder};
`;

export default TagButton;
