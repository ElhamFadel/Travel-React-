import styled from "styled-components";
import { Para } from "../../Typography";
export const QuestionSection = styled.div`
  overflow: hidden;
  padding: 5rem 0;
`;
export const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const P = styled(Para)`
  font-size: 14px;
  margin-top: 0.8rem;
`;
export const CounterLeft = styled(Column)`
  text-align: right;
  padding-top: 1rem;
  padding-right: 0px;
  padding-left: 0;
  @media (min-width: 992px) {
    flex: 25%;
    max-width: 25%;
  }
`;
export const Row = styled.div`
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
export const QueContent = styled.div`
  padding-left: 11%;
  padding-right: 17%;
  flex: 75%;
  max-width: 75%;
  @media (max-width: 992px) {
    padding: 0 3%;
  }
`;
export const SingleCount = styled.div`
  margin-bottom: 40px;
`;
export const FontCount = styled.h5`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-top: 15px;
  margin-bottom: 7px;
`;
export const FontNumber = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: #ff5722d4;
`;
export const QueSingle = styled.div`
  margin-bottom: 30px;
`;
