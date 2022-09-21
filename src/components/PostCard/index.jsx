import PropTypes from 'prop-types';
import React from 'react';

function PostCard({ cover, title, body }) {
  return (
    <div className="post">
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

PostCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
