import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        bgImg="/img/page-banner-bg/page-banner21.jpg"
      />

      <CheckoutForm />

      <Footer />
    </>
  );
};

export default Checkout;
