import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Roboto",  Sans-Serif;
    overflow:hidden
  }
`;
export const RowHead = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyle;
