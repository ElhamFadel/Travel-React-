import styled from "styled-components";
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
  .error {
    border-color: red;
  }
`;
export const FormInput = styled.input`
  border-radius: 0;

  margin-bottom: 20px;
  display: block;
  width: 100%;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 12px;
  padding: 17px;
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
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 0rem;
  height: 190px;
  font-size: 14px;
  color: #495057;
  &:focus {
    color: #495057;
    border-color: #ff5722;
    outline: none;
  }
`;
export const ButtonSubmit = styled.button`
  position: relative;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1rem;
  font-size: 11px;
  background: #f26a2e;
  white-space: nowrap;
  padding: 10px 32px;
  color: #fff;
  font-size: "16px";
  outline: none;
  border: none;
  min-width: 100px;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: 0.3s !important;
  transition: 0.3s !important;
  text-transform: capitalize;
  border-radius: 50px;
  &:hover {
    background: #ffa500;
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
  }
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
export const Message = styled.span`
  font-size: 12px;
  color: #a9a9a9;
  margin-left: 1rem;
`;
