import React from "react";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { H2, Para, H4 } from "../../component/Typography";
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
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-user"></Iner>
                <H4>Expert Technicians</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-license"></Iner>
                <H4>Professional Service</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-phone"></Iner>
                <H4>Great Support</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-rocket"></Iner>
                <H4>Technical Skills</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-diamond"></Iner>
                <H4>Highly Recomended</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
          <Column>
            <SingleFeature>
              <HeadColumn>
                <Iner className="lnr lnr-bubble"></Iner>
                <H4>Positive Reviews</H4>
              </HeadColumn>
              <Para>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </Para>
            </SingleFeature>
          </Column>
        </Row>
      </Container>
    </SectionFeature>
  );
}

export default Features;
