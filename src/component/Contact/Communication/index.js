import React from "react";
import { H4 } from "../../component/Typography";
import Container from "../../component/styles/Container";
import { comminWay } from "./data";
import {
  Section,
  WrapCards,
  CardCom,
  WrapIcon,
  SpanLink,
  StyledLink,
  // LinkStyle,
} from "./elementCard";
function Communication() {
  return (
    <Section className="concatWay">
      <Container>
        <WrapCards>
          {comminWay.map((card) => (
            <CardCom>
              <WrapIcon>{card.IconComponent}</WrapIcon>
              <H4>{card.title} </H4>
              <SpanLink>
                <StyledLink to="/">{card.way1}</StyledLink>
              </SpanLink>
              <SpanLink>
                <StyledLink to="/">{card.way2}</StyledLink>
              </SpanLink>
            </CardCom>
          ))}
        </WrapCards>
      </Container>
    </Section>
  );
}

export default Communication;
