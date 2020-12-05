import React from "react";
import { RowHead } from "../../component/styles/GlobalStyle";
import CountUp from "react-countup";
import { H2, Para } from "../../component/Typography";
import {
  QuestionSection,
  CounterLeft,
  P,
  Row,
  SingleCount,
  FontNumber,
  QueContent,
  QueSingle,
  FontCount,
} from "./ElementQuestion";
//her i use react-countup library
function Question() {
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

export default Question;
