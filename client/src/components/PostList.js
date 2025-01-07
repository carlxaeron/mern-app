import React, { useState, useEffect } from 'react';

function PostList({ onEdit, onDelete }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onEdit(post)}>Edit</button>
            <button onClick={() => onDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
