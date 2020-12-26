import React from "react";
import * as S from "./elementForItems";
import { H4 } from "../../component/Typography";
import { Img } from "../../component/styles/GlobalStyle";

function Item(props) {
  const {
    imgSrc,
    title,
    para,
    numberTickets,
    lastData,
    animate,
    delay,
  } = props;

  return (
    <S.OnePlace className="onePlace" animate={animate} delay={delay}>
      <S.WrapperImg className="wrapperImg">
        <Img src={imgSrc} alt="image src" />
      </S.WrapperImg>
      <S.Info className="info">
        <S.TitleImage>{title}</S.TitleImage>
        <S.ParaImage>{para}</S.ParaImage>
        <H4>Available Tickets : {numberTickets}</H4>
        <H4>Last Date : {lastData}</H4>
      </S.Info>
    </S.OnePlace>
  );
}

export default Item;
