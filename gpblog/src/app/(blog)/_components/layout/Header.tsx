import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <h1>My Blog</h1>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  </header>
);

export default Header;
