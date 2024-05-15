import React from "react"; 
import Navbar from "../components/Layouts/Navbar";
import HeroSlider from "../components/DefaultHome/HeroSlider";
import Features from "../components/DefaultHome/Features";
import AboutUs from "../components/DefaultHome/AboutUs";
import Services from "../components/DefaultHome/Services";
import PreventVirus from "../components/DefaultHome/PreventVirus";
import HowItWorks from "../components/Common/HowItWorks";
import ProjectSlider from "../components/Projects/ProjectSlider";
import ProductCard from "../components/Common/ProductCard";
import MakeAnAppointment from "../components/Common/MakeAnAppointment";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <Features />

      <AboutUs />

      <Services />

      <PreventVirus />

      <HowItWorks />

      <ProjectSlider />

      <div className="pb-70">
        <ProductCard />
      </div>

      <MakeAnAppointment />
      
      <LatestNews />
      
      <Footer />
    </>
  );
};

export default Index;
