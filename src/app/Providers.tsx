"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function Providers(props: Props) {
  const { children } = props;

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        {children}
    </ThemeProvider>
  );
}
