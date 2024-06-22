'use client';

import React from 'react';
import _Card from '../../_components/_Card';
import { useBlocks } from '@/app/hooks';

const renderCards = (block: any) => {
  const type = block?.type;
  const id = block?.id;
  const title = block?.child_page?.title;
  const date = block?.created_time;

  if (type === 'child_page' && id && title && date) {
    return <_Card key={id} id={id} title={title} date={date} />;
  }
};

interface CategoryClientComponentProps {
  id: string
  blocks: any
}

export default function CategoryClientComponent ({ id, blocks }: CategoryClientComponentProps) {
  const { data, error } = useBlocks(id, {
    queryKey: ['blocks'],
    initialData: blocks,
  });

  if (error) return <div>Error loading blocks: {error.message}</div>;

  if (data) {
    return (
      <div title='카테고리'>
        <ul className='flex flex-wrap justify-center'>
          {data.map((block: any) => (
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
    );
  }
};
