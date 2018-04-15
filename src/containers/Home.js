import React from 'react';

import { connect } from "react-redux";

import { changeSubreddit } from "../actions";
//import { SubredditForm } from "../components/SubredditForm";

const mapStateToProps = state => ({
  subreddit: state.subreddit
});

const mapDispatchToProps = {
  changeSubreddit
};

export const SubredditForm = ({subreddit, changeSubreddit}) => (
  <div>
    <input onChange={(event) => changeSubreddit(event.target.value)}/>
    <button>GO</button>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(SubredditForm);
