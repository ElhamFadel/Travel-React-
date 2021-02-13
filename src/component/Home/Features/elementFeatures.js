import styled from "styled-components";
import { H4 } from "../../Typography";
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Column = styled.div`
  flex: 33.33333%;
  max-width: 33.33333%;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 990px) {
    flex: 50%;
    max-width: 50%;
  }
  @media (max-width: 767px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const HeadColumn = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
`;
export const Iner = styled.span`
  color: #222;
  font-weight: 400;
  margin-right: 12px;
  font-size: 18px;
`;
export const InerMoon = styled.span`
  font-size: 0.8rem;
  border: 1px solid #ff5722;
  border-radius: 50%;
  padding: 3px;
  background: #ff5722;
  color: #f8e3a1;
  cursor: pointer;
  transition: all 1.5s ease;
  transform: translateX(200px);
`;
export const SpanToggle = styled.span`
  width: 35px;
  height: 17px;
  border: 1px solid #ff5722;
  border-radius: 13px;
  padding: 0px 0px;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  padding: 0;
  box-sizing: content-box;
  background: #bd512f;
  transition: all 0.5s ease;

  ${InerMoon} {
    position: relative;
    left: ${(props) =>
      props.light && props.active === props.id ? "15px" : "0px"};
    background: ${(props) =>
      props.light && props.active === props.id ? "#21133a" : "#ff5722"};
    border: ${(props) =>
      props.light && props.active === props.id
        ? " 1px solid #21133a"
        : " 1px solid  #ff5722"};
  }
`;

export const SectionFeature = styled.div`
  padding: 5rem 0;
`;
export const SingleFeature = styled.div`
  background-color: ${(props) =>
    props.light && props.active === props.id ? "#0d1117" : "#f9f9ff"};
  padding: 20px 25px 10px 25px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;
  position: relative;
  &:hover {
    background-image: -webkit-linear-gradient(0deg, #ffa178 0%, #f26a2e 100%);
  }
  &:hover h4,
  &:hover p,
  &:hover span {
    color: #f9f9ff;
  }
  ${H4} {
    color: ${(props) =>
      props.light && props.active === props.id ? "#fff" : "#000"};
  }
  ${Iner} {
    color: ${(props) =>
      props.light && props.active === props.id ? "#fff" : "#000"};
  }
`;
