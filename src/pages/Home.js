import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: ""
    };
  }

  handleChange = event => {
    this.setState({ subreddit: event.target.value });
  };

  goToSubreddit = () => {
    this.props.history.push(`/r/${this.state.subreddit}`);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.goToSubreddit}>GO</button>
      </div>
    );
  }
}
