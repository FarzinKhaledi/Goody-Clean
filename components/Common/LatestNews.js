import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">News</span>
            <h2>Our Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/details">
                  <img src="/img/blog/blog1.jpg" alt="Image" />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>17 / 05 / 2024</li>
                  </ul>

                  <Link href="/blog/details">
                    <h3>Corona Virus Infection Prevention</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/details">
                  <img src="/img/blog/blog2.jpg" alt="Image" />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>18 / 05 / 2024</li>
                  </ul>

                  <Link href="/blog/details">
                    <h3>Superior Clean Through Our Trained</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-blog">
                <Link href="/blog/details">
                  <img src="/img/blog/blog3.jpg" alt="Image" />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>19 / 05 / 2024</li>
                  </ul>

                  <Link href="/blog/details">
                    <h3>How To Clean And Spread Disinfect</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
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

export default LatestNews;
