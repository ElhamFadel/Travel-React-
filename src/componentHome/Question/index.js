import React from "react";
import styled from "styled-components";
import { RowHead } from "../../component/styles/GlobalStyle";
import { Para, H2 } from "../../component/Typography";
import CountUp from "react-countup";

function index() {
  return (
    <QuestionSection>
      <RowHead>
        <H2>Frequently Asked Questions</H2>
        <P>Who are in extremely love with eco friendly system.</P>
      </RowHead>
      <Row>
        <CounterLeft>
          <SingleCount>
            <FontNumber>
              <CountUp start={59} end={5962} />
            </FontNumber>
            <Para>Projects Completed</Para>
          </SingleCount>

          <SingleCount>
            <FontNumber>
              <CountUp start={23} end={2394} />
            </FontNumber>
            <Para>New Projects</Para>
          </SingleCount>

          <SingleCount>
            <FontNumber>
              <CountUp start={14} end={1439} />
            </FontNumber>
            <Para>Tickets Submitted</Para>
          </SingleCount>

          <SingleCount>
            <FontNumber>
              <CountUp start={9} end={933} />
            </FontNumber>
            <Para>Cup of Coffee</Para>
          </SingleCount>
        </CounterLeft>
        <QueContent>
          <QueSingle>
            <FontCount>ARE YOUR TEMPLATES RESPONSIVE?</FontCount>
            <P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </P>
          </QueSingle>
          <QueSingle>
            <FontCount>ARE YOUR TEMPLATES RESPONSIVE?</FontCount>
            <P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </P>
          </QueSingle>
          <QueSingle>
            <FontCount>ARE YOUR TEMPLATES RESPONSIVE?</FontCount>
            <P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </P>
          </QueSingle>
        </QueContent>
      </Row>
    </QuestionSection>
  );
}

export default index;
const QuestionSection = styled.div`
  overflow: hidden;
  padding: 5rem 0;
`;
const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
const P = styled(Para)`
  font-size: 14px;
  margin-top: 0.8rem;
`;
const CounterLeft = styled(Column)`
  text-align: right;
  padding-top: 1rem;
  padding-right: 0px;
  padding-left: 0;
  @media (min-width: 992px) {
    flex: 25%;
    max-width: 25%;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: row;
  padding-bottom: 50px;
  @media (max-width: 992px) {
    justify-content: center;
    text-align-last: center;
    text-align: center;
  }
`;
const QueContent = styled.div`
  padding-left: 11%;
  padding-right: 17%;
  flex: 75%;
  max-width: 75%;
  @media (max-width: 992px) {
    padding: 0 3%;
  }
`;
const SingleCount = styled.div`
  margin-bottom: 40px;
`;
const FontCount = styled.h5`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-top: 15px;
  margin-bottom: 7px;
`;
const FontNumber = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: #ff5722d4;
`;
const QueSingle = styled.div`
  margin-bottom: 30px;
`;
