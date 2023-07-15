import * as S from "./style";
import { NavLink, useMatch } from "react-router-dom";

const Layout = () => {
  const homeMatch = useMatch("/");
  const projectsMatch = useMatch("/projects");
  const contactMatch = useMatch("/contact");

  return (
    <>
      <S.TopBar>
        <div className="container">
          <S.Logo>Seunghye Portfolio</S.Logo>
          <S.Nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
              {homeMatch && <S.Circle layoutId="circle" />}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
              {projectsMatch && <S.Circle layoutId="circle" />}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
              {contactMatch && <S.Circle layoutId="circle" />}
            </NavLink>
          </S.Nav>
        </div>
      </S.TopBar>
    </>
  );
};

export default Layout;
