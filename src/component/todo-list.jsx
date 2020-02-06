import React, { Component } from "react";
import InputField from "./inputField";
import ListItem from "./List";
import "./main.css";
class Todolist1 extends Component {
  check = (a, text) => {
    const el = document.getElementById(text);
    if (el.style.textDecoration === "line-through") {
      document.getElementById(text).style.textDecoration = "none";
      document.getElementById(text).style.color = "black";
    } else {
      document.getElementById(text).style.textDecoration = "line-through";
      document.getElementById(text).style.color = "#e17055";
    }

    console.log(a, text);

    // const cb = document.getElementsByName(tb);
    // if (cb.checked == true) {
    //   document.getElementById(handle).style.textDecoration = "line-through";
    // } else {
    //   document.getElementById(handle).style.textDecoration = "none";
    // }
  };
  state = {
    list: [
      { id: 1, title: "Hit the Gym", isComplete: false },
      { id: 2, title: "Pay Bills" },
      { id: 3, title: "Buy Some Eggs" }
    ]
  };

  handleClick = () => {
    const inputVal = document.getElementById("inputText").value;
    if (inputVal === "") {
      alert("You must write something!");
    } else {
      console.log(inputVal);
      const lastId = this.state.list[this.state.list.length - 1].id + 1;

      let newListItem = { id: lastId, title: inputVal };

      const list = [...this.state.list];
      list.push(newListItem);
      this.setState({ list });
      document.getElementById("inputText").value = "";
    }
  };
  delete = list => {
    return () => {
      const newList = this.state.list.filter(li => li.id !== list.id);
      this.setState({ list: newList });
    };
  };

  render() {
    return (
      <div className="bg-light">
        <div className="container-fluid todo-header">
          <div className="container text-center ">
            <h1 className="font-weight-bold">
              {" "}
              <span className="styling">Todo</span>List
            </h1>
          </div>
        </div>
        <div className="container   mt-5 mb-5 todo-input">
          <InputField onClick={this.handleClick} />
          <ListItem
            lists={this.state.list}
            onDelete={this.delete}
            onClick={this.check}
          />
        </div>
      </div>
    );
  }
}

export default Todolist1;
