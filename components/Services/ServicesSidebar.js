import React from "react";
import Link from "next/link"; 
import Feedbacks from "./Feedbacks";

const ServicesSidebar = () => {
  return (
    <>
      <div className="services-sidebar">
        <div className="services-img">
          <img src="/img/services/service1.jpg" alt="Image" />

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
              <a href="https://www.pinterest.com/" target="_blank">
                <i className="bx bxl-pinterest-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="availability">
          <h3>
            <i className="bx bx-time"></i>
            Availability
          </h3>

          <ul>
            <li>
              Monday - Friday
              <span>9.00 - 20.00</span>
            </li>
            <li>
              Saturday
              <span>10.00 - 16.00</span>
            </li>
            <li>
              Sunday
              <span>9.30 - 18.00</span>
            </li>
            <li>
              Friday
              <span>Closed</span>
            </li>
          </ul>

          <Link href="/appointment" className="default-btn mt-4">
            Request An Appointment
          </Link>
        </div>

        {/* Feedbacks */}
        <Feedbacks />
      </div>
    </>
  );
};

export default ServicesSidebar;
