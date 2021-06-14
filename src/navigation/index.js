import styled, { css } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import NavBrand from "./components/NavBrand";
import { sizer } from "../utility/Utils";

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown((state) => !state);
  };

  return (
    <Header isMenuShown={isMenuShown}>
      <Nav>
        <Link to="/">
          <NavBrand />
        </Link>
        <MenuButton toggleMenu={toggleMenu} />
        <NavList isMenuShown={isMenuShown}>
          <NavItem>
            <Link to="/characters" onClick={() => toggleMenu()}>
              Characters
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/locations" onClick={() => toggleMenu()}>
              Locations
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/episodes" onClick={() => toggleMenu()}>
              Episodes
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </Header>
  );
}

export default NavBar;

const Header = styled.header`
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  background: white;
  ${(props) =>
    props.isMenuShown
      ? css`
          position: absolute;
          height: 100vh;
          width: 100vw;
        `
      : css``}
`;

const Nav = styled.nav`
  ${sizer(
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 6px 28px;
    `,
    css`
      padding: 12px 210px;
    `
  )}
`;

const NavList = styled.ul`
  ${sizer(
    css`
      display: ${(props) => (props.isMenuShown ? "flex" : "none")};
      padding: 0px;
      margin: 0px;
      flex-direction: column;
      flex-basis: 100%;
      align-items: center;
      list-style-type: none;
    `,
    css`
      height: fit-content;
      width: fit-content;
      flex-basis: content;
      display: flex;
      flex-direction: row;
    `
  )}
`;

const NavItem = styled.li`
  ${sizer(
    css`
      font-family: "Karla";
      font-weight: bold;
      font-size: 24px;
      margin: 48px 0px;
      &:last-child,
      &:first-child {
        margin: 0px;
      }
    `,
    css`
      font-size: 18px;
      margin: 0px 24px;
    `
  )}
`;
