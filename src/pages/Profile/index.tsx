import * as S from "./style";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.Card>
        <S.Name>
          <h1>조승혜</h1>
          <p className="job">Frontend Developer</p>
        </S.Name>
        <S.Info>
          <p className="mobile">
            <span className="category">M.</span>
            <span>010.5390.3029</span>
          </p>
          <p className="birth">
            <span className="category">B.</span>
            <span>1995. 02. 12</span>
          </p>

          <p className="email">
            <span className="category">E.</span>
            <span>tmdgp0212@naver.com</span>
          </p>
          <p className="address">
            <span>서울특별시 관악구 봉천동 국회단지 18길</span>
          </p>
        </S.Info>
        <motion.div
          className="line row top"
          initial={{ opacity: 0, right: 50 }}
          animate={{ opacity: 1, right: -25 }}
          transition={{
            delay: 0.1,
            duration: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="line row bottom"
          initial={{ opacity: 0, left: 50 }}
          animate={{ opacity: 1, left: -25 }}
          transition={{
            delay: 0.1,
            duration: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="line column right"
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: -25 }}
          transition={{
            delay: 0.1,
            duration: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="line column left"
          initial={{ opacity: 0, bottom: 50 }}
          animate={{ opacity: 1, bottom: -25 }}
          transition={{
            delay: 0.1,
            duration: 1.5,
          }}
        ></motion.div>
      </S.Card>
      <S.Stack
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.8,
        }}
      >
        <S.Item>
          <div className="category">Language</div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
          </ul>
        </S.Item>
        <S.Item>
          <div className="category">Library & Framework</div>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>jQuery</li>
            <li>redux</li>
            <li>axios</li>
            <li>react-query</li>
            <li>framer-motion</li>
            <li>styled-components</li>
            <li>Scss</li>
            ...
          </ul>
        </S.Item>
        <S.Item>
          <div className="category">Experience</div>
          <ul className="column">
            <li>
              22.06.07 - 22.10.26 <br />
              이젠컴퓨터아카데미 UI/UX 웹퍼블리셔 양성 과정 수강
            </li>
            <li>
              22.12.12 - 23.06.30 <br />
              패스트캠퍼스 프론트엔드 중급 부트캠프 수강
            </li>
          </ul>
        </S.Item>
        <S.Item>
          <div className="category">Goals</div>
          <ul>
            <li>소통과 배려를 중시하며,사용자 친화적 서비스를 추구합니다</li>
          </ul>
        </S.Item>
      </S.Stack>
    </S.ProfileContainer>
  );
};

export default Profile;
