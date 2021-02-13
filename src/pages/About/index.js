import React from "react";
import Footer from "../../component/Footer";
import Hero from "../../component/About/Hero";
import { ScrollToTop } from "../../UI";

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
