import { getBlocks, getDatabase } from '@/lib/notion';
import PostsClientComponent from '../../_components/posts/PostsClientComponent';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

// generateStaticParams 함수 추가
export async function generateStaticParams() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostsPage({ params }: { params: { id: string } }) {
  // const blocks = await getBlocks(params.id)

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["blocks"],
    queryFn: () => getBlocks(params.id),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsClientComponent id={params.id} />
    </HydrationBoundary>
  )
}