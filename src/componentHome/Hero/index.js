import React from "react";
import styled from "styled-components";
import { Button } from "../../component/Button";
import video from "../../assets/videos/video.mp4";

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
const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  padding: 0 1rem;
  height: 100vh;
  margin-top: -80px;
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Layer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const HeroContent = styled.div`
  z-index: 3;
  max-height: 100%;
  margin-left: 11rem;
`;
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  line-height: 1.1;
  height: 100vh;
  color: #fff;
  padding: 0;
  text-align: center;
  font-weight: bold;
  justify-content: flex-end;
  height: 16rem;
`;
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;
const HeroP = styled.p`
  margin-bottom: 2rem;
  font-size: clamp(1rem, 1rem, 2rem);
  width: 70%;
  line-height: 1.5;
  font-weight: 400;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default index;
