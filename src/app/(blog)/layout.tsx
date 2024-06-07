// 'use client'

import '@/app/globals.css';
import React from 'react';
import Header from './_components/layout/Header';
import Sidebar from './_components/layout/Sidebar';
import Footer from './_components/layout/Footer';
import { useThemeClass } from '../hooks';

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { ZINC800200, GRAY200800 } = useThemeClass();  
  
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 mt-16 overflow-y-auto">{children}</main>
      </div>
      <Footer />
    </div>
  )
};
