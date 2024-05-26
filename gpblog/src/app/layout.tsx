import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "./components/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFAP0221S's Blog",
  description: "NFAP0221S의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">

      <head>
        <title>My Blog</title>
      </head>
      <body>
        <ReactQueryProvider>
          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/posts">post</a>
            </nav>
          </header>
          <main className={inter.className}>{children}</main>
          <footer>
            <p>푸터</p>
          </footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
