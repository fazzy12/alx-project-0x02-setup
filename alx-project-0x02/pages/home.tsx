import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">Home Page</h1>
        <p className="text-center mt-4">Welcome to our homepage!</p>
      </main>
    </div>
  );
};

export default HomePage;