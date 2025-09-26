import Head from 'next/head';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header'; // <-- ADDED: Import Header

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      
      <Header />

      <main className="container mx-auto p-4 flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-8">About Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mb-12">
          This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS, focusing on reusable components and clean architecture.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Reusable Button Examples</h2>
        <div className="flex flex-wrap justify-center gap-6">
          
          <Button size="large" shape="rounded-full" onClick={() => alert('Large Button Clicked!')}>
            Large & Full
          </Button>

          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button Clicked!')}>
            Medium & Default
          </Button>

          <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button Clicked!')}>
            Small & Square
          </Button>

        </div>
      </main>
    </div>
  );
};

export default AboutPage;