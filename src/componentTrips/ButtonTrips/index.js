import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Button({ children, id, onClick, activeId }) {
  const [active, isActive] = useState(false);

  useEffect(() => {
    isActive(false);
    if (id == activeId) {
      isActive(true);
    }
  }, [activeId]);
  return (
    <ButtonWrapper
      className={active ? "active" : ""}
      id={id}
      onClick={(e) => onClick(e.target.id)}
    >
      {children}
    </ButtonWrapper>
  );
}
export function Prev({ onClick }) {
  return <ButtonWrapper onClick={onClick}>Previous</ButtonWrapper>;
}

export function Next({ onClick }) {
  return <ButtonWrapper onClick={onClick}>Next</ButtonWrapper>;
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
