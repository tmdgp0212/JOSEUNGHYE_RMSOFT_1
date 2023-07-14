import { styled } from "styled-components";

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 45px;
    width: 100%;
    max-width: 1400px;
    height: 80px;
    color: #fff;
  }
`;

export const Logo = styled.div`
  position: relative;
  font-weight: 600;

  &::after {
    display: block;
    position: absolute;
    top: 0px;
    right: -10px;
    width: 6px;
    height: 6px;
    background-color: var(--color01);
    border-radius: 50%;
    content: "";
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;
  font-weight: 600;

  .active {
    color: var(--color01);
  }
`;
