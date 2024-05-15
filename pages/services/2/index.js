import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesTwo from "../../../components/Services/ServicesTwo";
import HowItWorksTwo from "../../../components/Common/HowItWorksTwo";
import Footer from "../../../components/Layouts/Footer";

const ServicesStyleTwo = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Two"
        bgImg="/img/page-banner-bg/page-banner13.jpg"
      />

      <ServicesTwo />

      <div className="pt-100">
        <HowItWorksTwo />
      </div>

      <Footer />
    </>
  );
};

export default ServicesStyleTwo;
