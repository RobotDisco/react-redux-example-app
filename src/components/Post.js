import React from "react";
import "./Post.css";

export const Post = ({ title, author }) => (
  <div className="card">
    {title} by {author}
  </div>
);
