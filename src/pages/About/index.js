import React from "react";
import Footer from "../../component/Footer";
import Hero from "../../componentAbout/Hero";
import image from "../../assets/img/trip.jpeg";
import GeneralHero from "../../component/GeneralHero";

function index() {
  return (
    <div className="about">
      {/* <Hero /> */}
      <GeneralHero title={"Trips"} image={image} />

      <Footer />
    </div>
  );
}

export default index;
