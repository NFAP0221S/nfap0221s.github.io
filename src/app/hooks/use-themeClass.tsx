import { useTheme } from "next-themes";

export const useThemeClass = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark'


  const bgCr = isDarkMode ? 'bg-gray-700' : 'bg-gray-200';
  const txtCr = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  return { bgCr, txtCr };
};