// 'use client'

import '@/app/globals.css';
import React from 'react';
import Header from './_components/Header';
import Sidebar from './_components/sidebar/Sidebar';
import Footer from './_components/Footer';
import _BreadCrumb from './_components/_BreadCrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className='border-b'>
          <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
            <aside className="fixed top-14 z-30 -ml-2 flex justify-center h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                <Sidebar />
            </aside>
            <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div className="flex flex-col flex-1 max-w-screen-xl p-4">
                <_BreadCrumb />
                <main className="flex-1 overflow-y-auto" title="메인 콘텐츠">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
