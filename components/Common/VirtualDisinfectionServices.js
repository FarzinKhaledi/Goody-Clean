import React from "react";
import Link from "next/link";

const VirtualDisinfectionServices = () => {
  return (
    <>
      <div className="important-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 ptb-100">
              <div className="important-content">
                <span>Services</span>
                <h2>Virtual Disinfection Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto cupiditate eius laboriosam doloremque, accusamus ex
                  adipisci, accusantium incidunt illo ratione, tempore eum ipsum
                  explicabo aliquam iusto sit! Nostrum, at commodi.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div
                className="important-img"
                style={{
                  backgroundImage: `url(/img/prevent-bg-img.jpg)`,
                }}
              >
                <div className="counter-wrap">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <h2>
                          25
                          <span className="target">+</span>
                        </h2>
                        <p>Years</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <h2>
                          3584
                          <span className="target">+</span>
                        </h2>
                        <p>Happy Customers</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter mb-0">
                        <h2>
                          258
                          <span className="traget">+</span>
                        </h2>
                        <p>Successful Projects</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter mb-0">
                        <h2>
                          500
                          <span className="traget">+</span>
                        </h2>
                        <p>Expert Stuff</p>
                      </div>
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

export default VirtualDisinfectionServices;
