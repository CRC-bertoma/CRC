import React from "react";
import "./Contact.css";
import Section from "../section/Section";
import { Bounce } from "react-reveal";
import ContactForm from "../contactForm/ContactForm";
import linkedin from "../../images/social/linkedin.png";
import github from "../../images/social/github.png";
import facebook from "../../images/social/facebook.png";

const Contact = () => {
  return (
    <Section title="Contact" >
      <ContactForm />
    </Section>
  );
};

export default Contact;
