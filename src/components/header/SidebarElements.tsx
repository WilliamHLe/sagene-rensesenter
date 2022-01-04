import React, { CSSProperties } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "gatsby";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #1c2330;
  display: grid;
  left: 0;
  transition: 0.3s ease-in-out;
  overflow-x: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const ImageItem = styled.div`
  width: 70vw;
`;
export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  margin: 1.5rem 0;
  top: 0;
  justify-content: center;
`;

export const NavLogo: CSSProperties = {
  display: "flex",
  justifySelf: "center",
  cursor: "pointer",
  height: "auto",
  width: "100%",
  zIndex: "999",
};

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;
  font-size: 2.2rem;

  padding: 3px;
  border: 2px solid white;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const Icon = styled.div`
  align-self: center;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #ffffff;

  &:hover {
    color: #3f92d1;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px) 160px;
  text-align: center;
  margin-top: 8rem;
`;
