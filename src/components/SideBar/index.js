import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";
const index = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="discover" onClick={toggle}>
            Discover
          </SidebarLinks>
          <SidebarLinks to="service" onClick={toggle}>
            Service
          </SidebarLinks>
          <SidebarLinks to="signup" onClick={toggle}>
            Sign Up
          </SidebarLinks>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signIn">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;
