import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import image from "../../assets/img/concat.jpeg";

function index() {
  return (
    <div className="contactPage">
      <GeneralHero title={"Contact Us"} image={image} />
      <Footer />
    </div>
  );
}

export default index;
