import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area left-sidebar-mb">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>
          <div className="post-wrap">
            <form className="search-form">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-peru-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>
          <div className="post-wrap">
            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-1.png)`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <p className="time">April 20, 2024</p>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    How To Clean And Spread Disinfect
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover bg2"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-2.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <p className="time">April 21, 2024</p>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    What Can I Do To Prevent Myself & prevent Disease
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover bg3"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-3.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <p className="time">April 22, 2024</p>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    Superior Clean Through Our Trained
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </div>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>
          <div className="post-wrap">
            <ul>
              <li>
                <Link href="#">
                  Antibiotic <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Diseases <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Health Care <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Heart Rate <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Hospital <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="#">Antibiotic (3)</Link>
              <Link href="#">Diseases (3)</Link>
              <Link href="#">Heart (2)</Link>
              <Link href="#">Health (2)</Link>
              <Link href="#">Hospital (1)</Link>
              <Link href="#">Infectious</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
