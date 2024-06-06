import '@/app/globals.css';
import React from 'react';
import Header from './_components/layout/Header';
import Sidebar from './_components/layout/Sidebar';
import Footer from './_components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return(
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-48">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
};
