import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MakeAnAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div
        className="appointment-area ptb-100"
        style={{
          backgroundImage: `url(/img/appointment-bg.jpg`,
        }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span>Call To Action</span>
            <h2>Make An Appointment</h2>
          </div>

          <div className="appointment-here-form">
            <form>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="your_name"
                      placeholder="Enter Your Name"
                    />
                    <i className="bx bx-user"></i>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <i className="bx bx-envelope"></i>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Your Phone"
                    />
                    <i className="bx bx-mobile-alt"></i>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
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

                <div className="col-lg-4 col-sm-6">
                  <div className="form-group">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
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
                    Confirm Appointment
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
export default MakeAnAppointment;
