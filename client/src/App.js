import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleEdit = (post) => {
    setSelectedPost(post);
  };

  const handleDelete = (postId) => {
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Refresh the post list or handle the UI update
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  const handleSave = (post) => {
    const method = selectedPost ? 'PUT' : 'POST';
    const url = selectedPost ? `/api/posts/${selectedPost._id}` : '/api/posts';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        setSelectedPost(null);
        // Refresh the post list or handle the UI update
      })
      .catch((error) => console.error('Error saving post:', error));
  };

  return (
    <div>
      <h1>Welcome to the MERN App</h1>
      <PostForm selectedPost={selectedPost} onSave={handleSave} />
      <PostList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
