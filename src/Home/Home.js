import React from "react";
import "./Css_Home.css";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <>
      <div class="parent">
        {/* <NavBar/> */}
        <div>
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt=""
          />
        </div>

        <div class="logo">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt=""
          />
        </div>

        <div class="text">
          <p>Find the best restaurants, cafés and bars in India</p>
        </div>

        <div class="input">
          <i class="location-icon fa-solid fa-location-dot"></i>
          <input
            class="first-inp"
            type="text"
            name=""
            id=""
            placeholder="Bhopal"
          />
          <i class="down-icon fa-solid fa-sort-down"></i>

          <input
            class="second-inp"
            type="text"
            placeholder="Search for restaurant,cuisine and a dish"
          />
          <i class="search-icon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
