import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import MenuButton from "./components/MenuButton";
import Nav from "./components/Nav";
import NavBrand from "./components/NavBrand";
import NavItem from "./components/NavItem";
import NavList from "./components/NavList";

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
