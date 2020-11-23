import React from "react";
import { Button } from "../../component/Button";
import video from "../../assets/videos/video.mp4";
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

function index() {
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
            eiusmod temp{" "}
          </HeroP>
          <Button primary="true" big="true" round="true" to="/trips">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default index;
