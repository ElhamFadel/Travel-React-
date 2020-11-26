import React from "react";
import Header from "../../component/Header";
import { Overlay } from "../../component/styles/GlobalStyle";
import { ImageHero, NPara, Wrapper, NH3 } from "./Element";
function index() {
  return (
    <>
      <ImageHero>
        <Overlay />
        <Header />
        <Wrapper>
          <NH3>ABOUT US</NH3>
          <NPara>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard .
          </NPara>
          <NPara>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </NPara>
        </Wrapper>
      </ImageHero>
    </>
  );
}

export default index;
