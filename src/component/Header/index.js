import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as B from "../Button";
import Logo from "../../assets/img/logo.png";
import { FaBars } from "react-icons/fa";
function index() {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <NavMenu>
          <Li>
            <NavLink to="/">Home</NavLink>
          </Li>
          <Li>
            <NavLink to="/about">About</NavLink>
          </Li>
          <Li>
            <NavLink to="/trips">Trips</NavLink>
          </Li>
          <Li>
            <NavLink to="/careers">Careers</NavLink>
          </Li>
          <Li>
            <NavLink to="/contact">Contact</NavLink>
          </Li>
        </NavMenu>
        <B.NavButton>
          <B.Button primary="true" round="true" to="/trips">
            Book a Flight
          </B.Button>
        </B.NavButton>
        <Bars />
      </Nav>
    </div>
  );
}
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1300px) / 2);
  z-index: 100;
  position: relative;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;
`;
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const Li = styled.li`
  list-style-type: none;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default index;
