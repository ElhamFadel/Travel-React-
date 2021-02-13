import styled from "styled-components";
import imag from "../../../assets/img/7.jpeg";
import { FaTimes } from "react-icons/fa";
export const VideoSection = styled.div`
  background-image: url(${imag});
  padding: 100px 0 0px 0;
  position: relative;

  height: 95vh;
  background-repeat: no-repeat;
  background-size: 65rem;
  background-position: bottom;
  width: 1010px;
  @media (max-width: 987px) {
    width: 100%;
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
`;
export const VideoInfo = styled.div`
  margin-top: 120px;
  text-align: right;
  align-self: flex-end;
  position: absolute;
  z-index: 22;
  margin-top: 128px;
  text-align: right;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  z-index: 0;
  right: 3rem;
  @media (max-width: 987px) {
    margin-top: 130px;
  }
`;
export const Head5 = styled.h5`
  padding-bottom: 15px;
  font-size: 15px;
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
  font-size: 12px;
`;
