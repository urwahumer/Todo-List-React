import React, { Component } from "react";

import Todolist1 from "../component/todo-list";

import "../component/main.css";
import Example from "../component/HeaderNav.jsx";
class Todolist extends Component {
  render() {
    return (
      <div>
        <Example />
        <Todolist1 />
      </div>
    );
  }
}

export default Todolist;
