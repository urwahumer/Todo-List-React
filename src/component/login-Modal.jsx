import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";

import { withRouter } from "react-router-dom";
import "./main.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Axios from "axios";

const initialstate = {
  img: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  message: "",
  modal: false,
  snackbarOpen: false,
  snackbarMessage: "",
  profileName: ""
};
class ModalExample extends React.Component {
  state = initialstate;
  snackbarClose = event => {
    this.setState({ snackbarOpen: false });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  btnSignup = () => {
    this.setState({ modal: false });
    window.console.log("hallo");
  };

  clickFileChange = e => {
    this.setState({
      img: URL.createObjectURL(e.target.files[0])
    });
    console.log(this.state.img);
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
    const data = {
      email,
      password,
      img
    };
    if (this.state.email.length === 0 && this.state.password.length === 0) {
      this.setState({ snackbarMessage: "Wrong Credentials" });
      this.setState({ snackbarOpen: true });
      this.setState({ emailError: "Empty password Field" });
      this.setState({ passwordError: "Empty password Field" });
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
      const ename = this.state.email.substring(
        0,
        this.state.email.indexOf("@")
      );
      this.setState({ profileName: ename });
      console.log(this.state.profileName);
      this.setState({ snackbarMessage: ename + " Successfully Logged In" });
      this.setState({ snackbarOpen: true });
      this.setState({ modal: false });
    }
  };

  render() {
    return (
      <div>
        <div>
          <i class="fa fa-user" onClick={this.toggle}>
            <b className="ml-2"> {this.state.profileName}</b>
          </i>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
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
                        onClick={() => this.fileupload.click()}
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
                        style={{ display: "none" }}
                        accept=".jpg, .jpeg, .png"
                        ref={fileupload => (this.fileupload = fileupload)}
                      />
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
                    <div className="d-flex justify-content-center">
                      <Button color="primary">Signin</Button>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <Router>
                  <Link>
                    <Button
                      className="button-center pl-4 pr-4"
                      onClick={this.btnSignup}
                      to="/Signuppage.js"
                    >
                      Signup
                    </Button>
                  </Link>
                </Router>
              </div>
            </div>
          </ModalBody>
        </Modal>
        <Snackbar
          open={this.state.snackbarOpen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          message={<p>{this.state.snackbarMessage}</p>}
        ></Snackbar>
      </div>
    );
  }
}

export default ModalExample;
