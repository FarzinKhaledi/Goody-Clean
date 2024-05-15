import React from "react";
import Navbar from "../components/Layouts/Navbar"; 
import PageBanner from "../components/Common/PageBanner"; 
import Footer from "../components/Layouts/Footer"; 
import CartTable from "../components/Cart/CartTable";

const Cart = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        bgImg="/img/page-banner-bg/page-banner24.jpg"
      />

      <CartTable />

      <Footer />
    </>
  );
};

export default Cart;
