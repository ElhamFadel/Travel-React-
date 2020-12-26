import Container from "../styles/Container";
import React from "react";
import { H6 } from "../Typography";
import * as S from "./style";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaDribbble,
  FaRegHeart,
  FaArrowRight,
} from "react-icons/fa";
function FooterSection() {
  return (
    <S.Footer>
      <Container>
        <S.FooterRow>
          <S.FooterColumn>
            <H6>About Us</H6>
            <S.ParaForm>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </S.ParaForm>
            <S.ParaForm>
              Copyright ©2020 All rights reserved | This template is made with
              {"  "}
              <S.HeartIcon to="/">
                <FaRegHeart />
              </S.HeartIcon>
              {"  "}
              by <S.HeartIcon to="/"> Colorlib</S.HeartIcon>
            </S.ParaForm>
          </S.FooterColumn>
          <S.FooterColumn>
            <H6>Newsletter</H6>
            <S.ParaForm>Stay update with our latest</S.ParaForm>
            <S.FooterRow>
              <S.Input
                placeholder="Enter Email "
                type="email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter Email")}
              />
              <S.ButtonArrow>
                <FaArrowRight />
              </S.ButtonArrow>
            </S.FooterRow>
          </S.FooterColumn>
          <S.FooterColumnSmall>
            <H6>Follow Us</H6>
            <S.ParaForm>Let us be social</S.ParaForm>
            <S.SocialIcons>
              <S.LinkIcon to="/">
                <FaFacebookF />
              </S.LinkIcon>
              <S.LinkIcon to="/">
                <FaTwitter />
              </S.LinkIcon>
              <S.LinkIcon to="/">
                <FaDribbble />
              </S.LinkIcon>
              <S.LinkIcon to="/">
                <FaBehance />
              </S.LinkIcon>
            </S.SocialIcons>
          </S.FooterColumnSmall>
        </S.FooterRow>
      </Container>
    </S.Footer>
  );
}

export default FooterSection;
