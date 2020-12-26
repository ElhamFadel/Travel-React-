import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../responsive";
export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "15px 40px" : "10px 32px")};
  color: #fff;
  font-size: "16px";
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s !important;
  text-transform: ${({ Upper }) => (Upper ? "uppercase" : "capitalize")};
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#FFA500" : "#F26A2E")};
    transform: translateY(-2px);
  }

  @media ${device.desktopL} {
    font-size: 2rem;
    margin-top: 4.5rem;
    margin-right: 2rem;
    padding: 20px 45px;
  }
  @media ${device.mobileS} {
    font-size: 0.6rem;
    padding: 12px 30px;
  }
`;
export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
