import React from "react";
import styled from "styled-components";
import ImageAbout from "../../assets/img/about-img.jpg";
import { Para, H2, H3 } from "../../component/Typography";
import { RowHead } from "../../component/styles/GlobalStyle";
import Container from "../../component/styles/Container";
function index() {
  return (
    <Section>
      <Container>
        <RowHead>
          <H2> Why Choose Us Your Fitness Builder </H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>
        <Row>
          <WraperImage>
            <Image></Image>
          </WraperImage>

          <Column>
            <H3>
              We Realize that <br /> there are reduced <br /> Wastege Stand out
            </H3>
            <Para>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards – especially in the
              workplace. That’s why it’s crucial that, as women.
            </Para>
            <Para>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards – especially in the
              workplace. That’s why it’s crucial that, as women. inappropriate
              behavior is often laughed off as “boys will be boys,” women face
              higher conduct standards – especially in the workplace. That’s why
              it’s crucial that, as women.
            </Para>
            <Para>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards – especially in the
              workplace. That’s why it’s crucial that, as women.
            </Para>
          </Column>
        </Row>
      </Container>
    </Section>
  );
}
const Row = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Section = styled.div`
  padding: 120px 0;
`;
const Column = styled.div`
  flex: 60%;
  max-width: 60%;
  box-shadow: 0px 0px 50px 0px rgba(157, 157, 157, 0.3);
  background: #fff;
  padding: 55px 88px 80px 60px;
`;
const WraperImage = styled.div`
  flex: 50%;
  max-width: 50%;
  z-index: 2;
  position: relative;
`;
const Image = styled.div`
  background-image: url(${ImageAbout});
  width: 107%;
  background-size: cover;
  height: 100%;
  z-index: 2;
  margin-top: 90px;
  position: absolute;
  right: -30px;
`;
export default index;
