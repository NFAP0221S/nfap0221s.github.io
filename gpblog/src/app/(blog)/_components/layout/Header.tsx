import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <nav>
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/about" className="mr-4">About</Link>
      <Link href="/posts" className="mr-4">Posts</Link>
    </nav>
  </header>
);

export default Header;
