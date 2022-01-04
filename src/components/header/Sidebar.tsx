import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  NavLogo,
  Wrapper,
  ImageItem,
} from "./SidebarElements";
import { menuData } from "../../data/MenuData";
import { StaticImage } from "gatsby-plugin-image";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Wrapper>
        <ImageItem>
          <StaticImage src="../../images/logo.png" alt="logo" style={NavLogo} />
        </ImageItem>
      </Wrapper>
      <SidebarMenu>
        {menuData.map((item, index) => (
          <SidebarLink
            to={item.link}
            key={index}
            activeStyle={{ color: "#3f92d1" }}
            onClick={toggle}
          >
            {item.title}
          </SidebarLink>
        ))}
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
