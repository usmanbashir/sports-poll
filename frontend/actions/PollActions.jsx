import API from "../API";

export default {
  getAllPolls() {
    API.getAllPolls();
  },
  sendVote(id, vote) {
    API.createPollVote(id, vote);
  }
}
