import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import Map from "../../componentContact/Map";
import image from "../../assets/img/concat.jpeg";
import Form from "../../component/Form";
import Communication from "../../componentContact/Communication";
import ScrollToTop from "../../component/ScrollToTop";

function index() {
  return (
    <>
      <ScrollToTop showBelow={200} />
      <div className="contactPage">
        <GeneralHero title={"Contact Us"} image={image} />
        <Communication />
        <Map />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default index;
