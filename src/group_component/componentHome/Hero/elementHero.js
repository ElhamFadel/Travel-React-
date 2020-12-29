import styled from "styled-components";
import { device } from "../../component/responsive";
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Layer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-height: 100%;
  margin-left: 3rem;
  @media ${device.mobileM} {
    margin-left: 0rem;
  }
  /* @media screen and (max-width: 360px) {
    margin-left: 0;
  }
  @media screen and (max-width: 411px) {
    margin-left: 0;
  } */
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  line-height: 1.1;
  height: 100vh;
  color: #fff;
  padding: 0;
  text-align: center;
  font-weight: bold;
  justify-content: flex-end;
  height: 16rem;
  margin-top: 3.5rem;
  margin-right: 1rem;
  @media ${device.desktopL} {
    margin-top: 20rem;
  }
  @media ${device.mobileS} {
    margin: 0rem;
  }
`;
export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 5rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-family: "Dancing Script", cursive;
  font-weight: bolder;
  @media ${device.desktopL} {
    font-size: 8rem;
  }
  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;
export const HeroP = styled.p`
  margin-bottom: 2rem;

  font-size: 15px;
  width: 70%;
  line-height: 1.7;
  font-weight: 300;
  @media ${device.desktopL} {
    font-size: 27px;
  }
  @media ${device.mobileS} {
    font-size: 10px;
  }
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  padding: 0 1rem;
  height: 100vh;
  margin-top: -80px;
  @media ${device.mobileS} {
  }
`;
