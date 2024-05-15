import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogThreeGrid from "../../components/Blog/BlogThreeGrid";
import Footer from "../../components/Layouts/Footer";

const BlogGrid = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
        bgImg="/img/page-banner-bg/page-banner15.jpg"
      />

      <BlogThreeGrid />

      <Footer />
    </>
  );
};

export default BlogGrid;
