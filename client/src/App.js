import React from 'react';
import PostList from './components/PostList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <PostList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
