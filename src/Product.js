import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
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
