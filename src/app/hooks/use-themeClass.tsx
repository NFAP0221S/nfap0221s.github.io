import { useTheme } from "next-themes";

export const useThemeClass = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark'


  const GRAY700200 = isDarkMode ? 'neutral-950' : 'neutral-100';
  // const GRAY700200 = isDarkMode ? 'gray-700' : 'gray-200';
  const GRAY200800 = isDarkMode ? 'gray-200' : 'gray-800';
  const ZINC800200 = isDarkMode ? 'zinc-800' : 'zinc-100';
  return { GRAY700200, GRAY200800, ZINC800200 };
};