import React from "react";
import Container from "../../component/styles/Container";
import { Overlay } from "../../component/styles/GlobalStyle";
import VideoPlayer from "./reactPlayer";

import { VideoSection, VideoContent, VideoInfo, Head5, Head6 } from "./Element";

function Index() {
  return (
    <VideoSection>
      <Overlay></Overlay>
      <Container>
        <VideoContent>
          <VideoPlayer />
        </VideoContent>
        <VideoInfo>
          <Head5>Being unique is the preference</Head5>
          <Head6>Youtube video will appear in popover</Head6>
        </VideoInfo>
      </Container>
    </VideoSection>
  );
}

export default Index;
