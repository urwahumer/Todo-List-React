import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../component/main.css";
import Example from "../component/HeaderNav";
import bg from "../bg.jpg";
import Axios from "axios";
const initialstate = {
  img: { bg },
  email: "",
  username: "",
  phoneNo: "",
  password: "",
  date: "",
  emailError: "",
  usernameError: "",
  phoneNoError: "",
  dateError: "",
  passwordError: "",
  message: ""
};
class Forms extends Component {
  state = initialstate;

  clickFileChange = e => {
    this.setState({
      img: URL.createObjectURL(e.target.files[0])
    });
    console.log(this.state.img);
  };
  username = e => {
    this.setState({ username: e.target.value });
    if (this.state.username === "") {
      this.setState({ usernameError: "Invalid Username" });
    } else this.setState({ usernameError: "" });
    console.log(e.target.value);
  };
  phoneNo = e => {
    this.setState({ phoneNo: e.target.value });
    if (this.state.phoneNo === "") {
      this.setState({ phoneNoError: "Invalid PhoneNo" });
    } else this.setState({ phoneNoError: "" });
    console.log(e.target.value);
  };
  date = e => {
    this.setState({ date: e.target.value });
    if (this.state.username === "") {
      this.setState({ dateError: "Invalid date" });
    } else this.setState({ dateError: "" });
    console.log(e.target.value);
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Invalid email adress" });
    } else this.setState({ emailError: "" });
    console.log(e.target.value);
  };
  handlePswd = e => {
    this.setState({ password: e.target.value });
    if (this.state.password.length < 8) {
      this.setState({ passwordError: "password length greater than 8" });
    } else this.setState({ passwordError: "" });
    console.log(e.target.value);
  };

  handleSubmitForms = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const img = this.state.img;
    const username = this.state.username;
    const phoneNo = this.state.phoneNo;
    const date = this.state.date;
    const data = {
      email,
      password,
      img,
      username,
      phoneNo,
      date
    };
    if (
      this.state.email.length === 0 &&
      this.state.password.length === 0 &&
      this.state.username.length === 0 &&
      this.state.phoneNo.length === 0 &&
      this.state.date.length === 0
    ) {
      this.setState({ emailError: "Empty email Field" });
      this.setState({ passwordError: "Empty password Field" });
      this.setState({ usernameError: "Empty username Field" });
      this.setState({ phoneNoError: "Empty phoneNo Field" });
      this.setState({ dateError: "Empty date Field" });
    } else if (this.state.email.length > 0 && this.state.password.length > 0) {
      Axios.post("/t/r5ef8-1581606221/post", data)
        .then(Response => {
          console.log(Response);
          this.setState({
            message: Response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState(initialstate);

      alert(JSON.stringify(this.state));
    }
  };
  render() {
    return (
      <div>
        <Example />
        <div className="container-fluid bg-dark text-center p-2 text-light">
          <h1>Login Verification</h1>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-center ">
              <Form onSubmit={this.handleSubmitForms}>
                <FormGroup className="d-flex justify-content-center">
                  <div
                    className="circular"
                    onClick={() => this.fileInput.click()}
                  >
                    <img
                      style={{ width: "30%", borderRadius: "50%" }}
                      src={this.state.img}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="d-flex justify-content-center">
                  <input
                    type="file"
                    className="bg-dark"
                    onChange={this.clickFileChange}
                    accept=".jpg, .jpeg, .png"
                    style={{ display: "none" }}
                    ref={fileInput => (this.fileInput = fileInput)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="eusername"
                    name="username"
                    value={this.state.username}
                    onChange={this.username}
                    placeholder="Username"
                  />
                  <span
                    style={{ color: "red", fonSize: "10px" }}
                    className="wiggle"
                  >
                    <p className="wiggle">{this.state.usernameError}</p>
                  </span>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder="Email"
                  />
                  <span
                    style={{ color: "red", fonSize: "10px" }}
                    className="wiggle"
                  >
                    <p className="wiggle">{this.state.emailError}</p>
                  </span>
                </FormGroup>
                <FormGroup>
                  <Label for="PhoneNo">PhoneNo</Label>
                  <Input
                    type="eusername"
                    name="username"
                    value={this.state.phoneNo}
                    onChange={this.phoneNo}
                    placeholder="PhoneNo"
                  />
                  <span
                    style={{ color: "red", fonSize: "10px" }}
                    className="wiggle"
                  >
                    <p className="wiggle">{this.state.phoneNoError}</p>
                  </span>
                </FormGroup>
                <FormGroup>
                  <Label for="Date">Date 0f Borth</Label>
                  <input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.date}
                    placeholder="Email"
                  ></input>
                  <span
                    style={{ color: "red", fonSize: "10px" }}
                    className="wiggle"
                  >
                    <p className="wiggle">{this.state.dateError}</p>
                  </span>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePswd}
                    placeholder="Password"
                  />
                  <span style={{ color: "red", fonSize: "10px" }}>
                    <p className="wiggle">{this.state.passwordError}</p>
                  </span>
                </FormGroup>
                <div className="d-flex justify-content-center mb-5">
                  <Button className="button-center ">Submit</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
