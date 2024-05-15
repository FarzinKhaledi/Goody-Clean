import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const HeroSlider = () => {
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

      <div className="hero-slider-area">
        <Swiper
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation]}
          className="hero-slider-wrap"
        >
          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-slider/home-slider1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text one">
                          <h1>Cleaning And Disinfecting Your Home</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact" className="default-btn">
                              Contact Us
                            </Link>

                            <Link
                              href="/about-us"
                              className="default-btn active"
                            >
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
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-slider/home-slider2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text two">
                          <h1>Cleaning And Disinfecting Your Area</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact" className="default-btn">
                              Contact Us
                            </Link>

                            <Link
                              href="/about-us"
                              className="default-btn active"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="video-btn-animat two">
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
          </SwiperSlide>
        </Swiper>

        <div className="shape">
          <img src="/img/home-slider/home-slider-shape1.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
