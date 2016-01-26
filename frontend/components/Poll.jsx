import React from "react";

export default class Poll extends React.Component {
  render() {
    return(
      <li className="collection-item">
        <span className="title">{this.props.name}</span>
      </li>
    );
  }
}
