import React from "react";
import Container from "../../component/styles/Container";
import { Row, Card, Img, Title, WrapperImage } from "./elementFeature";
import { data } from "./dataFeature";
import { Para } from "../../component/Typography";
function Feature() {
  return (
    <Container>
      <Row>
        {data.map((card, index) => (
          <Card key={index}>
            <WrapperImage>
              <Img src={card.icon} alt={card.alt} />
            </WrapperImage>
            <Title>{card.title}</Title>
            <Para>{card.desc}</Para>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Feature;
