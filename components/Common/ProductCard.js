import React from "react";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      <div className="products-area">
        <div className="container">
          <div className="section-title">
            <span>Products</span>
            <h2>Our Popular Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-product">
                <div className="product-img">
                  <img src="/img/products/product1.jpg" alt="Image" />

                  <button type="button" className="default-btn">
                    Add To Cart
                  </button>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/products/details">COVID-19 Protect Mask</Link>
                  </h3>

                  <ul>
                    <li>$20</li>
                    <li>
                      <del>$25</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product">
                <div className="product-img">
                  <img src="/img/products/product2.jpg" alt="Image" />

                  <button type="button" className="default-btn">
                    Add To Cart
                  </button>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Surgical Hand Gloves</Link>
                  </h3>

                  <ul>
                    <li>$23</li>
                    <li>
                      <del>$25</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product">
                <div className="product-img">
                  <img src="/img/products/product1.jpg" alt="Image" />

                  <button type="button" className="default-btn">
                    Add To Cart
                  </button>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Cleaning Agent Solve</Link>
                  </h3>

                  <ul>
                    <li>$30</li>
                    <li>
                      <del>$35</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
