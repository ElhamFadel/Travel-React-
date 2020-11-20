import React from "react";
import styled from "styled-components";
import Container from "../../component/styles/Container";
import { H2, Para, H4 } from "../../component/Typography";

function index() {
  return (
    <Container>
      <>
        <H2>Some Features that Made us Unique</H2>
        <Para>Who are in extremely love with eco friendly system.</Para>
      </>
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
  );
}
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Column = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const SingleFeature = styled.div`
  background-color: #f9f9ff;
  padding: 30px 30px 15px 30px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;
const HeadColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
const Iner = styled.span`
  color: #222;
  font-weight: 400;
  margin-right: 12px;
  font-size: 18px;
`;
// background-image: -webkit-linear-gradient(0deg, #f07d4a 0%, #F26A2E 100%);

export default index;
