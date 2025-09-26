import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
        <p className="text-center mt-4">Learn more about our project.</p>
      </main>
    </div>
  );
};

export default AboutPage;