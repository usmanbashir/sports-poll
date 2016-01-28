import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedPolls(rawPolls) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POLLS,
      rawPolls
    });
  },
  receivedOneVote(rawVote) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_VOTE,
      rawVote
    });
  }
}
