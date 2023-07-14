import * as S from "./style";

interface ThumbProps {
  id: string;
  name: string;
}

const ProjectThumb = ({ id, name }: ThumbProps) => {
  return (
    <S.Thumbnail id={id} className={id}>
      <div className="filter"></div>
      <div className="title">{name}</div>
    </S.Thumbnail>
  );
};

export default ProjectThumb;
