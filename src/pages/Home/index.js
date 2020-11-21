import React from "react";
import Header from "../../componentHome/Header";
import Hero from "../../componentHome/Hero";
import Features from "../../componentHome/Features";
import OurSelectionReasone from "../../componentHome/ourSelectionReasone";
import SliderLatest from "../../componentHome/SliderLatest/index";

function index() {
  return (
    <>
      <Header />
      <Hero />
      <OurSelectionReasone />
      <Features />
      <SliderLatest />
    </>
  );
}

export default index;
