'use client'

import { useThemeClass } from "../hooks";

export default function Home() {
  const { ZINC800200, GRAY200800 } = useThemeClass();
  
  return (
    <div className={`p-4 bg-${ZINC800200} text-${GRAY200800} min-h-screen`}>
      <h1>Home 입니다.</h1>
      <h2>test test test...</h2>
    </div>
  );
}
