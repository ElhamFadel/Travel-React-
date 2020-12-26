import React, { useState, useEffect } from "react";
import Container from "../../component/styles/Container";
import { H2 } from "../../component/Typography";
import { Place } from "./dataPlace";
import Item from "./Item";
import { SectionTravel, Row } from "./elementForItems";
import Button, { Prev, Next } from "../ButtonTrips";

export default function TravelPackage() {
  const [objectActive, setObject] = useState("place-1");
  const [id, getId] = useState(1);
  const [animate, setAnimate] = useState(true);

  const prevOp = () => {
    setAnimate(false);
    if (id === 1) return getId(Object.keys(Place).length);
    return getId(id - 1);
  };
  const NextOp = () => {
    setAnimate(false);
    if (id === Object.keys(Place).length) return getId(1);
    setAnimate(false);
    return getId(id + 1);
  };
  const handleClick = (id) => {
    setAnimate(false);
    getId(id);
  };

  useEffect(() => {
    const object = `place-${id}`;
    setTimeout(() => {
      setObject(object);
      setAnimate(true);
    }, 1000);
  }, [id, animate]);

  return (
    <SectionTravel className="placesTravel">
      <H2>TRAVEL PACKAGES</H2>
      <Container>
        {Place[objectActive].map((place, index) => {
          const delay = 0 + index;

          return (
            <Item
              key={`place${index}`}
              delay={`${delay}s`}
              animate={animate}
              imgSrc={place.img}
              title={place.titleH3}
              para={place.text}
              numberTickets={place.numberTickets}
              lastData={place.lastData}
            />
          );
        })}
        <Row>
          <Prev onClick={prevOp} />
          <Button onClick={handleClick} id="1" activeId={id}>
            1
          </Button>
          <Button onClick={handleClick} activeId={id} id="2">
            2
          </Button>
          <Button onClick={handleClick} activeId={id} id="3">
            3
          </Button>
          <Button onClick={handleClick} activeId={id} id="4">
            4
          </Button>
          <Button onClick={handleClick} activeId={id} id="5">
            5
          </Button>
          <Next onClick={NextOp} />
        </Row>
      </Container>
    </SectionTravel>
  );
}
