import React, { Component } from "react";

import "./App.css";
import { Posts } from "./components/Posts";

// fetch data from the reddit API
const getPosts = () =>
  fetch("https://www.reddit.com/r/asoiaf.json")
    .then(res => res.json())
    .then(rawData => rawData.data.children.map(post => post.data));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    getPosts().then(posts => {
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

export default App;
