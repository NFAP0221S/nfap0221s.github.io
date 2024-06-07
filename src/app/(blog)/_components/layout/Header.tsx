'use client';
import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useThemeClass } from '@/app/hooks';

export default function Header() {
  const { GRAY700200, GRAY200800 } = useThemeClass(); 

  return(
    <header className={`flex items-center justify-between p-4 bg-${GRAY700200} text-${GRAY200800}`}>
      {/* <header className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-${GRAY700200} text-${GRAY200800}`}></header> */}
      <nav className='flex items-center'>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/posts" className="mr-4">Posts</Link>
        <DarkModeSwitch />
      </nav>
    </header>
  )
};

