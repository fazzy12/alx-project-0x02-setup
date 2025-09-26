import Head from 'next/head';
import Card from '@/components/common/Card';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Our Home Page!
        </h1>
        <div className="flex flex-wrap justify-center">
          <Card 
            title="First Post" 
            content="This is the content for the first post. It demonstrates our reusable Card component." 
          />
          <Card 
            title="Second Post" 
            content="This card shows how versatile our component is. You can pass any title and content." 
          />
          <Card 
            title="Next.js" 
            content="Build high-performance, scalable web applications with Next.js and React." 
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;