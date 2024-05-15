import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TestimonialsCard from "../components/Testimonials/TestimonialsCard";

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImg="/img/page-banner-bg/page-banner3.jpg"
      />

      <TestimonialsCard />

      <Footer />
    </>
  );
};

export default Testimonials;
