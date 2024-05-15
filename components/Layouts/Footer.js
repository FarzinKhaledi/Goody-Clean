import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer 
        className="footer-top-area f-bg pt-100 pb-70"
        style={{
          backgroundImage: `url(/img/footer-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <div className="foot-logo">
                  <Link href="/">
                    <img src="/img/logo.png" alt="Image" />
                  </Link>
                </div>

                <p>
                  Lorem ipsum dolor, sit amet earum consectetur adipisicing
                  elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae
                  perspiciatis, repudiandae ipsam minus et ex, aliquid dolor
                  molestias.
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Our Services</h3>

                <ul>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Main Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Window Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Domestic Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Disinfection
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Office Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      House Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Quick Links</h3>

                <ul>
                  <li>
                    <Link href="/about-us">
                      <i className="bx bx-chevrons-right"></i>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <i className="bx bx-chevrons-right"></i>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <i className="bx bx-chevrons-right"></i>
                      Prices
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <i className="bx bx-chevrons-right"></i>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="bx bx-chevrons-right"></i>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <i className="bx bx-chevrons-right"></i>
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>Get In Touch</h3>

                <ul>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <span>Hotline:</span>
                    Phone: <a href="tel:+61-821-456">+61-821-456</a>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Email:</span>
                    <a href="mailto:hello@surety.com">hello@ston.com</a>
                  </li>

                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    123, Western Road, Melbourne Australia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} Ston. All Rights Reserved By{" "}
              <a href="https://envytheme.com/" target="blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
