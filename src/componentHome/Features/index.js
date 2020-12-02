import React from "react";
import styled from "styled-components";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { H2, Para, H4 } from "../../component/Typography";

function index() {
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
const SectionFeature = styled.div`
  padding: 5rem 0;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Column = styled.div`
  flex: 33.33333%;
  max-width: 33.33333%;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 990px) {
    flex: 50%;
    max-width: 50%;
  }
  @media (max-width: 767px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const SingleFeature = styled.div`
  background-color: #f9f9ff;
  padding: 20px 25px 10px 25px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;
  &:hover {
    background-image: -webkit-linear-gradient(0deg, #ffa178 0%, #f26a2e 100%);
  }
  &:hover h4,
  &:hover p,
  &:hover span {
    color: #f9f9ff;
  }
`;
const HeadColumn = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
`;
const Iner = styled.span`
  color: #222;
  font-weight: 400;
  margin-right: 12px;
  font-size: 18px;
`;
// background-image: -webkit-linear-gradient(0deg, #f07d4a 0%, #F26A2E 100%);

export default index;
