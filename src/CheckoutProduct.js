import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

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

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "Remove_from_Basket",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <StarRating rating={rating} />
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
