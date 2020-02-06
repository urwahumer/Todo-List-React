import React, { Component } from "react";
import Navbar from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import combo from "../component/cc.jsx";
import "../component/main.css";
import img2 from "../img2.jpg";
import Cards from "../component/cards.jsx";
import CardCarousel from "../component/card-Carousel.jsx";
import Combo from "../component/cc.jsx";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid p-0">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-12 text-center bg-primary text-white ">
                <h3>Home</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 p-0 imgcap">
                <img className="img img-fluid" src={img2}></img>
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
