import styled from "styled-components";
import { ImageAbout } from "../../../assets";
import { device } from "../../component/responsive";

export const Row = styled.div`
  margin-top: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
  position: relative;
  justify-content: flex-end;
  /* @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  } */
  @media ${device.mobileS} {
    justify-content: flex-end;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    margin: 0;
    flex-wrap: wrap-reverse;
  }
`;
export const Section = styled.div`
  padding: 120px 0;
  @media ${device.mobileS} {
    padding: 40px 0;
  }
`;
export const Column = styled.div`
  -webkit-flex: 50%;
  -ms-flex: 50%;
  -webkit-flex: 100;
  -ms-flex: 100;
  flex: 100;
  max-width: 57%;
  box-shadow: 0px 0px 50px 0px rgba(157, 157, 157, 0.3);
  background: #fff;
  padding: 65px 120px 80px 75px;
  //padding: 55px 115px 80px 70px;
  box-sizing: border-box;
  @media ${device.mobileS} {
    padding: 10px 22px;
    max-width: 100%;
  }
  @media ${device.mobileL} {
    padding: 65px 25px 80px 25px;
    max-width: 100%;
  }
  @media ${device.tablet} {
    padding: 65px 40px 80px 60px;
  }

  /* @media ${device.tablet} {
    padding: 55px 35px 35px 57px;
  } */

  /* @media screen and (max-width: 990px) {
    position: relative;
    max-width: 100%;
    flex: 100%;
  }
  @media screen and (max-width: 360px) {
    padding: 55px 30px 80px 23px;
  } */
`;
export const WraperImage = styled.div`
  max-width: 50%;
  position: absolute;
  margin-top: 120px;
  box-sizing: initial;
  padding: 0;
  margin-top: 120px;
  height: 100vh;
  width: 93vh;
  z-index: 22;
  top: -26px;
  left: 0rem;
  /* @media screen and (max-width: 990px) {
    position: relative;
    max-width: 100%;
  } */
  @media ${device.mobileS} {
    max-width: 100%;
    position: relative;
  }
  @media ${device.mobileL} {
    max-width: 100%;
    margin-top: 45px;
    position: relative;
  }
`;
export const Image = styled.div`
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  height: auto;
  background-image: url(${ImageAbout});
  height: 100vh;
  width: 100%;
  background-size: cover;
  /* @media screen and (max-width: 1024px) {
    height: 35vh;
    width: 97%;
  } */
  /* @media screen and (min-width: 1024px) {
    height: 35vh;
    width: 97%;
  } */
`;
