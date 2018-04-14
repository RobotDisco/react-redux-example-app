import React, { Component } from "react";
import { Subreddit } from "./containers/Subreddit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subreddit />
      </div>
    );
  }
}

export default App;
