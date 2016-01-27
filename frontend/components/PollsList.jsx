import React from "react";

import Poll from "./Poll";

export default class PollsList extends React.Component {
  render() {
    let polls = this.props.polls.map(poll => <Poll key={poll.id} {...poll} />);

    return(
      <div className="polls-list">
        {polls}
      </div>
    );
  }
}
