import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import PostList from '../src/components/PostList';

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  return (
    <div>
      <Header />
      <div className="container">
        <PostList posts={posts} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
