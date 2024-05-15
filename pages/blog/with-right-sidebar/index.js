import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogWithRightSidebar from "../../../components/Blog/BlogWithRightSidebar";

const BlogRightSidebar = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
        bgImg="/img/page-banner-bg/page-banner18.jpg"
      />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};

export default BlogRightSidebar;
