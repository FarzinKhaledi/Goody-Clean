import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogWithLeftSidebar from "../../../components/Blog/BlogWithLeftSidebar";

const LeftSidebar = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
        bgImg="/img/page-banner-bg/page-banner18.jpg"
      />

      <BlogWithLeftSidebar />

      <Footer />
    </>
  );
};

export default LeftSidebar;
