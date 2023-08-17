import React from "react";
import "./Product.css"; // You can import your CSS styles here

function StarRating({ rating }) {
  const renderStars = () => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const remainingStars = maxStars - fullStars;
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half">⭐️</span>);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>);
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
}

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <StarRating rating={rating} />
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
