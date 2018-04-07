import React, { Component } from "react";

import "./App.css";
import { Posts } from "./components/Posts";
import rawData from "./data/posts.json";

// get our data into a more friendly format
const posts = rawData.data.children.map(post => post.data);

class App extends Component {
  render() {
    return (
      <div>
        <div className="posts-container">
          <Posts posts={posts} />
        </div>
      </div>
    );
  }
}

export default App;
