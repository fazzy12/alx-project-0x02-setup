import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Next.js Project</title>
        <meta name="description" content="A Next.js project with TypeScript and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold text-center">
          Welcome to the <a className="text-blue-600" href="https://nextjs.org">Next.js Project!</a>
        </h1>
      </main>
    </div>
  );
}