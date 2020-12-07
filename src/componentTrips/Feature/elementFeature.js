import styled from "styled-components";
import { H4 } from "../../component/Typography";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-items: space-between;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 0;
`;

export const Card = styled.div`
  flex: 30.333333%;
  max-width: 30.333333%;
  text-align: center;

  @media screen and (max-width: 992px) {
    flex: 50%;
    max-width: 50%;
  }
`;
export const Title = styled(H4)`
  color: #212529;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0.5rem;
`;
export const Img = styled.img`
  height: 100px;
  width: 55px;
  line-height: 123px;
  border: 1px solid #5d5e5e;
  display: block;
  margin: 0 auto;
  position: relative;
  padding: 9px;
  border: 0;
  &:after {
    height: 10px;
    display: block;
    width: 100px;
    background: #000;
    border-right: 1px solid #000;
    content: " ";
    top: 0;
    position: relative;
    z-index: 100000;
  }
  &::before {
  }
`;
