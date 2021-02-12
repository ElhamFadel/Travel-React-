import React, { useState } from "react";
import Container from "../../styles/Container";
import { Overlay } from "../../styles/GlobalStyle";
import { PlayImage } from "../../../assets/img";
import {
  VideoSection,
  VideoContent,
  VideoInfo,
  Head5,
  Head6,
  Modal,
  Video,
  Fatimes,
} from "./Element";

function SectionVideo() {
  const [play, setPlay] = useState(false);
  const closeModle = () => setPlay(false);

  return (
    <VideoSection>
      <Overlay></Overlay>
      <Container>
        <VideoContent>
          <img onClick={() => setPlay(true)} src={PlayImage} alt="playImage" />
          {play && (
            <Modal onClick={closeModle}>
              <Fatimes onClick={closeModle} />

              <Video
                width="1263"
                title="This is a unique title"
                height="480"
                src="https://www.youtube.com/embed/P19WqwP1ZiQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />

              {/* <ReactPlayer
                url="http://www.youtube.com/watch?v=0O2aH4XLbto"
                width="50%"
                height="80vh"
                style={{
                  margin: "2rem auto",
                }}
              /> */}
            </Modal>
          )}
        </VideoContent>
        <VideoInfo>
          <Head5>Being unique is the preference</Head5>
          <Head6>Youtube video will appear in popover</Head6>
        </VideoInfo>
      </Container>
    </VideoSection>
  );
}

export default SectionVideo;
