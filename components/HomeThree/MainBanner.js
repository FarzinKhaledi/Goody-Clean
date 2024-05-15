import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="main-banner-area three"
        style={{
          backgroundImage: `url(/img/home-banner/home-banner2.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-text text-center m-auto">
                <h1>Disinfection and Sanitation Services</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  architecto laborum eaque! Deserunt maxime, minus quas
                  molestiae reiciendis esse natus nisi iure.
                </p>

                <div className="banner-btn">
                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                  <Link href="/about" className="default-btn active">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
