import React from "react";
import video from "../../../assets/videos/video.mp4";
import Button from "../../../UI/Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  Layer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./elementHero";

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} type="video/mp4" autoPlay loop muted playsInline />
        <Layer />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>New Adventure</HeroH1>
          <HeroP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod temp Lorem ipsum dolor sit{" "}
          </HeroP>
          <Button primary="true" Upper="true" round="true" to="/trips">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
