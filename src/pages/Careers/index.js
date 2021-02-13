import React from "react";
import Footer from "../../component/Footer";
import image from "../../assets/img/career.jpeg";
import CareersPerson from "../../component/Career/CareersPerson";
import { GeneralHero, ScrollToTop } from "../../UI";

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
