import Head from 'next/head';
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type CardProps, type NewPostData } from '@/interfaces';

const initialPosts: CardProps[] = [
  { title: "First Project Idea", content: "A great start to the Next.js project. We are building reusable components." },
  { title: "Next.js & Tailwind", content: "Mastering utility-first CSS and modern React framework best practices." },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>(initialPosts);

  const handlePostSubmit = (newPost: NewPostData) => {
    const newCard: CardProps = {
      title: newPost.title,
      content: newPost.content,
    };
    setPosts([newCard, ...posts]);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Home</title>
      </Head>
      
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8 mt-4">
            <h1 className="text-4xl font-extrabold text-gray-800">Latest Posts</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-150"
            >
              Add New Post
            </button>
        </div>

        <div className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handlePostSubmit} 
      />
    </div>
  );
};

export default HomePage;