import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";
import { menuData } from "../../data/MenuData";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {menuData.map((item, index) => (
          <SidebarLink to={item.link} key={index} onClick={toggle}>
            {item.title}
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
