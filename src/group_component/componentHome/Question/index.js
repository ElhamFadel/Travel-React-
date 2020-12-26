import React from "react";
import { RowHead } from "../../component/styles/GlobalStyle";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { H2, Para } from "../../component/Typography";
import * as S from "./ElementQuestion";
//her i use react-countup library
function Question() {
  const countUpRef = React.useRef(null);
  return (
    <S.QuestionSection>
      <RowHead>
        <H2>Frequently Asked Questions</H2>
        <S.P>Who are in extremely love with eco friendly system.</S.P>
      </RowHead>
      <S.Row>
        <S.CounterLeft>
          <S.SingleCount>
            <S.FontNumber>
              <CountUp
                start={59}
                end={5962}
                redraw={true}
                countUpRef={countUpRef}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.FontNumber>
            <Para>Projects Completed</Para>
          </S.SingleCount>

          <S.SingleCount>
            <S.FontNumber>
              <CountUp
                start={23}
                end={2394}
                redraw={true}
                countUpRef={countUpRef}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.FontNumber>
            <Para>New Projects</Para>
          </S.SingleCount>

          <S.SingleCount>
            <S.FontNumber>
              <CountUp
                start={14}
                end={1439}
                redraw={true}
                countUpRef={countUpRef}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.FontNumber>
            <Para>Tickets Submitted</Para>
          </S.SingleCount>

          <S.SingleCount>
            <S.FontNumber>
              <CountUp
                start={9}
                end={933}
                redraw={true}
                countUpRef={countUpRef}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.FontNumber>
            <Para>Cup of Coffee</Para>
          </S.SingleCount>
        </S.CounterLeft>
        <S.QueContent>
          <S.QueSingle>
            <S.FontCount>ARE YOUR TEMPLATES RESPONSIVE?</S.FontCount>
            <S.P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </S.P>
          </S.QueSingle>
          <S.QueSingle>
            <S.FontCount>ARE YOUR TEMPLATES RESPONSIVE?</S.FontCount>
            <S.P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </S.P>
          </S.QueSingle>
          <S.QueSingle>
            <S.FontCount>ARE YOUR TEMPLATES RESPONSIVE?</S.FontCount>
            <S.P>
              “Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior. While men’s borderline-inappropriate
              behavior.
            </S.P>
          </S.QueSingle>
        </S.QueContent>
      </S.Row>
    </S.QuestionSection>
  );
}

export default Question;
