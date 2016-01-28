import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _polls = [];
let _userVotes = [];

class PollEventEmitter extends AppEventEmitter {
  getAll() {
    return _polls;
  }

  getAllVotedByCurrentUser() {
    return _userVotes.map(vote => {
      return vote.poll_id;
    });
  }
}

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_POLLS:
      _polls = action.rawPolls;
      PollStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_VOTE:
      _userVotes.unshift(action.rawVote);
      PollStore.emitChange();
      break;
    default:
      console.log("PollStore: Unknown Action");
  }
});

let PollStore = new PollEventEmitter();

export default PollStore;
