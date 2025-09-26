import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold hover:text-blue-300 transition duration-150">ALX Project</a>
        </Link>
        <div>
          <Link href="/home">
            <a className="mx-3 hover:text-blue-400 transition duration-150">Home</a>
          </Link>
          <Link href="/about">
            <a className="mx-3 hover:text-blue-400 transition duration-150">About</a>
          </Link>
          <Link href="/posts">
            <a className="mx-3 hover:text-blue-400 transition duration-150">Posts</a>
          </Link>
          <Link href="/users"> {/* <-- ADDED: Users Link */}
            <a className="mx-3 hover:text-blue-400 transition duration-150">Users</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;