import Container from "../styles/Container";
import React from "react";
import { H6 } from "../Typography";
import {
  Footer,
  FooterRow,
  FooterColumn,
  Input,
  SocialIcons,
  ParaForm,
  FooterColumnSmall,
  ButtonArrow,
  LinkIcon,
  HeartIcon,
} from "./style";
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
    <Footer>
      <Container>
        <FooterRow>
          <FooterColumn>
            <H6>About Us</H6>
            <ParaForm>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </ParaForm>
            <ParaForm>
              Copyright ©2020 All rights reserved | This template is made with
              {"  "}
              <HeartIcon to="/">
                <FaRegHeart />
              </HeartIcon>
              {"  "}
              by <HeartIcon to="/"> Colorlib</HeartIcon>
            </ParaForm>
          </FooterColumn>
          <FooterColumn>
            <H6>Newsletter</H6>
            <ParaForm>Stay update with our latest</ParaForm>
            <FooterRow>
              <Input
                placeholder="Enter Email "
                type="email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter Email")}
              />
              <ButtonArrow>
                <FaArrowRight />
              </ButtonArrow>
            </FooterRow>
          </FooterColumn>
          <FooterColumnSmall>
            <H6>Follow Us</H6>
            <ParaForm>Let us be social</ParaForm>
            <SocialIcons>
              <LinkIcon to="/">
                <FaFacebookF />
              </LinkIcon>
              <LinkIcon to="/">
                <FaTwitter />
              </LinkIcon>
              <LinkIcon to="/">
                <FaDribbble />
              </LinkIcon>
              <LinkIcon to="/">
                <FaBehance />
              </LinkIcon>
            </SocialIcons>
          </FooterColumnSmall>
        </FooterRow>
      </Container>
    </Footer>
  );
}

export default FooterSection;
