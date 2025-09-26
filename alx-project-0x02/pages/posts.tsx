import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Error fetching data. Please check the network connection.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []); // Run only once on component mount

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-8 mb-6 border-b pb-2">All Posts</h1>

        {loading && (
          <p className="text-center text-xl text-blue-600 mt-12">Loading posts...</p>
        )}
        
        {error && (
          <p className="text-center text-xl text-red-600 mt-12">{error}</p>
        )}

        <div className="flex flex-wrap justify-center -m-4">
          {!loading && !error && posts.map((post) => (
            <PostCard 
              key={post.id} 
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;