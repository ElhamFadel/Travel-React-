import React from "react";
import Header from "../../component/Header";
import {
  VideoSection,
  GalleryImage,
  SliderLatest,
  OurSelectionReasone,
  Features,
  Question,
  Hero,
} from "../../component/Home";
import { Form } from "../../UI";
import Footer from "../../component/Footer";
import { ScrollToTop } from "../../UI";
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
