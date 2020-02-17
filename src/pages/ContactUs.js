import React, { Component } from "react";

import Footer from "../component/footer.jsx";
import Example from "../component/HeaderNav.jsx";
import "../component/main.css";
import img1 from "../img1.jpeg";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div className="header">
          <Example />
        </div>

        <div class="content">
          <div className="container-fluid p-0">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-12 text-center bg-dark text-white ">
                  <h3>ContactUs</h3>
                </div>
              </div>
              <div className="row p-0">
                <div className="col-sm-12 p-0">
                  <img className="img" src={img1} alt={this.props.alt}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContactUs;
