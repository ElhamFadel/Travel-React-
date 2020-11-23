import styled from "styled-components";
import imag from "../../assets/img/7.jpeg";
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
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  opacity: 0.4;
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
  z-index: 555;
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
export const Head6 = styled.h6`
  color: #fff;
  font-weight: 590;
  font-size: 12px;
`;
