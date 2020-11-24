import styled from "styled-components";
import ImageAbout from "../../assets/img/about-img.jpg";
export const Row = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Section = styled.div`
  padding: 120px 0;
`;
export const Column = styled.div`
  flex: 50%;
  max-width: 50%;
  box-shadow: 0px 0px 50px 0px rgba(157, 157, 157, 0.3);
  background: #fff;
  padding: 55px 88px 80px 60px;
  box-sizing: initial;
`;
export const WraperImage = styled.div`
  flex: 50%;
  max-width: 50%;
  z-index: 2;
  position: relative;
  margin-top: 120px;
  box-sizing: initial;
`;
export const Image = styled.div`
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  height: auto;
  background-image: url(${ImageAbout});
`;
