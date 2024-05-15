import React from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <a href="mailto:hello@ston.com">
                    <i className="bx bx-envelope"></i>
                    Email: hello@ston.com
                  </a>
                </li>
                <li>
                  <a href="tel:+61-821-456">
                    <i className="bx bx-phone-call"></i>
                    Call Us: +61-821-456
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-6">
              <ul className="header-content-right">
                <li>Opening Hour: 9:00 am - 9:00 pm</li>
                <li>
                  <Link href="/sign-in">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
