import React, { useState } from "react";
import Container from "../../component/styles/Container";
import { Overlay } from "../../component/styles/GlobalStyle";
import { PlayImage } from "../../../assets";
import * as S from "./Element";

function SectionVideo() {
  const [play, setPlay] = useState(false);
  const closeModle = () => setPlay(false);

  return (
    <S.VideoSection>
      <Overlay />
      <Container>
        <S.VideoContent>
          <img onClick={() => setPlay(true)} src={PlayImage} alt="playImage" />
          {play && (
            <S.Modal onClick={closeModle}>
              <S.Fatimes onClick={closeModle} />

              <S.Video
                width="1263"
                title="This is a unique title"
                height="480"
                src="https://www.youtube.com/embed/P19WqwP1ZiQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </S.Modal>
          )}
        </S.VideoContent>
        <S.VideoInfo>
          <S.Head5>Being unique is the preference</S.Head5>
          <S.Head6>Youtube video will appear in popover</S.Head6>
        </S.VideoInfo>
      </Container>
    </S.VideoSection>
  );
}

export default SectionVideo;
