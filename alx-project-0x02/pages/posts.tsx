import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-8 mb-6 border-b pb-2">All Posts (Static)</h1>

        <div className="flex flex-wrap justify-center -m-4">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
        
        {posts.length === 0 && (
           <p className="text-center text-xl text-gray-500 mt-12">No posts found.</p>
        )}
      </main>
    </div>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    const data: PostProps[] = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.error("GETSTATICPROPS ERROR:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};