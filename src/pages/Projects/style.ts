import { styled } from "styled-components";
import { PageContainer } from "../../style/Container";

export const ProjectsContainer = styled(PageContainer)`
  gap: 180px;
`;

export const ContentBox = styled.div``;

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

  .test {
    width: 215px;
    height: 115px;
    background-color: #eee;
    border-radius: 5px;
  }
`;
