import React from "react";
import { Para, H2, H3 } from "../../component/Typography";
import { RowHead } from "../../component/styles/GlobalStyle";
import Container from "../../component/styles/Container";
import { Section, Row, Column, Image, WraperImage } from "./element";
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

export default index;
