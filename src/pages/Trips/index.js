import React from "react";
import Hero from "../../componentTrips/Hero";
import TravelPackage from "../../componentTrips/TravelPackage";
import Footer from "../../component/Footer";
function index() {
  return (
    <div className="tripsPage">
      <Hero />
      <TravelPackage />
      <Footer />
    </div>
  );
}

export default index;
