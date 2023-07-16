import { styled } from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  padding: 30px 40px;

  .line {
    position: absolute;
    background-color: #fff;

    &.row {
      height: 1px;
      width: 200px;

      &.top {
        top: 0;
        right: -20px;
      }
      &.bottom {
        bottom: 0;
        left: -20px;
      }
    }

    &.column {
      width: 1px;
      height: 200px;

      &.left {
        bottom: -20px;
        left: 0;
      }
      &.right {
        top: -20px;
        right: 0;
      }
    }
  }
`;
