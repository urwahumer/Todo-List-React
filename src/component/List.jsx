import React, { Component } from "react";
import "./main.css";
class ListItem extends Component {
  render() {
    return (
      <div className=" ">
        <ul className="ul" id="list">
          {this.props.lists.map(l => (
            <li>
              <span className="container-fluid">
                <span className="row">
                  <span className="col-1">
                    <input
                      type="checkbox"
                      className=" "
                      onClick={() => this.props.onClick(l.id)}
                    ></input>
                  </span>
                  <span className="col-10" id={l.id}>
                    {l.title}
                  </span>
                  <span className="col-1">
                    <i
                      onClick={this.props.onDelete(l)}
                      className="fas fa-trash-alt   right"
                    ></i>
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListItem;
