import '@/app/globals.css';
import React from 'react';
import Header from './_components/layout/Header';
import Sidebar from './_components/layout/Sidebar';
import Footer from './_components/layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="layout">
    <Header />
    <div className="content">
      <main>{children}</main>
      <Sidebar />
    </div>
    <Footer />
  </div>
);

export default Layout;
