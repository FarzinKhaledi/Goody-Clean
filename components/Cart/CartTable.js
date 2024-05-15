import React from "react";
import Link from "next/link";
import QuantityCounter from "./QuantityCounter";

const CartTable = () => {
  return (
    <>
      <section className="cart-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-wraps">
                  <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Name</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/products/details">
                              <img
                                src="/img/products/product1.jpg"
                                alt="Image"
                              />
                            </Link>
                          </td>

                          <td className="product-name">
                            <Link href="/products/details">Antiseptics</Link>
                          </td>

                          <td className="product-price">
                            <span className="unit-amount">$60.00</span>
                          </td>

                          <td className="product-quantity">
                            <QuantityCounter />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$60.00</span>

                            <button type="button" className="remove">
                              <i className="bx bx-trash"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/products/details">
                              <img
                                src="/img/products/product2.jpg"
                                alt="Image"
                              />
                            </Link>
                          </td>

                          <td className="product-name">
                            <Link href="/products/details">Medical Gloves</Link>
                          </td>

                          <td className="product-price">
                            <span className="unit-amount">$20.50</span>
                          </td>

                          <td className="product-quantity">
                            <QuantityCounter />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$20.50</span>

                            <button type="button" className="remove">
                              <i className="bx bx-trash"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/products/details">
                              <img
                                src="/img/products/product3.jpg"
                                alt="Image"
                              />
                            </Link>
                          </td>

                          <td className="product-name">
                            <Link href="/products/details">Drugs</Link>
                          </td>

                          <td className="product-price">
                            <span className="unit-amount">$50.00</span>
                          </td>

                          <td className="product-quantity">
                            <QuantityCounter />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$50.00</span>

                            <button type="button" className="remove">
                              <i className="bx bx-trash"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-thumbnail">
                            <Link href="/products/details">
                              <img
                                src="/img/products/product4.jpg"
                                alt="Image"
                              />
                            </Link>
                          </td>

                          <td className="product-name">
                            <Link href="/products/details">Asprin</Link>
                          </td>

                          <td className="product-price">
                            <span className="unit-amount">$20.50</span>
                          </td>

                          <td className="product-quantity">
                            <QuantityCounter />
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$20.50</span>

                            <button type="button" className="remove">
                              <i className="bx bx-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cart-buttons">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-sm-7 col-md-7">
                        <div className="continue-shopping-box">
                          <Link href="#" className="default-btn page-btn">
                            Continue Shopping
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                        <button type="button" className=" default-btn page-btn">
                          Update Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="coupon-wrap">
                      <div className="shops-form">
                        <h3>Calculate Shipping</h3>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <select className="form-select">
                                <option value="1">Credit Card Type</option>
                                <option value="2">VISA</option>
                                <option value="3">Master Card</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group col-lg-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Credit Card Number"
                            />
                          </div>

                          <div className="form-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Card Verification Number"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                          />
                        </div>

                        <button type="button" className="default-btn page-btn">
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="cart-totals">
                      <h3>Cart Totals</h3>
                      <ul>
                        <li>
                          Subtotal <span>$151.00</span>
                        </li>
                        <li>
                          Shipping <span>$30.00</span>
                        </li>
                        <li>
                          Coupon <span>$20.00</span>
                        </li>
                        <li>
                          Total{" "}
                          <span>
                            <b>$161.00</b>
                          </span>
                        </li>
                      </ul>

                      <button type="button" className="default-btn page-btn">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartTable;
