import styled from "styled-components";
import { device } from "../../component/responsive";
export const Section = styled.div`
  padding: 100px 0 45px 0;
  background-color: #f9f9ff;
  overflow: hidden;
  margin: 1rem 0;
`;
export const Item = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
  @media ${device.mobileS} {
    width: 95%;
  }
`;
export const Image = styled.img`
  display: block;
  padding-bottom: 3rem;
`;
