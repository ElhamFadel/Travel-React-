import React from "react";
import Footer from "../../group_component/component/Footer";
import GeneralHero from "../../group_component/component/GeneralHero";
import Map from "../../group_component/componentContact/Map";
import image from "../../assets/img/concat.jpeg";
import Form from "../../group_component/component/Form";
import Communication from "../../group_component/componentContact/Communication";
import Chat from "../../group_component/component/Chat";

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
