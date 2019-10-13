import { css } from "styled-components";

export const lightGreyBorder = css`
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  &:active {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
