import styled from "styled-components";
import image from "../../assets/img/about.jpeg";
import { Para, H3 } from "../../component/Typography";
export const ImageHero = styled.div`
  background-image: url(${image});
  position: relative;

  height: 120vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  @media (max-width: 987px) {
    width: 100%;
  }
`;
export const NH3 = styled(H3)`
  color: #222222c7;
`;
export const Wrapper = styled.div`
  width: 35%;
  margin: 1.2rem auto;

  &:before {
    content: " ";
    border-bottom: 2px solid #ff5722;
    width: 9%;
    height: 2.7rem;
    position: absolute;
  }
`;
export const NPara = styled(Para)`
  margin-bottom: 1rem;
  color: #fff;
  font-size: 14px;
`;
