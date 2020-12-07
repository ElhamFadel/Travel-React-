import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import image from "../../assets/img/career.jpeg";
import CareersPerson from "../../componentCareer/CareersPerson";
import ScrollToTop from "../../component/ScrollToTop";

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
