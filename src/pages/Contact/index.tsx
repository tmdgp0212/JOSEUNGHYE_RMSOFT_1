import CardContainer from "../../components/common/CardContainer";
import * as S from "./style";
import { useRef, useState } from "react";

const Contact = () => {
  const copyRef = useRef<HTMLDivElement>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copy = async (text: string, name: string) => {
    await window.navigator.clipboard.writeText(text);

    if (!copyRef.current) return;
    copyRef.current.textContent = `${name}가 복사되었습니다.`;

    setShowCopyMessage(true);

    setTimeout(() => {
      setShowCopyMessage(false);
    }, 1500);
  };

  const MessageHidden = {
    hidden: { bottom: 80, opacity: 0 },
    visible: { bottom: -45, opacity: 0 },
  };

  const MessageShow = {
    hidden: { bottom: -45, opacity: 0 },
    visible: { bottom: 80, opacity: 1 },
  };

  return (
    <S.ContactContainer>
      <CardContainer>
        <S.ContactCard>
          <div className="message">Click to copy</div>
          <div className="contacts">
            <div className="category">Tel.</div>
            <div
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => copy("01053903029", "연락처")}
              className="content pointer"
            >
              010.5390.3029
            </div>
            <div className="category">Email.</div>
            <div
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => copy("tmdgp0212@naver.com", "메일주소")}
              className="content pointer"
            >
              tmdgp0212@naver.com
            </div>
            <div className="category">Github.</div>
            <a
              href="https://github.com/tmdgp0212"
              target="_blank"
              className="content pointer"
            >
              https://github.com/tmdgp0212
            </a>
          </div>
        </S.ContactCard>
      </CardContainer>

      <div className="title">CONTACT ME.</div>

      <S.CopyMessage
        ref={copyRef}
        variants={showCopyMessage ? MessageShow : MessageHidden}
        initial="hidden"
        animate="visible"
      ></S.CopyMessage>
    </S.ContactContainer>
  );
};

export default Contact;
