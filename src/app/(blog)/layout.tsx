// 'use client'

import '@/app/globals.css';
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/sidebar/Sidebar';
import Footer from './_components/Footer';
import MainBreadCrumb from './_components/MainBreadCrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div>
          <MainBreadCrumb />
          <main className="flex-1 p-4 overflow-y-auto" title="메인 콘텐츠">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
};
