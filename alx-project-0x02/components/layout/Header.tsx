import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">ALX Project</a>
        </Link>
        <div>
          <Link href="/home">
            <a className="mx-2 hover:text-blue-400">Home</a>
          </Link>
          <Link href="/about">
            <a className="mx-2 hover:text-blue-400">About</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;