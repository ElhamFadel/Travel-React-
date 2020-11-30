import React from "react";
import Footer from "../../component/Footer";
import Hero from "../../componentAbout/Hero";
import ScrollToTop from "../../component/ScrollToTop";

function index() {
  return (
    <>
      <ScrollToTop showBelow={200} />
      <div className="about">
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default index;
