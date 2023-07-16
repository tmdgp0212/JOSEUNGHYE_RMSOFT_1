import { styled } from "styled-components";
import { PageContainer } from "../../style/Container";
import { motion } from "framer-motion";

export const ContactContainer = styled(PageContainer)`
  flex-direction: column;
  gap: 40px;
`;

export const ContactCard = styled.div`
  .message {
    grid-column: span 2;
    margin-bottom: 45px;
    color: var(--color02);
    text-align: right;
    user-select: none;
  }

  .contacts {
    display: grid;
    grid-template-columns: 65px 1fr;
    row-gap: 10px;

    .content {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CopyMessage = styled(motion.div)`
  position: fixed;
  left: 50%;
  margin-left: -110px;
  bottom: 80px;
  padding: 10px 15px;
  width: 220px;
  height: 45px;
  line-height: 1.6;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;
