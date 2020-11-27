import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import image from "../../assets/img/career.jpeg";

function index() {
  return (
    <div className="careerPage">
      <GeneralHero title={"Our Careers "} image={image} />
      <Footer />
    </div>
  );
}

export default index;
