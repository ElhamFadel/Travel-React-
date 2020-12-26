import React from "react";
import { H4 } from "../../component/Typography";
import Container from "../../component/styles/Container";
import { comminWay } from "./data";
import * as E from "./elementCard";
function Communication() {
  return (
    <E.Section className="concatWay">
      <Container>
        <E.WrapCards>
          {comminWay.map((card, _index) => (
            <E.CardCom key={`Card_${_index}`}>
              <E.WrapIcon>{card.IconComponent}</E.WrapIcon>
              <H4>{card.title} </H4>
              <E.SpanLink>
                <E.StyledLink to="/">{card.way1}</E.StyledLink>
              </E.SpanLink>
              <E.SpanLink>
                <E.StyledLink to="/">{card.way2}</E.StyledLink>
              </E.SpanLink>
            </E.CardCom>
          ))}
        </E.WrapCards>
      </Container>
    </E.Section>
  );
}

export default Communication;
