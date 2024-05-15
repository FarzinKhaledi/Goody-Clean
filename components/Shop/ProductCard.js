import React from "react";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      <div className="product-area ptb-100">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select" id="Sorting">
                    <option>Default sorting</option>
                    <option>Antiseptics</option>
                    <option>Medical Gloves</option>
                    <option>Drugs</option>
                    <option>Aspirin</option>
                    <option>Hand Sanitizer</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product1.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Antiseptics</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$55.50</span>
                    <span className="old">$60.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product2.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Medical Gloves</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$50.50</span>
                    <span className="old">$65.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product3.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Drugs</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$13.50</span>
                    <span className="old">$15.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product3.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Asprin</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$10.00</span>
                    <span className="old">$15.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product4.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Sanitizer</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$30.00</span>
                    <span className="old">$35.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <img src="/img/products/product4.jpg" alt="Image" />

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/details">Hand Sanitizer</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$20.00</span>
                    <span className="old">$25.50</span>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
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
