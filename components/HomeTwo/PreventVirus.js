import React from "react";
import Link from "next/link";

const PreventVirus = () => {
  return (
    <div className="prevent-area-two pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="prevent-content-two">
              <span>Prevent</span>
              <h2>Protect Yourself from Virus</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto cupiditate eius laboriosam doloremque, accusamus ex
                adipisci, accusantium incidunt illo ratione, tempore eum ipsum
                explicabo aliquam iusto sit! Nostrum, at commodi.
              </p>

              <Link href="#" className="default-btn">
                Get Quote
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="prevent-img-two">
              <img src="/img/prevent-img-two.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreventVirus;
