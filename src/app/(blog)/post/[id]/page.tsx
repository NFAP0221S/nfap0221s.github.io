import { getBlocks, getDatabase, getPage } from "@/lib/notion";
import { notFound } from "next/navigation";

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

export async function generateStaticParams() {
  const posts = await getDatabase(databaseId);

  const postDetails = await Promise.all(
    posts.map(async (post) => {
      const blocks = await getBlocks(post.id);
      return {
        id: post.id,
        blockIds: blocks.map(block => block.id)
      };
    })
  );

  return postDetails.flatMap((postDetail) => 
    postDetail.blockIds.map(blockId => ({
      id: blockId
    }))
  );
}

export default async function PostPage({ params }: any) {
  const { id } = params;
  
  const page: any = await getPage(id);
  const blocks = await getBlocks(id);

  if (!page) {
    notFound();
  }
  
  return (
    <div>
      <h1>Post Page</h1>
      {/* 가져온 블록 데이터를 렌더링 */}
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </div>
  );
}
