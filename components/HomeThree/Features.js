import React from "react";

const Features = () => {
  return (
    <>
      <div className="feature-three pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Feature</span>
            <h2>Your Comfort Depends on Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature-three">
                <span className="flaticon-broom"></span>
                <h3>Professional Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature-three">
                <span className="flaticon-premium-quality"></span>
                <h3>High Quality</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-feature-three">
                <span className="flaticon-hand-wash-1"></span>
                <h3>Quick Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
