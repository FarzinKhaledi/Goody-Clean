import React from "react";

const AboutContentTwo = () => {
  return (
    <>
      <div className="about-area-two bg-color pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img-two">
                <img src="/img/about-img-two.jpg" alt="Image" />

                <p className="block-p page-mb">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  expedita, illum debitis ex sed culpa perferendis.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content-two">
                <span>About Us</span>
                <h2>We Offer a Wide Range of Disinfecting Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, facere necessitatibus. Dignissimos saepe
                  molestias maiores officia veniam! Eveniet harum vel voluptas
                  eius saepe unde molestiae doloribus! Cum facilis nesciunt
                  eius!
                </p>

                <ul>
                  <li>
                    <i className="flaticon-checked-1"></i>
                    Deep Cleaning Service
                  </li>
                  <li>
                    <i className="flaticon-checked-1"></i>
                    Disinfecting Services
                  </li>
                  <li>
                    <i className="flaticon-checked-1"></i>
                    COVID-19 Disinfecting
                  </li>
                  <li>
                    <i className="flaticon-checked-1"></i>
                    Virucidal Disinfectants
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

export default AboutContentTwo;
