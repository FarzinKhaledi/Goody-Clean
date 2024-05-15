import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Commercial Disinfection Services</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vero reprehenderit vel accusantium, facilis architecto consectetur
              nobis tempore ullam suscipit tenetur mollitia corporis veritatis.
            </p>
          </div>

          <div className="row">
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

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service4.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>Industry Cleaning</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-factory"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service5.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>Hospital & Health Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-hospital"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <Link href="/services/details">
                  <img src="/img/services/service6.jpg" alt="Image" />
                </Link>

                <div className="services-content">
                  <h3>Bathroom Cleaning</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>

                  <span className="flaticon-toilet"></span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link href="#" className="page-link page-links">
                      <i className="bx bx-chevrons-left"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link href="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      <i className="bx bx-chevrons-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
