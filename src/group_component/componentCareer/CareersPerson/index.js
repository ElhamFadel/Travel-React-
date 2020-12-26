import React from "react";
import Container from "../../component/styles/Container";
import { H2 } from "../../component/Typography";
import * as E from "./elementCard";
import { Img } from "../../component/styles/GlobalStyle";
import { people } from "./dataPerson";
export default function CareersPerson() {
  return (
    <E.CareerPerson className="careerPerson">
      <Container>
        <H2>Careers</H2>
        <E.Cards>
          {people.map((place, index) => (
            <E.CardCareer className="card" key={`card-${index}`}>
              <E.WraperImage>
                <Img src={place.img} alt={place.alt} />
              </E.WraperImage>
              <E.WraperInfo>
                <E.H3card>{place.name}</E.H3card>
                <E.H4card>Responsible: {place.careerName} </E.H4card>
                <E.ParaCard>{place.description}</E.ParaCard>
              </E.WraperInfo>
            </E.CardCareer>
          ))}
        </E.Cards>
      </Container>
    </E.CareerPerson>
  );
}
