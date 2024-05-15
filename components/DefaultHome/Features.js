import React from "react";

const Features = () => {
  return (
    <>
      <div className="feature-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="feature-wrap">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-feature">
                      <i className="flaticon-satisfaction"></i>
                      <h3>Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="single-feature">
                      <i className="flaticon-cleaning"></i>
                      <h3>Expert Cleaner</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                    <div className="single-feature">
                      <i className="flaticon-support"></i>
                      <h3>24/7 Support</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="hot-line">
                <span>Hot Line</span>
                <h3>
                  <i className="bx bx-phone-call"></i> Contact Us Today!
                </h3>
                <a href="tel:+61-821-456">+61-821-456</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
