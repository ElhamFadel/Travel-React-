import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import Map from "../../componentContact/Map";
import image from "../../assets/img/concat.jpeg";
import Form from "../../component/Form";

function index() {
  return (
    <div className="contactPage">
      <GeneralHero title={"Contact Us"} image={image} />
      <Map />
      <Form />
      <Footer />
    </div>
  );
}

export default index;
