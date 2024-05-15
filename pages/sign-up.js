import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SignUpForm from "../components/Auth/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
        bgImg="/img/page-banner-bg/page-banner9.jpg"
      />

      <SignUpForm />

      <Footer />
    </>
  );
};

export default SignUp;
