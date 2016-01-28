import React from "react";
import cards from "materialize-css/js/cards";
import waves from "materialize-css/js/waves";
import buttons from "materialize-css/js/buttons";

import Vote from "./PollVote";

export default class Poll extends React.Component {
  render() {
    let revealComponent = null;

    if (this.props.taken.indexOf(this.props.poll.id) >= 0) {
      revealComponent = (
        <span className="card-title grey-text text-darken-1">
          Poll Results
          <i className="right fa fa-times"></i>
        </span>
      );
    } else {
      revealComponent = (
        <Vote id={this.props.poll.id}
              home_team={this.props.poll.event.home_team}
              away_team={this.props.poll.event.away_team} />
      );
    }

    return(
      <div className="row poll">
        <div className="col s12 m10 l6 offset-m1 offset-l3">
          <div className="card medium">

            <div className="card-title front container">
              <div className="row flow-text">
                <div className="col s5 m5 center-align">
                  <img className="responsive-img" src={this.props.poll.event.home_team_logo} />
                  <span>{this.props.poll.event.home_team}</span>
                </div>

                <div className="col s2 m2 valign-wrapper poll-vs">
                  <strong className="valign center-align">VS</strong>
                </div>

                <div className="col s5 m5 center-align">
                  <img className="responsive-img" src={this.props.poll.event.away_team_logo} />
                  <span>{this.props.poll.event.away_team}</span>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="center-align flow-text">
                <span className="poll-group-icon fa fa-trophy"></span>{this.props.poll.event.group}
              </div>
            </div>

            <div className="card-action">
              <button className="btn activator waves-effect waves-light">Vote</button>
            </div>

            <div className="card-reveal">
              {revealComponent}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
