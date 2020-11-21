import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Container from "../../component/styles/Container";
import { RowHead } from "../../component/styles/GlobalStyle";
import { Para, H3 } from "../../component/Typography";
import latest from "../../assets/img/latest.jpeg";

function index() {
  return (
    <Section className="section-3">
      <RowHead>
        <H3>Latest Project on the go</H3>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Para>
      </RowHead>
      <RowHead>
        <Container>
          <OwlCarousel className="owl-theme" items="1" loop autoplay center>
            <div class="item">
              <img src={latest} alt="travel" />
              <RowHead className="info">
                <h6>Vector Illustration</h6>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </div>
            <div class="item">
              <img src={latest} alt="travel" />
              <RowHead className="info">
                <h6>Vector Illustration</h6>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </div>
            <div class="item">
              <img src={latest} alt="travel" />
              <RowHead className="info">
                <h6>Vector Illustration</h6>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </div>
            <div class="item">
              <img src={latest} alt="travel" />
              <RowHead className="info">
                <h6>Vector Illustration</h6>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </div>
            <div class="item">
              <img src={latest} alt="travel" />
              <RowHead className="info">
                <h6>Vector Illustration</h6>
                <Para>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have <br />
                  allowed humanity to create slimmer, more portable technology.
                </Para>
              </RowHead>
            </div>
          </OwlCarousel>
        </Container>
      </RowHead>
    </Section>
  );
}
const Section = styled.div`
  padding: 120px 0;
  background-color: #f9f9ff;
  overflow: hidden;
`;

export default index;
