import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardCom = styled.div`
  display: flex;
  flex-direction: column;
  flex: 33.333%;
  max-width: 30%;
  text-align: center;
  background: #eee;
  margin: 0 2.5rem;
  padding: 3rem 0;
  border-radius: 3px;
`;
export const Section = styled.section``;
export const WrapCards = styled.div`
  display: flex;
  margin: 2.5rem 0;
  padding: 2rem 0;
`;
// export const LinkStyle = styled(Link)`
//   text-decoration: none;
//   color: #2ea3f2;
//   font-size: 0.9rem !important;
// `;
export const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #2ea3f2;
  font-size: 0.9rem !important;
`;

export const WrapIcon = styled.div`
  border: 1.5px solid #ff5722;
  width: 4rem;
  height: 4rem;
  text-align: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #ff5722;
  text-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SpanLink = styled.span`
  display: block;
  padding: 0.15rem 0;
`;
