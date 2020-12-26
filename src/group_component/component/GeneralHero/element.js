import styled from "styled-components";
import { Overlay } from "../../component/styles/GlobalStyle";
export const HeroImage = styled.div`
  background-image: url(${(props) => props.src});
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  @media (max-width: 987px) {
    width: 100%;
  }
`;
export const OverLayComn = styled(Overlay)`
  opacity: 0.6;
`;
export const H1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 5rem);
  margin-bottom: 1.5rem;
  -webkit-letter-spacing: 3px;
  -moz-letter-spacing: 3px;
  -ms-letter-spacing: 3px;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-family: "Dancing Script", cursive;
  font-weight: bolder;
  text-align: -webkit-center;
  margin-top: 15rem;
  color: #fff;
`;
