import React from "react";
import { Link } from "react-router";

import PollsList from "./PollsList";

let getState = () => {
  return {
    pollsList: [
      {
        id:               "1XXXXXXXXXXXXXXXXXXXXXXX",
        votes_total:      4,
        away_team:        1,
        draw:             3,
        home_team:        0,
        created_at:       "2016-01-22T17:26:18.985Z",
        event: {
          id:             1002916450,
          home_team:      "Chania FC",
          home_team_logo: "assets/images/events/chania_fc.png",
          away_team:      "Panthrakikos Komotini",
          away_team_logo: "assets/images/events/panthrakikos_komotini.png",
          group:          "Greek Cup"
        }
      },
      {
        id:               "2XXXXXXXXXXXXXXXXXXXXXXX",
        votes_total:      26,
        away_team:        5,
        draw:             13,
        home_team:        9,
        created_at:       "2016-01-22T17:26:17.985Z",
        event: {
          id:             1002916451,
          home_team:      "Olympiakos Volos",
          home_team_logo: "assets/images/events/olympiakos_volos.png",
          away_team:      "PAOK Thessaloniki",
          away_team_logo: "assets/images/events/paok_thessaloniki.png",
          group:          "Greek Cup"
        }
      }
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
      <div className="polls">
        <PollsList polls={this.state.pollsList} />
      </div>
    );
  }
}
