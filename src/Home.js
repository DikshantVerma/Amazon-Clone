import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="
        https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          title="HP OMEN AMD Ryzen 5-4600H 15.6 inches FHD Gaming Laptop (8GB/512GB SSD/Windows 10 Home/NVIDIA GTX 1660ti 6GB/Shadow Black/2.36 kg), 15-en0002AX "
          price={79990}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Z1Ccm4MnL._SX679_.jpg"
        />

        <Product
          id="234567"
          title="Royal Canin Golden Retriver Adult Pellet Dog Food, Meat Flavour, 3 KG "
          price={2412}
          rating={4.8}
          image="https://m.media-amazon.com/images/I/51jYnrWWR6L._SY879_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="345678"
          title="GREENLIGHTS [Paperback] McConaughey, Matthew"
          price={433}
          rating={5}
          image="https://m.media-amazon.com/images/I/413V+0U5lpL._SX324_BO1,204,203,200_.jpg"
        />
        <Product
          id="456789"
          title="Karachi Fruit Biscuit - Premium, 400 g"
          price={190}
          rating={5}
          image="https://m.media-amazon.com/images/I/91h9Kbm0U7L._SX679_.jpg"
        />
        <Product
          id="567890"
          title="Bosch Professional GWS 600 Angle Grinder - 670W, 100mm, M10 (Blue), Multipurpose"
          price={2199}
          rating={4.3}
          image="https://m.media-amazon.com/images/I/61q1hsx5BPL._SX522_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="678901"
          title="Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900CKXXL (Titan Black)"
          price={1224990}
          rating={5}
          image="https://m.media-amazon.com/images/I/91RnDCyguML._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
