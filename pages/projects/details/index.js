import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ProjectDetailsContent from "../../../components/Projects/ProjectDetailsContent";

const ProjectDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Project Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Project Details"
        bgImg="/img/page-banner-bg/page-banner22.jpg"
      />

      <ProjectDetailsContent />

      <Footer />
    </>
  );
};

export default ProjectDetails;
