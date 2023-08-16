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

      <Product
        id="123456"
        title="HP Pavilion 14 11th Gen Intel Core i7 16GB/1TB SSD 14 inches Laptop, FHD Micro-Edge Anti-Glare Display/Iris X Graphics/Backlit KB/B&O Audio/Fingerprint Reader/Windows 11 Ready/1.41kg, 14-dv0058TU"
        price={93999}
        rating={4.4}
        image="https://m.media-amazon.com/images/I/71hmqIQJFdL._AC_UL320_.jpg"
      />
    </div>
  );
}

export default Home;
