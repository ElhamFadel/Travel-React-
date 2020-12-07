import React from "react";
import Footer from "../../component/Footer";
import GeneralHero from "../../component/GeneralHero";
import Map from "../../componentContact/Map";
import image from "../../assets/img/concat.jpeg";
import Form from "../../component/Form";
import Communication from "../../componentContact/Communication";
import Chat from "../../component/Chat";

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
