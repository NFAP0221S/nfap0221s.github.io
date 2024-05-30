import React from 'react';

const Sidebar = () => (
  <aside className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div>사이드 바</div>
    <section>
      <div>Frontend</div>
      <ul>
        <li><a href="/posts">- Post 1</a></li>
        <li><a href="/posts">- Post 2</a></li>
      </ul>
    </section>
    <section>
      <div>Backend</div>
      <ul>
        <li><a href="/posts">- Post 1</a></li>
        <li><a href="/posts">- Post 2</a></li>
      </ul>
    </section>
    <section>
      <div>Devops</div>
      <ul>
        <li><a href="/posts">- Post 1</a></li>
        <li><a href="/posts">- Post 2</a></li>
      </ul>
    </section>
  </aside>
);

export default Sidebar;
