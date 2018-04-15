import { combineReducers } from "redux";

const INITIAL_STATE = {
  subreddit: "",
  posts: []
};

export const subreddit = (state = INITIAL_STATE.subreddit, action) => {
  switch (action.type) {
  case "CHANGE_SUBREDDIT":
    return action.subreddit;
  default:
    return state;
  }
};

export default combineReducers({
  subreddit
});
