import React from "react";
import Footer from "../../group_component/component/Footer";
import GeneralHero from "../../group_component/component/GeneralHero";
import image from "../../assets/img/career.jpeg";
import CareersPerson from "../../group_component/componentCareer/CareersPerson";
import ScrollToTop from "../../group_component/component/ScrollToTop";

function Careers() {
  return (
    <>
      <ScrollToTop showBelow={200} />
      <div className="careerPage">
        <GeneralHero title={"Our Careers "} image={image} />
        <CareersPerson />
        <Footer />
      </div>
    </>
  );
}

export default Careers;
