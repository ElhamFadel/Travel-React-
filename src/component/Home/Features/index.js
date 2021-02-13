import React, { useState } from "react";
import Container from "../../styles/Container";
import { RowHead } from "../../styles/GlobalStyle";
import { H2, Para, H4 } from "../../Typography";
import { dataFeatuer } from "./dataFeatures";
import {
  SectionFeature,
  Row,
  Column,
  SingleFeature,
  Iner,
  HeadColumn,
  SpanToggle,
  InerMoon,
} from "./elementFeatures";

function Features() {
  const [light, isLight] = useState(true);
  const [activeId, setId] = useState(-1);
  const toggle = () => isLight(!light);
  return (
    <SectionFeature>
      <Container>
        <RowHead>
          <H2>Some Features that Made us Unique</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>
        <Row>
          {dataFeatuer.map((feature, index) => (
            <Column key={`feature-${index}`}>
              <SingleFeature light={light} active={activeId} id={index}>
                <HeadColumn>
                  <Iner className={feature.classIcon} />
                  <H4>{feature.title}</H4>
                  <SpanToggle
                    light={light}
                    id={index}
                    active={activeId}
                    onClick={() => {
                      setId(index);
                      toggle();
                    }}
                  >
                    <InerMoon className="lnr lnr-moon" />
                  </SpanToggle>
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
