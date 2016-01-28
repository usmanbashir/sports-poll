import ServerActions from "./actions/ServerActions";
import jQuery from "jquery";

const BASE_URL = "/";

export default {
  getAllPolls() {
    jQuery.get(getAPIUrl("polls"))
          .success(rawPolls => ServerActions.receivedPolls(rawPolls))
          .error(error => console.log(error));
  }
}

let getAPIUrl = (path) => {
  return BASE_URL + path;
}
