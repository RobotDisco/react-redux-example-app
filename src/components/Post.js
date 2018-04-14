import PropTypes from 'prop-types';
import React from 'react';
import "./Post.css";

const Post = ({ title, author }) => (
    <div className='card'>
      {title} by {author}
    </div>
);

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;
