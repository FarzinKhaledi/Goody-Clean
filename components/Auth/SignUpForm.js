import React from "react";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <>
      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Create an account!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium quas cumque iste veniam id dolorem deserunt ratione
              error voluptas rem ullam possimus placeat, ut, odio
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Google
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Facebook
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Twitter
                      </button>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Enter your Username"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 ">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">
                          I agree with Ston{" "}
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </label>
                      </div>

                      <div className="agree-label">
                        <input type="checkbox" id="chb2" />
                        <label htmlFor="chb2">
                          I agree with Ston{" "}
                          <Link href="/terms-conditions">
                            Terms & Conditions
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Sign Up
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Already have an account?{" "}
                        <Link href="/sign-in">Sign In</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="sign-up-img"
                style={{ backgroundImage: `url(/img/sign-in-img.jpg)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
