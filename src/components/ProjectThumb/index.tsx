import * as S from "./style";
import { useState } from "react";
import { useEffect } from "react";

interface ThumbProps {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

const ProjectThumb = ({ id, name, onClick }: ThumbProps) => {
  const [firstIn, setFirstIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstIn(false);
    }, 1500);
  }, []);

  return (
    <S.Thumbnail
      id={id}
      layoutId={id}
      className={id}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: firstIn ? 1.5 : 0.2,
        delay: firstIn ? Math.random() * 0.5 : 0,
      }}
      onClick={() => onClick(id)}
    >
      <div className="filter pointer"></div>
      <div className="title">{name}</div>
    </S.Thumbnail>
  );
};

export default ProjectThumb;
