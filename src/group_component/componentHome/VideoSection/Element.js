import styled from "styled-components";
import { imag } from "../../../assets";
import { FaTimes } from "react-icons/fa";
import { device } from "../../component/responsive";
export const VideoSection = styled.div`
  background-image: url(${imag});
  padding: 100px 0 0px 0;
  position: relative;
  height: 95vh;
  background-repeat: no-repeat;
  background-size: 65rem;
  background-position: bottom;
  /* width: 1010px; */
  width: 100%;
  background-size: cover;
  /* @media (max-width: 579px) {
    height: 95vh;
  } */
  @media ${device.tablet} {
    height: 115vh;
  }

  /* @media (max-width: 987px) {
    width: 100%;
  }*/
  /* @media screen and (max-width: 360px) {
    padding: 16rem 0 0px 0;
  } */
  /*
  @media (max-width: 360px) {
    margin-top: 8rem;
  }
  @media (max-width: 768px) {
    padding: 22rem 0 0px 0;
    height: 67vh;
  }
  @media (max-width: 540px) {
    padding: 9rem 0 0px 0;
  } */
  /* @media ${device.tablet} {
    background-size: 47rem;
    width: 100%;
  } */
  @media ${device.mobileS} {
    background-size: 28rem;
    margin-top: 0rem;
    width: 100%;
    padding: 0rem 0 0px 0;
    height: 66vh;
    padding: 8rem 0 0px 0;
  }
`;
export const Fatimes = styled(FaTimes)`
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 9%;
  right: 26%;
  cursor: pointer;
`;
export const Video = styled.iframe`
  width: 50%;
  height: 80vh;
  margin: 2rem auto;
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms;
  z-index: 777;
`;
export const VideoContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  img {
    width: 8rem;
  }
  @media ${device.mobileS} {
    img {
      width: 3rem;
    }
  }
`;
export const VideoInfo = styled.div`
  margin-top: 120px;
  text-align: right;
  align-self: flex-end;
  position: absolute;
  z-index: 22;
  //margin-top: 128px;
  margin-top: 175px;
  text-align: right;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  z-index: 0;
  //right: 3rem;
  right: 5rem;
  @media (max-width: 987px) {
    margin-top: 130px;
  }
  @media ${device.mobileS} {
    visibility: hidden;
  }
`;
export const Head5 = styled.h5`
  padding-bottom: 15px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
`;

export const ContainerModal = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;
export const Head6 = styled.h6`
  color: #fff;
  font-weight: 590;
  font-size: 14px;
`;
