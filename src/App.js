import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Subreddit } from "./containers/Subreddit";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/r/:name" component={Subreddit} />
      </Switch>
    );
  }
}

export default App;
