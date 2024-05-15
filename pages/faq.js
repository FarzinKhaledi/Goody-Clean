import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/FAQ/FaqContent";
import FaqContactForm from "../components/FAQ/FaqContactForm";
import Footer from "../components/Layouts/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Faq"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImg="/img/page-banner-bg/page-banner6.jpg"
      />

      <FaqContent />

      <FaqContactForm />
      
      <Footer />
    </>
  );
};

export default Faq;
