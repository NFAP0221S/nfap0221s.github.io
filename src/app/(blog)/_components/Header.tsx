'use client';
import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useThemeClass } from '@/app/hooks';

export default function Header() {
  const { GRAY700200, GRAY200800 } = useThemeClass(); 

  return(
    <header className={`flex items-center justify-between p-4 text-${GRAY200800}`}>
      <nav className='flex items-center'>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/posts" className="mr-4">Posts</Link>
        <DarkModeSwitch />
      </nav>
    </header>
  )
};

