import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <div className=" form-group row  justify-content-center">
        <div className="col-sm-10 col-9  ">
          <input
            type="text"
            className="form-control ic"
            id="inputText"
            placeholder="Enter Your New Todo"
          ></input>
        </div>

        <h2 style={{ cursor: "pointer" }}>
          {" "}
          <i
            onClick={this.props.onClick}
            className="fas fa-plus-circle mt-3"
          ></i>
        </h2>
      </div>
    );
  }
}

export default InputField;
