import { connect } from "react-redux";

import { fetchSubreddit, loadSubreddit } from "../actions";
import { Posts } from '../components/Posts';

// fetch data from the (fake) Reddit API
const fetchPosts = name =>
     fetch(`https://www.reddit.com/r/${name}.json`)
      .then(res => res.json())
      .then(rawData => rawData.data.children.map(post => post.data));

const fetchPostsThunk = name =>
      (dispatch) => {
        dispatch(fetchSubreddit);
        return fetchPosts(name).then(data => dispatch(loadSubreddit(data)));
      };

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  posts: state.posts
});

const mapDispatchToProps = {
  fetchPostsThunk
};

export const Subreddit = connect(mapStateToProps, mapDispatchToProps)(Posts);
