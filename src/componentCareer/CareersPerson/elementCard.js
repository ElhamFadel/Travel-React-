import styled from "styled-components";
import { H3, H4, Para } from "../../component/Typography";
export const CardCareer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.667%;
  margin-bottom: 1rem;
  @media (max-width: 987px) {
    flex: 50%;
    width: 50%;
    padding-right: 1rem;
  }
  @media (max-width: 500px) {
    flex: 100%;
    width: 100%;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding-top: 2rem;
`;
export const WraperInfo = styled.div`
  background: #fff;
  padding: 1rem;
  text-align: -webkit-left;
`;
export const CareerPerson = styled.div`
  background: #f4f4f4;
  padding-top: 5rem;

  text-align: -webkit-center;
`;
export const WraperImage = styled.div``;
export const H3card = styled(H3)`
  padding-bottom: 7px;
  padding-top: 7px;
  font-size: 22px;
  line-height: 1.3;
`;
export const H4card = styled(H4)`
  font-size: 12px;
`;
export const ParaCard = styled(Para)`
  line-height: 2em;
  font-weight: 300;
`;
