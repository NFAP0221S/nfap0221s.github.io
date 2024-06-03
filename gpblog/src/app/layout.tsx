import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";

import "./globals.css";
import Script from "next/script";

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
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="/nfap0221s.github.io/_next/static/chunks/main.js"></script>
        <link rel="stylesheet" href="/nfap0221s.github.io/_next/static/css/styles.css" />
      </head>
      <body>
        <Providers>
          <main className={inter.className}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
