import React from "react";
import { Link } from "react-router";

import PollsList from "./PollsList";
import PollStore from "../stores/PollStore";
import PollActions from "../actions/PollActions";

let getState = () => {
  return { 
    pollsList: PollStore.getAll(),
    pollsTaken: PollStore.getAllVotedByCurrentUser()
  };
}

export default class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PollActions.getAllPolls();
    PollStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    PollStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getState());
  }

  render() {
    return(
      <div className="polls">
        <PollsList polls={this.state.pollsList}
                   pollsTaken={this.state.pollsTaken} />
      </div>
    );
  }
}
