import styled from "styled-components";
import { Button } from "../Button";
export const Contact = styled.div`
  padding: 120px 0;
  overflow: hidden;
`;

export const Side = styled.div`
  flex: 50%;
  max-width: 50%;
  margin-bottom: 1rem;
  position: relative;
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  height: 5rem;
  @media (max-width: 990px) {
    flex: 100%;
    max-width: 100%;
    margin-bottom: 7rem;
  }
`;
export const FormInput = styled.input`
  border-radius: 0;
  font-size: 10px;
  padding: 15px;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);

  &:focus {
    color: #495057;
    border-color: #ff5722;
    outline: none;
  }
`;
export const RowForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 50px;
`;
export const TextArea = styled.textarea`
  height: 173px;
  font-size: 12px;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 0rem;
  color: #495057;
  &:focus {
    color: #495057;
    border-color: #ff5722;
    outline: none;
  }
`;
export const ButtonSubmit = styled(Button)`
  position: relative;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1rem;
  font-size: 11px;
  &:hover span {
    right: 10px;
  }
`;
export const SpanArrow = styled.span`
  color: #fff;
  position: absolute;
  top: 53%;
  transform: translateY(-60%);
  right: 20px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;
