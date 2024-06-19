import { Post } from '@/lib/notion';
import { useQuery } from '@tanstack/react-query';

const fetchPostsFromApi = async () => {
  const res = await fetch('/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPostsFromApi,
    staleTime: 5 * 1000,
  });
};