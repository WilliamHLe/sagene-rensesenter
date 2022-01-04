import React from "react";
import { menuData } from "../../data/MenuData";
import { StaticImage } from "gatsby-plugin-image";
import {
  Bars,
  LogoLink,
  Nav,
  NavIcon,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavIcon>
        <LogoLink to="/">
          <StaticImage src="../../images/logo.png" alt="logo" style={NavLogo} />
        </LogoLink>
      </NavIcon>
      <NavIcon>
        <Bars onClick={toggle} />
      </NavIcon>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} activeStyle={{ color: "black" }} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
