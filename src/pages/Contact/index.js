import React from "react";
import Footer from "../../component/Footer";
import { GeneralHero } from "../../UI";
import { Map, Communication } from "../../component/Contact";
import image from "../../assets/img/concat.jpeg";
import { Chat, Form } from "../../UI";

function Contact() {
  return (
    <>
      <Chat />
      <div className="contactPage">
        <GeneralHero title={"Contact Us"} image={image} />
        <Communication />
        <Map />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
