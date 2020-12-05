import React from "react";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { H2, Para, H4 } from "../../component/Typography";
import { dataFeatuer } from "./dataFeatures";
import {
  SectionFeature,
  Row,
  Column,
  SingleFeature,
  Iner,
  HeadColumn,
} from "./elementFeatures";

function Features() {
  return (
    <SectionFeature>
      <Container>
        <RowHead>
          <H2>Some Features that Made us Unique</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>
        <Row>
          {dataFeatuer.map((feature) => (
            <Column>
              <SingleFeature>
                <HeadColumn>
                  <Iner className={feature.classIcon}></Iner>
                  <H4>{feature.title}</H4>
                </HeadColumn>
                <Para>{feature.Para}</Para>
              </SingleFeature>
            </Column>
          ))}
        </Row>
      </Container>
    </SectionFeature>
  );
}

export default Features;
