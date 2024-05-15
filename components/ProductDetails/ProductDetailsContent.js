import React from "react";
import Link from "next/link";
import QuantityCounter from "./QuantityCounter";

const ProductDetailsContent = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <div className="product-details-image">
          <img src="/img/products/product1.jpg" alt="Image" />
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className="product-details-desc">
          <h3>Antiseptics</h3>

          <div className="price">
            <span className="new-price">Price: $60.00</span>
          </div>

          <div className="product-review">
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <Link href="#" className="rating-count">
              3 reviews
            </Link>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <div className="product-add-to-cart">
            {/* QuantityCounter */}
            <QuantityCounter />

            <button 
              type="submit"
              className="default-btn"
            >
              Add to Cart
            </button>
          </div>

          <div className="buy-checkbox-btn">
            <div className="item">
              <input className="inp-cbx" id="cbx" type="checkbox" />
              <label className="cbx" htmlFor="cbx">
                <span>
                  <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>I agree with the terms and conditions</span>
              </label>
            </div>

            <div className="item">
              <button className="default-btn">
                Buy it now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContent;
