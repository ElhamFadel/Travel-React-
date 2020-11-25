import React from "react";
import Container from "../../component/styles/Container";
import PlayImage from "../../assets/img/play.png";
import { Overlay } from "../../component/styles/GlobalStyle";

import { VideoSection, VideoContent, VideoInfo, Head5, Head6 } from "./Element";

function index() {
  return (
    <VideoSection>
      <Overlay></Overlay>
      <Container>
        <VideoContent>
          <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="play-btn">
            <img src={PlayImage} alt="playImage" />
          </a>
        </VideoContent>
        <VideoInfo>
          <Head5>Being unique is the preference</Head5>
          <Head6>Youtube video will appear in popover</Head6>
        </VideoInfo>
      </Container>
    </VideoSection>
  );
}

export default index;
