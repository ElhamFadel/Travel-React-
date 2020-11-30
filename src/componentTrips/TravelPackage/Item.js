import React from "react";
import {
  OnePlace,
  WrapperImg,
  TitleImage,
  Info,
  ParaImage,
} from "./elementForItems";
import { H4 } from "../../component/Typography";
import { Img } from "../../component/styles/GlobalStyle";

function Item(props) {
  const { imgSrc, title, para, numberTickets, lastData } = props;

  return (
    <OnePlace className="onePlace">
      <WrapperImg className="wrapperImg">
        <Img src={imgSrc} alt="image src" />
      </WrapperImg>
      <Info className="info">
        <TitleImage>{title}</TitleImage>
        <ParaImage>{para}</ParaImage>
        <H4>Available Tickets : {numberTickets}</H4>
        <H4>Last Date : {lastData}</H4>
      </Info>
    </OnePlace>
  );
}

export default Item;
