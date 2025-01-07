import React, { useState, useEffect } from 'react';

function PostForm({ selectedPost, onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, content };
    onSave(post);
  };

  return (
    <div>
      <h2>{selectedPost ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">{selectedPost ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default PostForm;
