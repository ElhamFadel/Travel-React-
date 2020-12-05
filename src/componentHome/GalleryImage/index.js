import React from "react";
import { Gallery1 } from "../../assets/img";
import { Gallery2 } from "../../assets/img";
import { Gallery3 } from "../../assets/img";
import { Gallery4 } from "../../assets/img";
import { Gallery5 } from "../../assets/img";
import { Gallery6 } from "../../assets/img";
import { Gallery8 } from "../../assets/img";
import "./style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  nav: true,
  autoplay: true,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
  navText: [
    "<i class='lnr lnr-arrow-up'></i>",
    "<i class='lnr lnr-arrow-down'></i>",
  ],
};
function index() {
  return (
    <div>
      <OwlCarousel className="owl-theme" items={6} {...options}>
        <div className="item">
          <img src={Gallery1} alt="image1" />
        </div>
        <div className="item">
          <img src={Gallery2} alt="image2" />
        </div>
        <div className="item">
          <img src={Gallery3} alt="image3" />
        </div>
        <div className="item">
          <img src={Gallery4} alt="image4" />
        </div>
        <div className="item">
          <img src={Gallery5} alt="image5" />
        </div>
        <div className="item">
          <img src={Gallery6} alt="image6" />
        </div>
        <div className="item">
          <img src={Gallery3} alt="image5" />
        </div>
        <div className="item">
          <img src={Gallery8} alt="image6" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default index;
