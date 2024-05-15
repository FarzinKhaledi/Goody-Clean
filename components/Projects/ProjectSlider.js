import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ProjectSlider = () => {
  return (
    <>
      <section className="project-area pt-100 pb-70">
        <div className="container-fluid p-0">
          <div className="section-title">
            <span>Projects</span>
            <h2>Our Recent Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1700: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="project-slider"
          >
            <SwiperSlide>
              <div className="single-project">
                <img src="/img/projects/project1.jpg" alt="Image" />
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project">
                <img src="/img/projects/project2.jpg" alt="Image" />
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project">
                <img src="/img/projects/project3.jpg" alt="Image" />
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project">
                <img src="/img/projects/project4.jpg" alt="Image" />
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project">
                <img src="/img/projects/project5.jpg" alt="Image" />
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectSlider;
