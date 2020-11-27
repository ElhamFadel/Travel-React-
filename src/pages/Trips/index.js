import React from "react";
import TravelPackage from "../../componentTrips/TravelPackage";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import image from "../../assets/img/trip.jpeg";

function index() {
  return (
    <div className="tripsPage">
      <GeneralHero title={"Trips"} image={image} />
      <TravelPackage />
      <Footer />
    </div>
  );
}

export default index;
