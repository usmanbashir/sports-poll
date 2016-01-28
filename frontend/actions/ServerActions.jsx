import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedPolls(rawPolls) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POLLS,
      rawPolls
    });
  }
}
