import React, { useState, useEffect } from "react";
import * as B from "../Button";
import Logo from "../../assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavLink, MobileIcon, Li, NavMenu } from "./elementHeader";
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
          {button && (
            <B.Button primary="true" round="true" to="/trips">
              Book a Flight
            </B.Button>
          )}
        </B.NavButton>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </Nav>
    </div>
  );
}

export default Index;
