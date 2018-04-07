import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Subreddit } from "./pages/Subreddit";

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
