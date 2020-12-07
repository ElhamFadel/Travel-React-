import React from "react";
import Container from "../../component/styles/Container";
import { Row, Card, Img, Title } from "./elementFeature";
import { data } from "./dataFeature";
import { Para } from "../../component/Typography";
function Feature() {
  return (
    <Container>
      <Row>
        {data.map((card) => (
          <Card>
            <Img src={card.icon} alt={card.alt} />
            <Title>{card.title}</Title>
            <Para>{card.desc}</Para>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Feature;
