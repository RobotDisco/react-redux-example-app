import React from 'react';
import { Posts } from '../components/Posts';
import './Subreddit.css';

// fetch data from the (fake) Reddit API
const getPosts = name =>
     fetch(`https://www.reddit.com/r/${name}.json`)
      .then(res => res.json())
      .then(rawData => rawData.data.children.map(post => post.data));

export class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // const { match } = this.props;
    getPosts(/* match.params.name*/ 'toronto').then(posts => {
      this.setState({ posts });
    });
  };

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
