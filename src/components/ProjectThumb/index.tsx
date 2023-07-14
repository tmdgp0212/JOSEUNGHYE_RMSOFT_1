import * as S from "./style";

interface ThumbProps {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

const ProjectThumb = ({ id, name, onClick }: ThumbProps) => {
  return (
    <S.Thumbnail
      id={id}
      layoutId={id}
      className={id}
      onClick={() => onClick(id)}
    >
      <div className="filter pointer"></div>
      <div className="title">{name}</div>
    </S.Thumbnail>
  );
};

export default ProjectThumb;
