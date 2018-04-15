import React from "react";

import Post from './Post';
import './Posts.css';

export class Posts extends React.Component {
  componentDidMount() {
    const {subreddit, fetchPostsThunk} = this.props;
    fetchPostsThunk(subreddit);
  }

  render() {
    const {posts} = this.props;

    return (
      <div className="posts-list">
        {posts.map(post => <Post key={post.id} {...post} />, posts)}
      </div>
    );
  }
}
