import Head from 'next/head';
import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4">All Posts</h1>
        <p className="text-gray-600">This page will soon display a list of fetched posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;