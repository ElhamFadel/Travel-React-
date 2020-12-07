import React from "react";
import Header from "../../component/Header";
import { HeroImage, OverLayComn, H1 } from "./element";

function GeneralHero(props) {
  const { title, image } = props;
  return (
    <div className="tripPage">
      <HeroImage src={image}>
        <OverLayComn>
          <Header />
          <H1>{title}</H1>
        </OverLayComn>
      </HeroImage>
    </div>
  );
}

export default GeneralHero;
