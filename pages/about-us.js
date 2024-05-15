import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import AboutContentTwo from "../components/AboutUs/AboutContentTwo";
import PreventVirus from "../components/AboutUs/PreventVirus";
import VirtualDisinfectionServices from "../components/Common/VirtualDisinfectionServices";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImg="/img/page-banner-bg/page-banner1.jpg"
      />

      <AboutUsContent />

      <AboutContentTwo />

      <PreventVirus />

      <VirtualDisinfectionServices />

      <Footer />
    </>
  );
};

export default AboutUs;
