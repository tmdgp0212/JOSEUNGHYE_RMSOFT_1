import { projectDetail } from "../../constants/projectDetail";
import { AnimatePresence } from "framer-motion";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import * as S from "./style";

interface ModalProps {
  id: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal = ({ id, setIsOpen }: ModalProps) => {
  const project = projectDetail.find((project) => project.id === id);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      <S.ModalContainer onClick={closeModal}>
        <S.Modal layoutId={id}>
          <S.Thumbnail>
            <div className="preview">preview</div>
            <img src={`/${id}.gif`} alt={id} />
          </S.Thumbnail>
          <S.Detail>
            <div className="links">
              <a href={project?.demoSite} target="_blank" className="demo">
                <BsLink45Deg />
              </a>
              <a href={project?.github} target="_blank" className="github">
                <BsGithub />
              </a>
            </div>
            <div className="title">{project?.name}</div>
            <div className="row">
              <div className="category">작업인원</div>
              <div className="content">{project?.worker}</div>
            </div>
            <div className="row">
              <div className="category">작업기간</div>
              <div className="content">{project?.duration}</div>
            </div>
            <div className="row">
              <div className="category">사용기술</div>
              <ul className="content">
                {project?.language.map((lan) => (
                  <li>{lan}</li>
                ))}
              </ul>
            </div>
            <div className="row">
              <div className="category">라이브러리</div>
              <ul className="content">
                {project?.library.map((lib) => (
                  <span>{lib}</span>
                ))}
              </ul>
            </div>
            <div className="summary">
              <div className="category">프로젝트 소개</div>
              <p className="content">{project?.summary}</p>
            </div>
            <div className="works">
              <div className="category">상세 역할</div>
              {project?.works.map((item) => (
                <p className="content">{item}</p>
              ))}
            </div>
          </S.Detail>
        </S.Modal>
      </S.ModalContainer>
    </AnimatePresence>
  );
};

export default ProjectModal;
