import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <nav className='flex items-center'>
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/about" className="mr-4">About</Link>
      <Link href="/posts" className="mr-4">Posts</Link>
      <DarkModeSwitch />
    </nav>
  </header>
);

export default Header;
