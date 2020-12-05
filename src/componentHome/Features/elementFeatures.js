import styled from "styled-components";
export const SectionFeature = styled.div`
  padding: 5rem 0;
`;
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

export const SingleFeature = styled.div`
  background-color: #f9f9ff;
  padding: 20px 25px 10px 25px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;
  &:hover {
    background-image: -webkit-linear-gradient(0deg, #ffa178 0%, #f26a2e 100%);
  }
  &:hover h4,
  &:hover p,
  &:hover span {
    color: #f9f9ff;
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
