import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SignInForm from "../components/Auth/SignInForm";

const SignIn = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        bgImg="/img/page-banner-bg/page-banner9.jpg"
      />

      <SignInForm />

      <Footer />
    </>
  );
};

export default SignIn;
