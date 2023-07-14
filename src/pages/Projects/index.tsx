import ProjectThumb from "../../components/ProjectThumb";
import { teamProjects, toyProjects } from "../../constants/projecList";
import * as S from "./style";

const Projects = () => {
  return (
    <S.ProjectsContainer>
      <S.ContentBox>
        <S.ContentTitle>Team Projects</S.ContentTitle>
        <S.ProjectList>
          {teamProjects.map((project) => (
            <ProjectThumb
              key={project.id}
              id={project.id}
              name={project.name}
            />
          ))}
        </S.ProjectList>
      </S.ContentBox>
      <S.ContentBox>
        <S.ContentTitle>Toy Projects</S.ContentTitle>
        <S.ProjectList>
          {toyProjects.map((project) => (
            <ProjectThumb
              key={project.id}
              id={project.id}
              name={project.name}
            />
          ))}
        </S.ProjectList>
      </S.ContentBox>
    </S.ProjectsContainer>
  );
};

export default Projects;
