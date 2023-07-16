import { ReactNode } from "react";
import * as S from "./style";
import { motion } from "framer-motion";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <S.CardContainer>
      {children}
      <motion.div
        className="line row top"
        initial={{ opacity: 0, right: 50 }}
        animate={{ opacity: 1, right: -25 }}
        transition={{
          delay: 0.1,
          duration: 1.5,
        }}
      ></motion.div>
      <motion.div
        className="line row bottom"
        initial={{ opacity: 0, left: 50 }}
        animate={{ opacity: 1, left: -25 }}
        transition={{
          delay: 0.1,
          duration: 1.5,
        }}
      ></motion.div>
      <motion.div
        className="line column right"
        initial={{ opacity: 0, top: 50 }}
        animate={{ opacity: 1, top: -25 }}
        transition={{
          delay: 0.1,
          duration: 1.5,
        }}
      ></motion.div>
      <motion.div
        className="line column left"
        initial={{ opacity: 0, bottom: 50 }}
        animate={{ opacity: 1, bottom: -25 }}
        transition={{
          delay: 0.1,
          duration: 1.5,
        }}
      ></motion.div>
    </S.CardContainer>
  );
};

export default CardContainer;
