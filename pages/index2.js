import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";
import FastResponse from "../components/HomeTwo/FastResponse";
import AboutUs from "../components/HomeTwo/AboutUs";
import Services from "../components/HomeTwo/Services";
import PreventVirus from "../components/HomeTwo/PreventVirus";
import HowItWorks from "../components/Common/HowItWorks";
import ProductCard from "../components/Common/ProductCard";
import VirtualDisinfectionServices from "../components/Common/VirtualDisinfectionServices";
import FaqContent from "../components/FAQ/FaqContent";
import MakeAnAppointment from "../components/Common/MakeAnAppointment";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layouts/Footer";

const Index2 = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FastResponse />

      <AboutUs />

      <Services />

      <PreventVirus />

      <HowItWorks />

      <div className="pt-100 pb-70">
        <ProductCard />
      </div>

      <VirtualDisinfectionServices />

      <FaqContent />

      <MakeAnAppointment />

      <LatestNews />
      
      <Footer />
    </>
  );
};

export default Index2;
