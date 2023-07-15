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
  padding: 10px;
  width: 920px;
  background-color: #2e2e2e;
  border-radius: 5px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 960px) {
    width: 480px;
  }
`;

export const Thumbnail = styled.div`
  padding: 25px;
  padding-right: 0;
  width: 400px;
  flex-shrink: 0;

  @media (max-width: 960px) {
    display: none;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Detail = styled.div`
  overflow: auto;
  padding: 25px;
  min-height: 300px;
  max-height: 80vh;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color01);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

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
      flex-shrink: 0;
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
    white-space: pre-wrap;

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
