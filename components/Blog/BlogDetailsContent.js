import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src="/img/blog-details/blog-details.jpg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> May 19, 2024
                      </li>
                      <li>
                        <span>Posted By:</span>{" "}
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>What Can I Do To Prevent Myself & prevent Disease</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit, consectetur
                    qui ratione voluptatem sequi nesciunt.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat labore et dolore magna aliqua
                    consectetur adipisicing elit.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus aliquid praesentium eveniet illum asperiores,
                      quidem, ipsum voluptatum numquam ducimus nisi
                      exercitationem dolorum facilis Repellendus aliquid
                      praesentium eveniet illum asperiores.
                    </p>
                  </blockquote>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat ullamco laboris nisi ut aliquip ex ea
                    commodo laboris nisi.
                  </p>

                  <div className="row mb-3 justify-content-center">
                    <div className="col-lg-4 col-sm-6 mt-3 mb-2">
                      <div className="b-d-s-img">
                        <img src="/img/blog/blog4.jpg" alt="Image" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 mt-3 mb-2">
                      <div className="b-d-s-img">
                        <img src="/img/blog/blog5.jpg" alt="Image" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 mt-3 mb-2">
                      <div className="b-d-s-img">
                        <img src="/img/blog/blog6.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam. consectetur adipisicing elit, sed
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam. consectetur adipisicing elit, sed
                  </p>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <Comments />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
