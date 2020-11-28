import React from "react";
import Header from "../../component/Header";
import Hero from "../../componentHome/Hero";
import Features from "../../componentHome/Features";
import OurSelectionReasone from "../../componentHome/ourSelectionReasone";
import SliderLatest from "../../componentHome/SliderLatest/index";
import GalleryImage from "../../componentHome/GalleryImage";
import VideoSection from "../../componentHome/VideoSection";
import Question from "../../componentHome/Question";
import Form from "../../component/Form";
import Footer from "../../component/Footer";
import ScrollToTop from "../../component/ScrollToTop";
function index() {
  return (
    <>
      <ScrollToTop showBelow={250} />
      <Header />
      <Hero />
      <OurSelectionReasone />
      <SliderLatest />
      <Features />
      <GalleryImage />

      <Question />
      <VideoSection />
      <Form />
      <Footer />
    </>
  );
}

export default index;
