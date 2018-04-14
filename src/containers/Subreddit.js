import React from 'react';
import { Posts } from '../components/Posts';
import './Subreddit.css';
import seed from '../data/posts.json';

// fetch data from the (fake) Reddit API
const getPosts = () =>
      seed.data.children.map(post => post.data);

     /* fetch('../data/posts.json')
      .then(res => res.json())
      .then(rawData => rawData.data.children.map(post => post.data));*/

export class Subreddit extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    //getPosts().then(posts => {
    this.setState({ posts: getPosts() });
    //});
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
