import React, { Component } from "react";
import "./App.css";
import logo from "./MYtineraryLogo.png";
import arrow from "./circled-right-2.png";

class Body extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="container">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>

        <h3>Start browsing</h3>
        <div className="ArrowText">
          <div className="Arrow">
            <img src={arrow} className="Arrows" alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
