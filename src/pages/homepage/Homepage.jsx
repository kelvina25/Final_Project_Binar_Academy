import React from "react";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";

import banner from "../../assets/imgBanner.png";

import DestinationCards from "../../components/destinationCards/DestinationCards";

import SearchFlight from "../../components/searchFlight/SearchFlight";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="background__banner"></div>

        <SearchFlight />
      </div>
      <div className="destinationCardWrapper">
        <DestinationCards />
      </div>
    </div>
  );
};

export default Homepage;
