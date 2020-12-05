import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Roboto",  Sans-Serif;
  }
`;
export const RowHead = styled.div`
  display: flex;
  justify-content: center;
  text-align-last: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  opacity: 0.4;
  z-index: 2;
`;
export const Img = styled.img`
  width: 100%;
`;

export default GlobalStyle;
