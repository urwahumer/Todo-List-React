import React, { Component } from "react";
import "./main.css";
class ListItem extends Component {
  render() {
    return (
      <div className="pb-5">
        <ul className="ul" id="list">
          {this.props.lists.map(l => (
            <li>
              <input
                type="checkbox"
                className="mr-3 chkbox1 "
                id={l.id}
                onClick={() => this.props.onClick(l.id, l.title)}
              ></input>
              <span id={l.title}>{l.title}</span>

              <i
                onClick={this.props.onDelete(l)}
                className="fas fa-trash-alt  styling right"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListItem;
