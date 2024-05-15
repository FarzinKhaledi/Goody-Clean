import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesSidebar from "../../../components/Services/ServicesSidebar";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      
      <PageBanner
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        bgImg="/img/page-banner-bg/page-banner23.jpg"
      />

      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <ServicesSidebar />
            </div>

            <div className="col-lg-8">
              <ServiceDetailsContent />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
