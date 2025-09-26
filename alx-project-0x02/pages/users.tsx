import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-8 mb-6 border-b pb-2">User Directory</h1>

        <div className="flex flex-wrap justify-center -m-4">
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              {...user} 
            />
          ))}
        </div>

        {users.length === 0 && (
           <p className="text-center text-xl text-gray-500 mt-12">No users found.</p>
        )}
      </main>
    </div>
  );
};

export default UsersPage;

// ----------------------------------------------------------------------
// DATA FETCHING FUNCTION: getStaticProps()
// ----------------------------------------------------------------------

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const data: UserProps[] = await response.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("GETSTATICPROPS ERROR (Users):", error);
    return {
      props: {
        users: [],
      },
    };
  }
};