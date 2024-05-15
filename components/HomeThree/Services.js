import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Services</span>
            <h2>Commercial Disinfection Services</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vero reprehenderit vel accusantium, facilis architecto consectetur
              nobis tempore ullam suscipit tenetur mollitia corporis veritatis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service1.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>House Cleaning</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-couch"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service2.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>Window Cleaning</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-windows"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service3.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>Apartment Cleaning</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-house"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
