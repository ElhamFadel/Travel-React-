import React from "react";
import Footer from "../../group_component/component/Footer";
import Hero from "../../group_component/componentAbout/Hero";
import ScrollToTop from "../../group_component/component/ScrollToTop";

function About() {
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

export default About;
