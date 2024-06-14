// 'use client'

import '@/app/globals.css';
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/sidebar/Sidebar';
import Footer from './_components/Footer';
import _BreadCrumb from './_components/_BreadCrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center px-6 pt-16" title="메인 콘텐츠">
        <div className="flex justify-center md:w-64 w-0 flex-shrink-1 ">
          <Sidebar />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col flex-1 " style={{ maxWidth: '1200px' }}>
            <_BreadCrumb />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
