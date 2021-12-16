import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Hjem</NavLink>
      <NavLink to="/">Service</NavLink>
      <NavLink to="/">Om oss</NavLink>
      <NavLink to="/">Kontakt</NavLink>
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
`;
