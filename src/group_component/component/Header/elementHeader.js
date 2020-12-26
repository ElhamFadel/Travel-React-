import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../responsive";
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  padding: 0 1rem;
`;
export const NavLink = styled(Link)`
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  padding: 20px;
  text-decoration: none;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media ${device.desktopL} {
    font-size: 1.7rem;
    padding: 0 30px;
    padding-top: 5rem;
  }
  @media ${device.laptop} {
    font-size: 13px;
  }
  img {
    @media ${device.laptopL} {
      width: 10rem;
    }
    @media ${device.laptop} {
      width: 8.5rem;
    }
    @media ${device.mobileS} {
      width: 7rem;
    }
    @media ${device.desktopL} {
      width: 20rem;
    }
  }
`;

export const MobileIcon = styled.div`
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
  @media ${device.mobileS} {
    top: 10px;
    font-size: 1.2rem;
  }
  @media ${device.mobileM} {
    top: 10px;
    font-size: 1.2rem;
  }
  height: 20px;
`;

export const Li = styled.li`
  list-style-type: none;
`;
export const NavMenu = styled.ul`
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
