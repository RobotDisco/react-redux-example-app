import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Subreddit } from "./containers/Subreddit";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/r/:name" component={Subreddit}/>
      </Switch>
    );
  }
}

export default App;
