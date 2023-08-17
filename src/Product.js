import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  if (typeof rating !== "number" || !Number.isInteger(rating) || rating < 1) {
    return null;
  }
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>Rs.</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
      </div>
    </div>
  );
}

export default Product;
