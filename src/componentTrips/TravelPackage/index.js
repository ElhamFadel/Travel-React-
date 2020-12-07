import React from "react";
import Container from "../../component/styles/Container";
import { H2 } from "../../component/Typography";
import { Place } from "./dataPlace";
import Item from "./Item";
import { SectionTravel } from "./elementForItems";
export default function TravelPackage() {
  return (
    <SectionTravel className="placesTravel">
      <H2>TRAVEL PACKAGES</H2>
      <Container>
        {Place.map((place) => (
          <Item
            imgSrc={place.img}
            title={place.titleH3}
            para={place.text}
            numberTickets={place.numberTickets}
            lastData={place.lastData}
          />
        ))}
      </Container>
    </SectionTravel>
  );
}
