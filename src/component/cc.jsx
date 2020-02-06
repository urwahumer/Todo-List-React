import React, { Component } from "react";

import bg from "../bg.jpg";
import img1 from "../img1.jpeg";
import "./main.css";
class cc extends Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100 cc" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100 cc" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100 cc" alt="..."></img>
          </div>
        </div>
      </div>
    );
  }
}

export default cc;
