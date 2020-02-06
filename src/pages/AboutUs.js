import React, { Component } from "react";
import Navbar from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import Cards from "../component/cards";
import "../component/main.css";
import bg from "../bg.jpg";
import CardCarousel from "../component/card-Carousel.jsx";
class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid p-0">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-12 text-center bg-primary text-white ">
                <h3>AboutUs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 p-0">
                <img className="img img-fluid" src={bg}></img>
              </div>
              <Cards />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
