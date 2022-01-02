import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 8.5vh;
  background: #ffffff;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  padding: 0 calc((100vw - 1300px) / 2);

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;
export const NavIcon = styled.div`
  margin: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavLogo: CSSProperties = {
  display: "flex",
  justifySelf: "center",
  cursor: "pointer",
  margin: "auto",
  height: "4vh",
  zIndex: "999",
};

export const NavLink = styled(Link)`
  display: flex;
  color: #7e8992;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;

  &:hover {
    color: black;
    border-bottom: 4px solid #3f92d1;
    transition: 0.1s ease-in-out;
  }

  &:active {
    border-bottom: 3px solid #3f92d1;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 100%);
  font-size: 1.4rem;
  cursor: pointer;
  height: 3vh;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
