import React from "react";
import Image1 from "../../assets/img/1.jpeg";
import Image2 from "../../assets/img/2.jpeg";
import Image3 from "../../assets/img/3.jpeg";
import Image4 from "../../assets/img/4.jpeg";
import Image5 from "../../assets/img/5.jpeg";
import Image6 from "../../assets/img/6.jpeg";
import Image8 from "../../assets/img/8.jpeg";
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
          <img src={Image1} alt="image1" />
        </div>
        <div className="item">
          <img src={Image2} alt="image2" />
        </div>
        <div className="item">
          <img src={Image3} alt="image3" />
        </div>
        <div className="item">
          <img src={Image4} alt="image4" />
        </div>
        <div className="item">
          <img src={Image5} alt="image5" />
        </div>
        <div className="item">
          <img src={Image6} alt="image6" />
        </div>
        <div className="item">
          <img src={Image8} alt="image5" />
        </div>
        <div className="item">
          <img src={Image6} alt="image6" />
        </div>
      </OwlCarousel>
      {/* <div class="owl-controls">
        <div class="owl-nav">
          <div class="owl-prev">
            <span class="lnr lnr-arrow-up"></span>
          </div>
          <div class="owl-next">
            <span class="lnr lnr-arrow-down"></span>
          </div>
        </div>
        <div class="owl-dots">
          <div class="owl-dot active">
            <span></span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default index;
