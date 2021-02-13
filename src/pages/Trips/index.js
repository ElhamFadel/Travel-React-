import React from "react";
import TravelPackage from "../../component/Trips/Feature";
import Footer from "../../component/Footer";
import image from "../../assets/img/trip.jpeg";
import Feature from "../../component/Trips/Feature";
import { GeneralHero } from "../../UI";

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
