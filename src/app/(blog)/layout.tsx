// 'use client'

import '@/app/globals.css';
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/sidebar/Sidebar';
import Footer from './_components/Footer';
import _BreadCrumb from './_components/_BreadCrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div>
          <_BreadCrumb />
          <main className="flex-1 p-4 overflow-y-auto" title="메인 콘텐츠">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
};
