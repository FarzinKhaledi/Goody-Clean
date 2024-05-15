import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AllProjects from "../../components/Projects/AllProjects";
import Footer from "../../components/Layouts/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        bgImg="/img/page-banner-bg/page-banner21.jpg"
      />

      <AllProjects />
      
      <Footer />
    </>
  );
};

export default Projects;
