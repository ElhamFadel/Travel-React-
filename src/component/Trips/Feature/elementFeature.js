import styled from "styled-components";
import { H4 } from "../../Typography";

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
export const WrapperImage = styled.div`
  position: relative;
  &:after {
    height: 65px;
    display: block;
    width: 65px;
    content: " ";
    position: absolute;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 0px 0px;
    bottom: 1rem;
    left: 6.5rem;
  }
  &::before {
    height: 75px;
    display: block;
    width: 75px;
    content: " ";
    position: absolute;
    border: 1px solid #000;
    border-radius: 50%;
    bottom: 0.655rem;
    left: 6.15555rem;
  }
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
`;
