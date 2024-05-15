import React from "react";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <>
      <div className="process-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Process</span>
            <h2>How It Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-process">
                <img src="/img/process/process1.png" alt="Image" />
                <h3>Account & Check-In</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="#" className="read-more">
                  Get In Touch <i className="bx bx-plus"></i>
                </Link>

                <span>01</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-process">
                <img src="/img/process/process2.png" alt="Image" />
                <h3>Choose Category</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="#" className="read-more">
                  Get In Touch <i className="bx bx-plus"></i>
                </Link>

                <span>02</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-process">
                <img src="/img/process/process3.png" alt="Image" />
                <h3>Get Clean Property</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="#" className="read-more">
                  Get In Touch <i className="bx bx-plus"></i>
                </Link>

                <span>03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
