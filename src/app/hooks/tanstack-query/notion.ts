import { NotionDB } from '@/lib/notion';
import { fetchCategories } from '@/services/categories';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

interface UseCategoriesOptions extends UseQueryOptions<NotionDB[], Error> {
  initialData?: NotionDB[]
}

const fetchCategoriesFromApi = async () => {
  const res = await fetch('/api/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
};

export const useCategories = (options?: UseCategoriesOptions) => {
  return useQuery<NotionDB[], Error>({
    queryKey: ['categories'],
    // queryFn: () => fetchCategories(),
    queryFn: fetchCategoriesFromApi,
    staleTime: 5 * 1000,
    ...options,
  });
};
