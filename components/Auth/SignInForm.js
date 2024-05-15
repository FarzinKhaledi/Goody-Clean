import React from "react";
import Link from "next/link";

const SignInForm = () => {
  return (
    <>
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Sign In to your account!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium quas cumque iste veniam id dolorem deserunt ratione
              error voluptas rem ullam possimus placeat, ut, odio
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
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

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Username or Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Remember Me</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password" className="forget">
                        Forgot my password?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Sign In
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member? <Link href="/sign-up">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="log-in-img"
                style={{ backgroundImage: `url(/img/log-in-img.jpg)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
