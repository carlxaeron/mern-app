import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />
      <div className="container">
        <PostForm selectedPost={selectedPost} onSave={handleSave} />
        <PostList onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
