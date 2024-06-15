'use client';
import React from 'react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useThemeClass } from '@/app/hooks';
import _BreadCrumb from './_BreadCrumb';

export default function Header() {

  return(
    // <header className={`flex items-center justify-around p-4`}>
    <header className="sticky top-0 z-50 p-4 w-full flex items-center justify-around bg-white bg-opacity-80 backdrop-blur-sm">
        <nav className='flex items-center'>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/test" className="mr-4">Test</Link>
          <DarkModeSwitch />
        </nav>
    </header>
  )
};

