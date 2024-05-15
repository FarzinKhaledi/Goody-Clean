import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AppointmentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="appointment-area appointment-area-three appointment-page ptb-100">
        <div className="container">
          <div className="appointment-here-form">
            <div className="section-title">
              <span>Call To Action</span>
              <h2>Make An Appointment</h2>
            </div>

            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter Your Name"
                    />
                    <i className="bx bx-user"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Enter Your Email"
                    />
                    <i className="bx bx-envelope"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Enter Your Phone"
                    />
                    <i className="bx bx-mobile-alt"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <select className="form-select" id="SelectService">
                      <option>Select Service</option>
                      <option>House Cleaning</option>
                      <option>Apartment Cleaning</option>
                      <option>Industry Cleaning</option>
                      <option>Hospital & Health Care</option>
                      <option>Bathroom Cleaning</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <select className="form-select" id="SelectTime">
                      <option>Select Time</option>
                      <option>09.00 AM To 10.00 AM</option>
                      <option>10.00 AM To 11.00 AM</option>
                      <option>11.00 AM To 12.00 PM</option>
                      <option>12.00 PM To 01.00 PM</option>
                      <option>01.00 PM To 03.00 PM</option>
                      <option>04.00 PM To 06.00 PM</option>
                      <option>07.00 PM To 10.00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    Send Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
