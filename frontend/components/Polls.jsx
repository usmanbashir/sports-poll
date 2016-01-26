import React from "react";
import { Link } from "react-router";

import PollsList from "./PollsList";

let getState = () => {
  return {
    pollsList: [
      { id: 1, name: "Mock 1" },
      { id: 2, name: "Mock 2" },
      { id: 3, name: "Mock 3" }
    ]
  }
}

export default class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }

  render() {
    return(
        <PollsList polls={this.state.pollsList} />
    );
  }
}
