import React, { useState } from "react";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { H2, Para, H4 } from "../../component/Typography";
import { dataFeatuer } from "./dataFeatures";
import * as E from "./elementFeatures";

function Features() {
  const [light, isLight] = useState(true);
  const [activeId, setId] = useState(-1);
  const toggle = () => isLight(!light);
  return (
    <E.SectionFeature>
      <Container>
        <RowHead>
          <H2>Some Features that Made us Unique</H2>
          <Para>Who are in extremely love with eco friendly system.</Para>
        </RowHead>
        <E.Row>
          {dataFeatuer.map((feature, index) => (
            <E.Column key={`feature-${index}`}>
              <E.SingleFeature light={light} active={activeId} id={index}>
                <E.HeadColumn>
                  <E.Iner className={feature.classIcon} />
                  <H4>{feature.title}</H4>
                  <E.SpanToggle
                    light={light}
                    id={index}
                    active={activeId}
                    onClick={() => {
                      setId(index);
                      toggle();
                    }}
                  >
                    <E.InerMoon className="lnr lnr-moon" />
                  </E.SpanToggle>
                </E.HeadColumn>
                <Para>{feature.Para}</Para>
              </E.SingleFeature>
            </E.Column>
          ))}
        </E.Row>
      </Container>
    </E.SectionFeature>
  );
}

export default Features;
