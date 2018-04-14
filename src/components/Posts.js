import React from "react";
import Post from './Post';

// export const Posts = () => <div />;
export class Posts extends React.Component {

  render () {
    return (
      <Post title="Test Title" author="Test Author" />
    );
  }
}
