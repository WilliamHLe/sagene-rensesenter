import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { menuData } from "../../data/MenuData";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLogo to="/" src={logo} />
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  background: #ffffff;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  padding: 0 calc((100vw - 1300px) / 2);
`;

const NavLogo = styled.img`
  display: flex;
  justify-self: center;
  cursor: pointer;
  margin: auto;
  height: 4vh;
  align-items: center;
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  color: #7e8992;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;

  &:hover {
    color: black;
    border-bottom: 3px solid #3f92d1;
    transition: 0.1s ease-in-out;
  }

  &:active {
    border-bottom: 3px solid #3f92d1;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    justify-self: center;
    align-items: center;
  }
`;
