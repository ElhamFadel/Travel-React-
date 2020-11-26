import React from "react";
import Header from "../../component/Header";
import { HeroImage, OverLayComn, H1 } from "./element";

function index() {
  return (
    <div className="tripPage">
      <HeroImage>
        <OverLayComn>
          <Header />
          <H1>Trips</H1>
        </OverLayComn>
      </HeroImage>
    </div>
  );
}

export default index;
