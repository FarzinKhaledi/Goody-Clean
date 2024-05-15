import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TeamMember from "../components/Team/TeamMember";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImg="/img/page-banner-bg/page-banner4.jpg"
      />

      <TeamMember />

      <Footer />
    </>
  );
};

export default Team;
