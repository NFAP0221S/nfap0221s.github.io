'use client';
import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useThemeClass } from '@/app/hooks';

export default function Header() {

  return(
    // <header className={`flex items-center justify-around p-4`}>
    <header className="fixed top-0 left-0 w-full flex items-center justify-around p-4 z-50 bg-opacity-80 backdrop-blur-sm ">
      <nav className='flex items-center'>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/" className="mr-4">Posts</Link>
        <DarkModeSwitch />
      </nav>
    </header>
  )
};

