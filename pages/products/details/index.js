import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ProductsDetailsTab from "../../../components/ProductDetails/ProductsDetailsTab";
import ProductDetailsContent from "../../../components/ProductDetails/ProductDetailsContent";
import Footer from "../../../components/Layouts/Footer";

const ProductDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Product Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Product Details"
        bgImg="/img/page-banner-bg/page-banner22.jpg"
      />

      <div className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <ProductDetailsContent />

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTab />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
