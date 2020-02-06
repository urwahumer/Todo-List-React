import React, { Component } from "react";

import bg from "../bg.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-3 col-12 mb-3">
            <div className="card ">
              <img className="card-img-top" src={bg} alt="Card image cap"></img>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" class="btn btn-success">
                  Success
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 mb-3">
            <div className="card ">
              <img className="card-img-top" src={bg} alt="Card image cap"></img>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" class="btn btn-Danger">
                  Success
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 mb-3">
            <div className="card ">
              <img className="card-img-top" src={bg} alt="Card image cap"></img>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 mb-3">
            <div className="card">
              <img className="card-img-top" src={bg} alt="Card image cap"></img>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" class="btn btn-warning">
                  Warning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
