import React, { Component } from "react";

import bg from "../bg.jpg";
import "./card-Carousel.css";
class CardCarousel extends Component {
  render() {
    return (
      <div className="container">
        <div className="carousel-wrapper">
          <div className="carousel" data-flickity>
            <div className="carousel-cell">
              <h3>Product 1</h3>
              <a className="more" href="">
                Explore more
              </a>
              <img src={bg} />
              <div className="line"></div>
              <div className="price">
                <span>
                  225<sup>€</sup>
                </span>
              </div>
            </div>
            <div className="carousel-cell">
              <h3>Product 2</h3>
              <a className="more" href="">
                Explore more
              </a>
              <img src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg" />
              <div className="line"></div>
              <div className="price">
                <span>
                  225<sup>€</sup>
                </span>
              </div>
            </div>
            <div className="carousel-cell">
              <h3>Product 3</h3>
              <a className="more" href="">
                Explore more
              </a>
              <img src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg" />
              <div className="line"></div>
              <div className="price">
                <span>
                  225<sup>€</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCarousel;
