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

export const posts = (state = INITIAL_STATE.posts, action) => {
  switch(action.type) {
  case "LOAD_SUBREDDIT":
    // I guess no thunkable actions wind up in the reducer, since they always
    // get resolved down to plain-ol'-data ones ultimately. Maybe if I was doing
    // things like notifications or emitting logs or something...
    return action.data;
  default:
    return state;
  }
};

export default combineReducers({
  subreddit,
  posts
});
