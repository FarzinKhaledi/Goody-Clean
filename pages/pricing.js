import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import HowItWorks from "../components/Common/HowItWorks";
import PricingTable from "../components/Pricing/PricingTable";

const Pricing = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImg="/img/page-banner-bg/page-banner2.jpg"
      />

      <PricingTable />

      <HowItWorks />

      <Footer />
    </>
  );
};

export default Pricing;
