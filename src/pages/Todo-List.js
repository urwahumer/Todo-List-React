import React, { Component } from "react";

import Todolist1 from "../component/todo-list";
import Header from "../component/header";
import "../component/main.css";
class Todolist extends Component {
  render() {
    return (
      <div>
        <Header />
        <Todolist1 />
      </div>
    );
  }
}

export default Todolist;
