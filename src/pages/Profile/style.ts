import { styled } from "styled-components";
import { PageContainer } from "../../style/Container";
import { motion } from "framer-motion";

export const ProfileContainer = styled(PageContainer)`
  gap: 100px;
  line-height: 1.6;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 25px;
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

export const Name = styled.div`
  user-select: none;

  h1 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 16px;
  }

  p {
    font-size: 14px;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  column-gap: 15px;

  .address {
    grid-column: span 2;
  }

  .category {
    margin-right: 5px;
    font-weight: 600;
  }
`;

export const Stack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  user-select: none;
`;

export const Item = styled.div`
  .category {
    color: #7e7e7e;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    max-width: 40vw;
    font-size: 14px;

    &.column {
      flex-direction: column;
      gap: 10px;
    }

    li {
      white-space: nowrap;
    }
  }
`;
