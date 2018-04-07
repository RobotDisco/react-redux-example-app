import React, { Component } from "react";

import "./Subreddit.css";
import { Posts } from "../components/Posts";

// fetch data from the reddit API
const getPosts = name =>
  fetch(`https://www.reddit.com/r/${name}.json`)
    .then(res => res.json())
    .then(rawData => rawData.data.children.map(post => post.data));

export class Subreddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getPosts(match.params.name).then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <div className="posts-container">
          <Posts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}
