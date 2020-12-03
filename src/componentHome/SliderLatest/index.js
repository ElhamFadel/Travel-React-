import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { Para, H2, H4 } from "../../component/Typography";
import "./style.css";
import latest from "../../assets/img/why.jpg";

function index() {
  return (
    <Section className="section-3">
      <RowHead>
        <H2>Latest Project on the go</H2>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
        </Para>
      </RowHead>
      <RowHead>
        <Container>
          <OwlCarousel className="owl-theme" items="1" loop autoplay center>
            <Item className="item">
              <Image src={latest} alt="travel" />
              <RowHead className="info">
                <H4>VECTOR ILLUSTRATION</H4>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </Item>
            <Item className="item">
              <Image src={latest} alt="travel" />
              <RowHead className="info">
                <H4>VECTOR ILLUSTRATION</H4>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </Item>
            <Item className="item">
              <Image src={latest} alt="travel" />
              <RowHead className="info">
                <H4>VECTOR ILLUSTRATION</H4>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </Item>
            <Item className="item">
              <Image src={latest} alt="travel" />
              <RowHead className="info">
                <H4>VECTOR ILLUSTRATION</H4>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </Item>
            <Item className="item">
              <Image src={latest} alt="travel" />
              <RowHead className="info">
                <H4>VECTOR ILLUSTRATION</H4>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </Item>
          </OwlCarousel>
        </Container>
      </RowHead>
    </Section>
  );
}
const Section = styled.div`
  padding: 100px 0 45px 0;
  background-color: #f9f9ff;
  overflow: hidden;
`;
const Item = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`;
const Image = styled.img`
  display: block;
  padding-bottom: 3rem;
`;

export default index;
