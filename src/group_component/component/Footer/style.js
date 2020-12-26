import styled from "styled-components";
import { Para } from "../Typography";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  padding: 85px 0;
  background-color: #222222;
`;
export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const FooterColumn = styled.div`
  flex: 41.66667%;
  max-width: 41.66667%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 987px) {
    flex: 50%;
    max-width: 50%;
  }
  @media (max-width: 542px) {
    flex: 100%;
    max-width: 100%;
  }
`;
export const FooterColumnSmall = styled(FooterColumn)`
  flex: 16.66667%;
  max-width: 16.66667%;
  @media (max-width: 542px) {
    flex: 100%;
    max-width: 100%;
    margin-top: 3rem;
  }
`;
export const Input = styled.input`
  border: none;
  /* width: 34%; */
  font-weight: 300;
  background: #191919;
  color: #777;
  padding-left: 20px;
  border-radius: 0;
  font-size: 11px;
  display: inline-block;
  margin-left: 1rem;
  width: auto;
  vertical-align: middle;
`;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;
export const ParaForm = styled(Para)`
  color: #777777;
`;
export const ButtonArrow = styled.button`
  color: #fff;
  border-radius: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 6px 9px;
  border: 0;
  background: #ff5722;
`;
export const LinkIcon = styled(Link)`
  padding-right: 15px;
  font-size: 14px;
  color: #cccccc;
  &:hover {
    color: #ff5722;
  }
`;
export const HeartIcon = styled(Link)`
  padding-right: 0px;
  font-size: 11px;
  color: #ff5722;
  text-decoration: none;
`;
