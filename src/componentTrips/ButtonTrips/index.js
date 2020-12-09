import React from "react";
import styled from "styled-components";

function Button({ children, id, onClick, activeId }) {
  return (
    <ButtonWrapper
      className={activeId === id ? "active" : ""}
      id={id}
      onClick={(e) => onClick(e.target.id)}
    >
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  background: #fff;
  color: #000;
  padding: 7px 14px;
  border: none;
  border: 1px solid #9d9d9d;
  color: #828282;
  border-radius: 15%;
  outline: none;
  .active {
    background: #9d9d9d !important;
    color: #fff !important;
  }
  &:hover {
    outline: none;
    background: #9d9d9d;
    color: #fff;
    cursor: pointer;
  }
`;

export default Button;
