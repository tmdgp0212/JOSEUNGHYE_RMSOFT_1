import ProjectModal from "../../components/ProjectModal";
import ProjectThumb from "../../components/ProjectThumb";
import { teamProjects, toyProjects } from "../../constants/projecList";
import * as S from "./style";
import { useState } from "react";

const Projects = () => {
  const [selectedId, setSelectedId] = useState("");
  const [modalOpen, setIsModalOpen] = useState(false);

  const onClickThumbnail = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  return (
    <S.ProjectsContainer>
      <div className="team">
        <S.ContentTitle>Team Projects</S.ContentTitle>
        <S.ProjectList>
          {teamProjects.map((project) => (
            <ProjectThumb
              key={project.id}
              id={project.id}
              name={project.name}
              onClick={onClickThumbnail}
            />
          ))}
        </S.ProjectList>
      </div>
      <div className="toy">
        <S.ContentTitle>Toy Projects</S.ContentTitle>
        <S.ProjectList>
          {toyProjects.map((project) => (
            <ProjectThumb
              key={project.id}
              id={project.id}
              name={project.name}
              onClick={onClickThumbnail}
            />
          ))}
        </S.ProjectList>
      </div>

      {modalOpen && <ProjectModal id={selectedId} setIsOpen={setIsModalOpen} />}
    </S.ProjectsContainer>
  );
};

export default Projects;
