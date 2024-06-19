import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "../components/theme-provider";

import "./globals.css";
import Script from "next/script";
import ReactQueryProvider from "@/components/query-provider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
        <Script src="https://cdn.tailwindcss.com" />
      </head>
      <body>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <main className={inter.className}>
              {children}
            </main>
          </ThemeProvider>
          <ReactQueryDevtools />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
