import React from "react";
import TravelPackage from "../../group_component/componentTrips/TravelPackage";
import Footer from "../../group_component/component/Footer";
import GeneralHero from "../../group_component/component/GeneralHero";
import image from "../../assets/img/trip.jpeg";
import Feature from "../../group_component/componentTrips/Feature";

function Trips() {
  return (
    <div className="tripsPage">
      <GeneralHero title={"Trips"} image={image} />
      <Feature />
      <TravelPackage />
      <Footer />
    </div>
  );
}

export default Trips;
