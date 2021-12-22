import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { menuData } from "../data/MenuData";

const Navbar = () => {
  return (
    <Nav>
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
      ))}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  background: lightgrey;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
`;

const NavLink = styled(Link)`
  display: flex;
  color: #7e8992;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
`;
