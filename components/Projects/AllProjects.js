import React from "react";
import Link from "next/link";

const AllProjects = () => {
  return (
    <>
      <div className="project-area project-page ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our All Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project1.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">Window Cleaning</Link>
                  </h3>
                  <span>Office</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project2.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">Kitchen Cleaning</Link>
                  </h3>
                  <span>Home</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project3.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">Commercial cleaning</Link>
                  </h3>

                  <span>Office Space</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project4.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">Hand Sanitizer</Link>
                  </h3>

                  <span>Self Protect</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project5.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">Floor Cleaning</Link>
                  </h3>

                  <span>Hospital</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project">
                <Link href="/projects/details">
                  <img src="/img/projects/project6.jpg" alt="Image" />
                </Link>
                <div className="project-content">
                  <h3>
                    <Link href="/projects/details">House Cleaning</Link>
                  </h3>

                  <span>House</span>

                  <Link href="/projects/details">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link href="#" className="page-link page-links">
                      <i className="bx bx-chevrons-left"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link href="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      <i className="bx bx-chevrons-right"></i>
                    </Link>
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

export default AllProjects;
