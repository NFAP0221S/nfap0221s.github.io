import { useQuery } from '@tanstack/react-query';

const fetchBlocks = async (id: string) => {
  const res = await fetch(`/api/blocks?id=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch blocks');
  }
  return res.json();
};

export const useBlocks = (id: string) => {
  return useQuery({
    queryKey: ['fetchBlocks', id],
    queryFn: () => fetchBlocks(id),
    enabled: !!id,
    staleTime: 5 * 1000,
  });
};
