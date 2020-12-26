import styled from "styled-components";
import { device } from "../../component/responsive";
export const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
  color: #222222;
  font-size: clamp(30px, 2vw, 60px);
  @media ${device.mobileS} {
    font-size: 1.3rem;
  }
  @media (max-width: 987px) {
    text-align: center;
  }

  //font-size: 30px;
`;
export const Para = styled.p`
  margin-bottom: 1rem;
  color: #777777;
  font-family: "Poppins", sans-serif;
  //font-size: 11px;
  font-size: 15px;
  font-weight: 390;
  line-height: 1.555em;
  @media ${device.mobileS} {
    font-size: 10px;
  }
`;
export const H3 = styled.h3`
  padding-bottom: 30px;
  font-size: 25px;
  line-height: 1.3;
  color: #222;
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;
export const H4 = styled.h4`
  font-family: "Poppins", sans-serif;
  color: #222222;
  font-weight: 590;
  font-size: 16px;
`;
export const H6 = styled.h6`
  color: #fff;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 600;
`;
