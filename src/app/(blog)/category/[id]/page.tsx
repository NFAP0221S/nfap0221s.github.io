import { getDatabase } from '@/lib/notion';
import CategoryClientComponent from '@/app/(blog)/_components/posts/CategoryClientComponent';

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

export default function CategoryPage({ params }: { params: { id: string } }) {
  return <CategoryClientComponent id={params.id} />;
}