import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CheckoutPage.css";

const CheckoutPage = ({ children }) => {
  return (
    <div className="bao">
      <div className="content">
        <div className="wrap">
          <div className="main">{children}</div>

          <div className="sidebar">
            <div className="sidebar-content">
              <div className="order-summary order-summary-is-collapsed">
                <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                <div className="order-summary-sections">
                  <div className="order-summary-section order-summary-section-product-list">
                    <table className="product-table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="visually-hidden">Hình ảnh</span>
                          </th>
                          <th scope="col">
                            <span className="visually-hidden">Mô tả</span>
                          </th>
                          <th scope="col">
                            <span className="visually-hidden">Số lượng</span>
                          </th>
                          <th scope="col">
                            <span className="visually-hidden">Giá</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="product" data-product-id="1040710178">
                          <td className="product-image">
                            <div className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <img
                                  className="product-thumbnail-image"
                                  alt="Blue Dara Top"
                                  src="//product.hstatic.net/1000370235/product/0501_a0e6803ba5de4066936a50e118c7be03_small.jpg"
                                />
                              </div>
                              <span
                                className="product-thumbnail-quantity"
                                aria-hidden="true"
                              >
                                1
                              </span>
                            </div>
                          </td>
                          <td className="product-description">
                            <span className="product-description-name order-summary-emphasis">
                              Blue Dara Top
                            </span>

                            <span className="product-description-variant order-summary-small-text">
                              S
                            </span>
                          </td>
                          <td className="product-quantity visually-hidden">
                            1
                          </td>
                          <td className="product-price">
                            <span className="order-summary-emphasis">
                              203,000₫
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="order-summary-section order-summary-section-discount">
                    <form
                      id="form_discount_add"
                      acceptCharset="UTF-8"
                      method="post"
                    >
                      <input name="utf8" type="hidden" value="✓" />
                      <div className="fieldset">
                        <div className="field  ">
                          <div className="field-input-btn-wrapper">
                            <div className="field-input-wrapper">
                              <label
                                className="field-label"
                                htmlFor="discount.code"
                              >
                                Mã giảm giá
                              </label>
                              <input
                                placeholder="Mã giảm giá"
                                className="field-input"
                                size="30"
                                type="text"
                                id="discount.code"
                                name="discount.code"
                              />
                            </div>
                            <button
                              type="submit"
                              className="field-input-btn btn btn-default btn-disabled"
                            >
                              <span className="btn-content">Sử dụng</span>
                              <i className="btn-spinner icon icon-button-spinner"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="order-summary-section order-summary-section-total-lines payment-lines">
                    <table className="total-line-table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="visually-hidden">Mô tả</span>
                          </th>
                          <th scope="col">
                            <span className="visually-hidden">Giá</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="total-line total-line-subtotal">
                          <td className="total-line-name">Tạm tính</td>
                          <td className="total-line-price">
                            <span className="order-summary-emphasis">
                              203,000₫
                            </span>
                          </td>
                        </tr>

                        <tr className="total-line total-line-shipping">
                          <td className="total-line-name">Phí vận chuyển</td>
                          <td className="total-line-price">
                            <span className="order-summary-emphasis">—</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="total-line-table-footer">
                        <tr className="total-line">
                          <td className="total-line-name payment-due-label">
                            <span className="payment-due-label-total">
                              Tổng cộng
                            </span>
                          </td>
                          <td className="total-line-name payment-due">
                            <span className="payment-due-currency">VND</span>
                            <span className="payment-due-price">203,000₫</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;