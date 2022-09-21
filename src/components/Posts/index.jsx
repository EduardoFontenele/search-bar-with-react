/* eslint-disable react/prop-types */
import React from 'react';

import PostCard from '../PostCard';

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
