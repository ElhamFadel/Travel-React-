import React from "react";
import Header from "../../componentHome/Header";
import Hero from "../../componentHome/Hero";
import Features from "../../componentHome/Features";
import OurSelectionReasone from "../../componentHome/ourSelectionReasone";
import SliderLatest from "../../componentHome/SliderLatest/index";
import GalleryImage from "../../componentHome/GalleryImage";
import VideoSection from "../../componentHome/VideoSection";
import Form from "../../componentHome/Form";
import Footer from "../../componentHome/Footer";
function index() {
  return (
    <>
      <Header />
      <Hero />
      <OurSelectionReasone />
      <SliderLatest />
      <Features />
      <GalleryImage />
      <VideoSection />
      <Form />
      <Footer />
    </>
  );
}

export default index;
