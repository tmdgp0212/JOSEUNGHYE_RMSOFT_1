import { styled } from "styled-components";
import { PageContainer } from "../../style/Container";

export const ProjectsContainer = styled(PageContainer)`
  gap: 10%;

  @media (max-width: 1080px) {
    gap: 5%;
  }

  .toy {
    @media (max-width: 960px) {
      margin-top: 48px;
    }
  }
`;

export const ContentTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
