import React from "react";
import styled from "styled-components";
import ImageAbout from "../../assets/img/about-img.jpg";
import { Para, H3 } from "../../component/Typography";
function index() {
  return (
    <Row>
      <Column>
        <WraperImage>
          <Image></Image>
        </WraperImage>
      </Column>
      <Column>
        <H3>We Realize that there are reduced Wastege Stand out</H3>
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
          standards – especially in the workplace. That’s why it’s crucial that,
          as women.
        </Para>
        <Para>
          inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards – especially in the workplace.
          That’s why it’s crucial that, as women.
        </Para>
      </Column>
    </Row>
  );
}
const Row = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Column = styled.div``;
const WraperImage = styled.div``;
const Image = styled.div`
  background-image: url(${ImageAbout});
`;
export default index;
