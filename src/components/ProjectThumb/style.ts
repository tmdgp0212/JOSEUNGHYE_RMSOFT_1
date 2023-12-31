import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Thumbnail = styled(motion.div)<{ id: string }>`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 125px;
  background-color: #eee;
  border-radius: 5px;

  background-image: ${({ id }) => `url("/${id}.png")`};
  background-size: cover;
  background-position: center;

  transition: background-image 0.8s;

  .filter {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .title {
    display: none;
    position: absolute;
  }

  &:hover {
    background-image: ${({ id }) => `url("/${id}.gif")`};

    .filter {
      opacity: 0.5;
    }

    .title {
      display: block;
    }
  }

  &.fine-dust,
  &.moodlog {
    grid-row: span 2;
    height: 100%;
  }
`;
