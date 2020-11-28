import styled from "styled-components";
import { Para, H4 } from "../../component/Typography";
export const OnePlace = styled.div`
  display: flex;
  width: 90%;
  margin: 3rem auto;
  flex-wrap: wrap;
  @media (max-width: 987px) {
    flex-direction: column;
  }
`;

export const WrapperImg = styled.div`
  width: 50%;
  flex: 50%;
  @media (max-width: 987px) {
    flex: 100%;
    width: 100%;
  }
`;
export const TitleImage = styled(H4)`
  font-weight: 700;
  padding-bottom: 1rem;
`;
export const SectionTravel = styled.section`
  text-align: center;
  margin: 3rem 0;
`;
export const ParaImage = styled(Para)`
  font-weight: 400;
  line-height: 2;
`;

export const Info = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1.5rem;
  text-align: left;
`;
