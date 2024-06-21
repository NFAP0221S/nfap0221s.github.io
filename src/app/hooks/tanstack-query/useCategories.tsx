import { Post } from '@/lib/notion';
import { useQuery } from '@tanstack/react-query';

const fetchCategoriesFromApi = async () => {
  const res = await fetch('/api/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
};

export const useCategories = () => {
  return useQuery<Post[]>({
    queryKey: ['categories'],
    queryFn: fetchCategoriesFromApi,
    staleTime: 5 * 1000,
  });
};