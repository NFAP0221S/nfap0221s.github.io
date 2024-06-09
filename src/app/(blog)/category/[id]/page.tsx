import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import { notFound } from 'next/navigation';
import React from 'react';
import _Card from '../../_components/_Card';

export async function generateStaticParams() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  return posts.map((post) => ({
    id: post.id,
  }));

  // const allBlockIds = await Promise.all(
  //   posts.map(async (post) => {
  //     const blocks: any = await getBlocks(post.id);

  //     // block.type이 'child_page'인 경우에만 반환
  //     return blocks
  //       .filter((block: { type: string; }) => block.type === 'child_page')
  //       .map((block: { id: string; }) => ({ id: block.id }));
  //   })
  // );

  // // 플랫하게 변환하여 모든 블록 ID를 반환
  // return allBlockIds.flat();
}

export default async function Category({ params }: any) {
  const { id } = params;
  
  const page: any = await getPage(id);
  const blocks: any = await getBlocks(id);

  if (!page || !blocks) {
    notFound();
  }

  const renderCards = (block: any) => {
    // console.log('blocksblocks', block);
    const type = block?.type
    const id = block?.id
    const title = block?.child_page?.title
    const date = block?.created_time
    // console.log('titletitle', title);
    if(type === 'child_page') {
      if(type && id && title && date)
      return <_Card key={id} id={id} title={title} date={date} />
    }
  };

  return (
    <div title='카테고리'>
      <ul className='flex flex-wrap justify-center'>
        {blocks.map((block: any) => (
          <li key={block.id} >
            {renderCards(block)}
          </li>
        ))}
      </ul>
    </div>
  );
}
