import React from "react";
import styled from "styled-components";
import ImageAbout from "../../assets/img/about-img.jpg";
import { Para, H3 } from "../../component/Typography";
import Container from "../../component/styles/Container";
function index() {
  return (
    <Container>
      <Row>
        <WraperImage>
          <Image></Image>
        </WraperImage>

        <Column>
          <H3>
            We Realize that <br /> there are reduced <br /> Wastege Stand out
          </H3>
          <Para>
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards – especially in the workplace.
            That’s why it’s crucial that, as women.
          </Para>
          <Para>
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards – especially in the workplace.
            That’s why it’s crucial that, as women. inappropriate behavior is
            often laughed off as “boys will be boys,” women face higher conduct
            standards – especially in the workplace. That’s why it’s crucial
            that, as women.
          </Para>
          <Para>
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards – especially in the workplace.
            That’s why it’s crucial that, as women.
          </Para>
        </Column>
      </Row>
    </Container>
  );
}
const Row = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Column = styled.div`
  flex: 60%;
  max-width: 60%;
  box-shadow: 0px 0px 50px 0px rgba(157, 157, 157, 0.3);
  background: #fff;
  padding: 65px 100px 80px 40px;
`;
const WraperImage = styled.div`
  flex: 60%;
  max-width: 60%;
  position: relative;
`;
const Image = styled.div`
  background-image: url(${ImageAbout});
  width: 100%;
  background-size: cover;
  height: 100%;
  z-index: 2;
  margin-top: 99px;
  position: absolute;
  right: -30px;
`;
export default index;
