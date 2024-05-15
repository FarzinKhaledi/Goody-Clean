import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>COVID - 19 Virus Disinfection & Sanitation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-checked"></i>
                    Clean and disinfect frequently touched surfaces
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Avoid touching your eyes, nose, and mouth
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Clean your hands with a hand sanitizer
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Cover coughs and sneezes
                  </li>
                </ul>

                <p className="block-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  deserunt hic natus eum adipisci optio maxime itaque et.
                </p>

                <Link href="/about-us" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
						
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about-img.jpg" alt="Image" />
                <div className="about-child">
                  <img src="/img/about-child.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
