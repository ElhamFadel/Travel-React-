import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as B from "../Button";
import Logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
function Index() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //In the first moment
  useEffect(() => {
    showButton();
  }, []);
  //after resize for window
  window.addEventListener("resize", showButton);

  return (
    <div>
      <Nav>
        <NavLink to="/" onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" />
        </NavLink>
        <NavMenu click={click}>
          <Li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/trips" onClick={closeMobileMenu}>
              Trips
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/careers" onClick={closeMobileMenu}>
              Careers
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </Li>
        </NavMenu>
        <B.NavButton>
          <B.Button primary="true" round="true" to="/trips">
            Book a Flight
          </B.Button>
        </B.NavButton>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
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

const MobileIcon = styled.div`
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

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export default Index;
