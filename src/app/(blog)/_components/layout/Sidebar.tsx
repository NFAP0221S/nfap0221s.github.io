import React from 'react';

export default function Sidebar() {

  return(
    <aside className="fixed top-0 left-0 z-40 w-48 h-screen dark:bg-gray-900 bg-gray-200 shadow-lg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="p-4">사이드 바</div>
      <section className="p-4">
        <div className="font-bold">Frontend</div>
        <ul>
          <li><a href="/posts">- Post 1</a></li>
          <li><a href="/posts">- Post 2</a></li>
        </ul>
      </section>
      <section className="p-4">
        <div className="font-bold">Backend</div>
        <ul>
          <li><a href="/posts">- Post 1</a></li>
          <li><a href="/posts">- Post 2</a></li>
        </ul>
      </section>
      <section className="p-4">
        <div className="font-bold">DevOps</div>
        <ul>
          <li><a href="/posts">- Post 1</a></li>
          <li><a href="/posts">- Post 2</a></li>
        </ul>
      </section>
    </aside>
  )
};
