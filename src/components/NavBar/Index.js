import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Best Team</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLink to="about">About</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="discover">Discover</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="service">Service</NavLink>
            </NavItems>
            <NavItems>
              <NavLink to="signup">SignUp</NavLink>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
