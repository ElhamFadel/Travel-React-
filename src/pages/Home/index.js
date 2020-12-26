import React from "react";
import Header from "../../group_component/component/Header";
import Hero from "../../group_component/componentHome/Hero";
import Features from "../../group_component/componentHome/Features";
import OurSelectionReasone from "../../group_component/componentHome/ourSelectionReasone";
import SliderLatest from "../../group_component/componentHome/SliderLatest";
import GalleryImage from "../../group_component/componentHome/GalleryImage";
import VideoSection from "../../group_component/componentHome/VideoSection";
import Question from "../../group_component/componentHome/Question";
import Form from "../../group_component/component/Form";
import Footer from "../../group_component/component/Footer";
import ScrollToTop from "../../group_component/component/ScrollToTop";
function Home() {
  return (
    <>
      <ScrollToTop showBelow={200} />
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

export default Home;
