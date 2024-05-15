import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProductCard from "../../components/Shop/ProductCard";
import Footer from "../../components/Layouts/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        bgImg="/img/page-banner-bg/page-banner24.jpg"
      />

      <ProductCard />
      
      <Footer />
    </>
  );
};

export default Shop;
