import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import { notFound } from 'next/navigation';
import React from 'react';
import _Card from '../../_components/_Card';

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

const renderCards = (block: any) => {
  const type = block?.type;
  const id = block?.id;
  const title = block?.child_page?.title;
  const date = block?.created_time;

  if (type === 'child_page' && id && title && date) {
    return <_Card key={id} id={id} title={title} date={date} />
  }
};

export default async function PostsPage({ params }: any) {
  const { id } = params;
  
  const page: any = await getPage(id);
  const blocks: any = await getBlocks(id);

  if (!page || !blocks) {
    notFound();
  }

  return (
    <div title='Posts'>
        <ul className='flex flex-wrap justify-center'>
          {blocks.map((block: any) => (
            <React.Fragment key={block.id}>
              {block?.type === 'child_page' &&
                <li className='w-full sm:w-1/1 md:w-1/1 lg:w-1/2 p-2'>
                  {renderCards(block)}
                </li>
              }
            </React.Fragment>
          ))}
        </ul>
      </div>
  )
}