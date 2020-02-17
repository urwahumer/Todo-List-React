import React, { Component } from "react";
import "./main.css";

class Imgfilechooser extends Component {
  render() {
    return (
      <div>
        <div className="circular" onClick={() => this.fileupload.click()}>
          <img
            style={{ width: "30%", borderRadius: "50%" }}
            src={this.state.img}
          />
          <input
            type="file"
            className="bg-dark"
            onChange={this.clickFileChange}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png"
            ref={fileupload => (this.fileupload = fileupload)}
          />
        </div>
      </div>
    );
  }
}

export default Imgfilechooser;
