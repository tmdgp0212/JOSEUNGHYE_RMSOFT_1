import * as S from "./style";
import { NavLink } from "react-router-dom";

const Layout = () => {
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
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </S.Nav>
        </div>
      </S.TopBar>
    </>
  );
};

export default Layout;
