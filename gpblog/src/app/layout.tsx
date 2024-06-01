import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";

import "./globals.css";

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
