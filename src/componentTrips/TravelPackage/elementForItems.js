import styled, { keyframes } from "styled-components";

import { Para, H4 } from "../../component/Typography";

const leftToRight = keyframes`
   0% {transform: translateX(-500px) }
   60%{transform: translateX(0px)}
   80%{transform: translateX(5px)}
`;
const RightToLeft = keyframes`
 0% {transform: translateX(0px) }
  100%{transform: translateX(1000px)}
`;

export const OnePlace = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 90%;
  margin: 3rem auto;
  flex-wrap: wrap;
  animation-duration: 1s;
  animation-delay: "3s";
  animation-name: ${(props) => (props.animate ? leftToRight : RightToLeft)};
  visibility: ${(props) => (props.delay ? "visible" : "hidden")};
  animation-iteration-count: linear;
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
  overflow: hidden;
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
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-items: space-between;
  align-items: center;
  justify-content: space-around;
  .active {
    background: #9d9d9d !important;
    color: #fff !important;
  }
`;
