import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=JZq4ynLKRX8_ksPu",
        ]}
      />

      <div
        className="main-banner-area"
        style={{
          backgroundImage: `url(/img/home-banner/home-banner1.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="banner-text">
                    <h1>We Provide COVID 19 Disinfecting Services</h1>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis esse natus nisi iure.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                        Contact Us
                      </Link>

                      <Link href="/about-us" className="default-btn active">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="video-btn-animat one">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="bx bx-play"></i>
                    </div>
                  </div>
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
