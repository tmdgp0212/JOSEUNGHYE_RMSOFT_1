import { styled } from "styled-components";

export const Pattern = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 18%);
  background-size: 3px 3px;
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 10%, 1) 3px
    ),
    linear-gradient(90deg, hsla(0, 0%, 0%, 0) 0, hsla(0, 0%, 10%, 1) 5px);
`;
