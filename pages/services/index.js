import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesOne from "../../components/Services/ServicesOne";
import HowItWorks from "../../components/Common/HowItWorks";
import Footer from "../../components/Layouts/Footer";

const ServicesStyleOne = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
        bgImg="/img/page-banner-bg/page-banner12.jpg"
      />

      <ServicesOne />

      <HowItWorks />
      
      <Footer />
    </>
  );
};

export default ServicesStyleOne;
