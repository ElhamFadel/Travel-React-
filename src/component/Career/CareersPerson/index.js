import React from "react";
import Container from "../../styles/Container";
import { H2 } from "../../Typography";
import {
  CardCareer,
  WraperInfo,
  WraperImage,
  ParaCard,
  H4card,
  H3card,
  Cards,
  CareerPerson,
} from "./elementCard";
import { Img } from "../../styles/GlobalStyle";
import { people } from "./dataPerson";
export default function CareersPerson() {
  return (
    <CareerPerson className="careerPerson">
      <Container>
        <H2>Careers</H2>
        <Cards>
          {people.map((place) => (
            <CardCareer className="card">
              <WraperImage>
                <Img src={place.img} alt={place.alt} />
              </WraperImage>
              <WraperInfo>
                <H3card>{place.name}</H3card>
                <H4card>Responsible: {place.careerName} </H4card>
                <ParaCard>{place.description}</ParaCard>
              </WraperInfo>
            </CardCareer>
          ))}
        </Cards>
      </Container>
    </CareerPerson>
  );
}
