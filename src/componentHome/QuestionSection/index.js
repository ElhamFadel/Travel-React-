import React from "react";
import styled from "styled-components";
import { RowHead } from "../../component/styles/GlobalStyle";
import { Para, H2 } from "../../component/Typography";
import CountUp from "react-countup";

function index() {
  return (
    <div className="questionSection">
      <RowHead>
        <H2>Some Features that Made us Unique</H2>
        <Para>Who are in extremely love with eco friendly system.</Para>
      </RowHead>
      <RowHead>
        <CountUp start={59} end={5962} />
        <br />
        <CountUp start={23} end={2394} />
        <br />
        <CountUp start={14} end={1439} />
        <br />
        <CountUp start={9} end={933} />
      </RowHead>
    </div>
  );
}

export default index;
const CounterLeft = styled.div`
  text-align: right;
`;
const QueContent = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;
const QueSingle = styled.div`
  margin-bottom: 30px;
`;
