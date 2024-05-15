import React from "react";

const SearchLocationForm = () => {
  return (
    <>
      <div className="location-search-area pb-100">
        <div className="container">
          <form className="location-search-wrap">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Location"
                    placeholder="Find Your Location"
                  />
                  <i className="bx bx-location-plus"></i>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="form-group">
                  <select className="form-select" id="SelectService">
                    <option value="">Select Service</option>
                    <option value="">House Cleaning</option>
                    <option value="">Apartment Cleaning</option>
                    <option value="">Industry Cleaning</option>
                    <option value="">Hospital & Health Care</option>
                    <option value="">Bathroom Cleaning</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group search">
                  <input
                    type="text"
                    className="form-control"
                    id="Search"
                    placeholder="Start Your Search"
                  />
                  <button type="button" className="search-btn">
                    <i className="bx bx-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchLocationForm;
