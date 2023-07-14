import { styled } from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
`;

export const Modal = styled(motion.div)`
  display: flex;
  gap: 25px;
  padding: 25px;
  width: 920px;
  background-color: #2e2e2e;
  border-radius: 5px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 960px) {
    width: 480px;
  }
`;

export const Thumbnail = styled.div`
  width: 400px;

  @media (max-width: 960px) {
    display: none;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Detail = styled.div`
  .title {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
  }

  .category {
    color: #7e7e7e;
  }

  .row {
    display: flex;
    line-height: 1.6;

    .category {
      margin-right: 8px;
      width: 80px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
    }
  }

  .summary {
    margin: 20px 0 10px;

    .category {
      margin-bottom: 8px;
    }
  }

  .works {
    .category {
      margin-bottom: 8px;
    }

    p {
      line-height: 1.6;
    }
  }
`;
