import React from "react";
import CustomAccordion from "../../Components/Accordion/Accordion";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import "./FAQ.scss";

function Faq() {
  return (
    <>
      <Header />
      <div className="hero-faq"></div>
      <div className="main-body-faq">
        <div className="accordion-container">
          <h2>Frequently asked questions</h2>
          <CustomAccordion />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
