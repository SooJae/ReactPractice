import React from 'react';

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
