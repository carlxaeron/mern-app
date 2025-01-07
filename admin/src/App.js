import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSavePost = (post) => {
    if (selectedPost) {
      // Update existing post
      fetch(`/api/posts/${selectedPost._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then(response => response.json())
        .then(updatedPost => {
          setPosts(posts.map(p => (p._id === updatedPost._id ? updatedPost : p)));
          setSelectedPost(null);
        })
        .catch(error => console.error('Error updating post:', error));
    } else {
      // Create new post
      fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then(response => response.json())
        .then(newPost => setPosts([...posts, newPost]))
        .catch(error => console.error('Error creating post:', error));
    }
  };

  const handleEditPost = (post) => {
    setSelectedPost(post);
  };

  const handleDeletePost = (postId) => {
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => setPosts(posts.filter(p => p._id !== postId)))
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <PostForm selectedPost={selectedPost} onSave={handleSavePost} />
      <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
    </div>
  );
}

export default App;
