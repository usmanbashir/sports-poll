import React from "react";

import Poll from "./Poll";

export default class PollsList extends React.Component {
  render() {
    let polls = this.props.polls.map(poll => {
      return (
        <Poll key={poll.id} taken={this.props.pollsTaken} poll={poll} />
      );
    });

    return(
      <div className="polls-list">
        {polls}
      </div>
    );
  }
}
