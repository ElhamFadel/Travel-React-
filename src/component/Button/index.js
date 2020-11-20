import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "13px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#FFA500" : "#F26A2E")};
    transform: translateY(-2px);
  }
`;
export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
