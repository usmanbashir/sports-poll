import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _polls = [];

class PollEventEmitter extends AppEventEmitter {
  getAll() {
    return _polls;
  }
}

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_POLLS:
      _polls = action.rawPolls;
      PollStore.emitChange();
      break;
    default:
      console.log("PollStore: Unknown Action");
  }
});

let PollStore = new PollEventEmitter();

export default PollStore;
