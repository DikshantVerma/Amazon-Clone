import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="flex-container">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/CBCC_maple_2._CB662107477_.jpg"
          alt=""
        />
        <div className="a-section maple-banner__col">
          <div className="a-section maple-banner__text">
            Get Amazon Pay credit card in{" "}
            <span className="a-color-price a-text-bold">60 seconds</span>. Prime
            members can get extra{" "}
            <span className="a-color-price a-text-bold">
              5% back (Rs.1,875.50)
            </span>{" "}
            on this order. <span className="a-text-bold">Apply now</span>.
          </div>
        </div>
      </div>
      {basket?.length === 0 ? (
        <div>
          <h2>Your Amazon Cart is empty.</h2>
          <p>Check your Saved for later items below or continue shopping.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
