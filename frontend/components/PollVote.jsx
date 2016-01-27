import React from "react";

let getState = () => {
  return {
    votingOptionSelected: false,
    voteChoice: null
  };
}

export default class PollVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }

  setVote(name) {
    const voteChoice = this._APIValue(name);

    this.setState({
      votingOptionSelected: true,
      voteChoice
    });
  }

  _APIValue(name) {
    switch(name) {
      case "home-team":
        return "HOME_TEAM";
      case "draw":
        return "DRAW";
      case "away-team":
        return "AWAY_TEAM";
      default:
        return "INVALID";
    }
  }

  sendVote(e) {
    e.preventDefault();

    console.log(`Your vote for ${this.props.id}:${this.state.voteChoice} has been sent!`);
  }

  votingOption(name, label) {
    return(
      <li>
        <input name={`voting-option-${this.props.id}`}
               type="radio"
               id={`${name}-${this.props.id}`}
               onClick={this.setVote.bind(this, name)} />

        <label htmlFor={`${name}-${this.props.id}`}>
          {label}
        </label>
      </li>
    );
  }

  render() {
    return (
      <div className="poll-vote">
        <span className="card-title grey-text text-darken-1">
          Cast Your Vote
          <i className="right fa fa-times"></i>
        </span>

        <form onSubmit={this.sendVote.bind(this)}>

          <ul className="voting-options">
            {this.votingOption("home-team", this.props.home_team)}
            {this.votingOption("draw", "Draw")}
            {this.votingOption("away-team", this.props.away_team)}
          </ul>

          <div className="card-action">
            <button type="submit"
                    disabled={!this.state.votingOptionSelected}
                    className="btn">
              Vote
            </button>
          </div>

        </form>
      </div>
    );
  }
}
