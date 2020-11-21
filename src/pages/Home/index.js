import React from "react";
import Header from "../../componentHome/Header";
import Hero from "../../componentHome/Hero";
import Features from "../../componentHome/Features";
import OurSelectionReasone from "../../componentHome/ourSelectionReasone";
import SliderLatest from "../../componentHome/SliderLatest/index";
import QuestionSection from "../../componentHome/QuestionSection";

function index() {
  return (
    <>
      <Header />
      <Hero />
      <OurSelectionReasone />
      <Features />
      <SliderLatest />
      <QuestionSection />
    </>
  );
}

export default index;
