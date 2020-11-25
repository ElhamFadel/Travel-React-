import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { useScrollTo } from "react-use-window-scroll";
import styled from "styled-components";

export default function Index() {
  const { y } = useWindowScroll();
  const [show, setShow] = useState(false);
  const scrollTo = useScrollTo();
  useEffect(() => {
    if (y > 521) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [y]);

  return (
    <>
      {show && (
        <Button
          onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          <svg
            _ngcontent-ewo-c7=""
            height="26"
            viewBox="0 0 24 24"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              _ngcontent-ewo-c7=""
              d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
            ></path>
          </svg>
        </Button>
      )}
    </>
  );
}

const Button = styled.button`
  border: 0;
  padding: 6px;
  position: fixed;
  bottom: 10%;
  right: 2%;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 45px;
  width: 45px;
  line-height: 7px;
  z-index: 555;
  cursor: pointer;
  outline: 0;
`;
