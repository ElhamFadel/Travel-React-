import React from "react";
import { Button } from "../../component/Button";
import { video } from "../../../assets";
import * as E from "./elementHero";
function Hero() {
  return (
    <E.HeroContainer>
      <E.HeroBg>
        <E.VideoBg
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <E.Layer />
      </E.HeroBg>
      <E.HeroContent>
        <E.HeroItems>
          <E.HeroH1>New Adventure</E.HeroH1>
          <E.HeroP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod temp Lorem ipsum dolor sit{" "}
          </E.HeroP>
          <Button
            primary="true"
            Upper="true"
            big="true"
            round="true"
            to="/trips"
          >
            Travel Now
          </Button>
        </E.HeroItems>
      </E.HeroContent>
    </E.HeroContainer>
  );
}

export default Hero;
