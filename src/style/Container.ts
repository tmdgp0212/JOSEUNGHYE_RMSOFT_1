import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 80px;
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  min-height: 500px;

  @media (max-width: 1080px) {
    height: 100%;
    padding-top: 140px;
    padding-bottom: 80px;
  }
`;
