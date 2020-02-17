import React, { Component } from "react";

import Footer from "../component/footer.jsx";

import "../component/main.css";
import img2 from "../img2.jpg";

import CardCarousel from "../component/card-Carousel.jsx";

import Example from "../component/HeaderNav.jsx";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Example />
        <div className="container-fluid p-0">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-12 text-center bg-dark text-white p-2">
                <h3>Home</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 p-0 imgcap">
                <img className="img img-fluid" src={img2} alt=""></img>
                <h2 className="position-absolute caption text-mute">
                  React Site
                </h2>
              </div>
              <div className="col-12 text-center bg-dark text-white mb-5">
                <h3>Gallery</h3>
              </div>
              <CardCarousel />
              <div className="line"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
