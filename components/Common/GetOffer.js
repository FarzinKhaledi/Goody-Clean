import React from "react";
import Link from "next/link";

const GetOffer = () => {
  return (
    <>
      <div className="get-offer pb-100">
        <div className="container">
          <div className="get-offer-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="get-offer-content">
                  <h3>Get 20% Off</h3>
                  <h3 className="color">Save Money Save Time</h3>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="get-offer">
                  <Link href="/contact" className="default-btn">
                    Get A Quote
                  </Link>
                  <Link href="/appointment" className="default-btn active">
                    Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetOffer;
