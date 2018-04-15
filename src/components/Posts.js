import React from "react";

import Post from './Post';
import './Posts.css';

export class Posts extends React.Component {
  componentDidMount() {
    const {match, subreddit, fetchPostsThunk} = this.props;
    fetchPostsThunk(match.params.name);
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
