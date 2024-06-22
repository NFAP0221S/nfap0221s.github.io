import { NotionDB, getBlocks } from '@/lib/notion';
import { fetchCategories } from '@/services/categories';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

// const fetchCategoriesFromApi = async () => {
//   const res = await fetch('/api/categories');
//   if (!res.ok) {
//     throw new Error('Failed to fetch categories');
//   }
//   return res.json();
// };

interface UseCategoriesOptions extends UseQueryOptions<NotionDB[], Error> {
  initialData?: NotionDB[]
}
interface UseBlocksOptions extends UseQueryOptions<any, Error> {
  initialData?: any
}

export const useCategories = (options?: UseCategoriesOptions) => {
  return useQuery<NotionDB[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 5 * 1000,
    ...options,
  });
};

export const useBlocks = (id: string, options?: UseBlocksOptions) => {
  return useQuery({
    queryKey: ['blocks', id],
    queryFn: () => getBlocks(id),
    enabled: !!id,
    staleTime: 5 * 1000,
    ...options,
  });
};