// 'use client';

import React, { useState } from 'react';
import _Card from '@/app/(blog)/_components/_Card';
import { _Pagination } from '@/app/(blog)/_components/_Pagenation';

interface PostsBlocksProps {
  id: number;
  initialBlocks: any[];
  currentPage: number;
}

const renderCards = (block: any) => {
  const type = block?.type;
  const id = block?.id;
  const title = block?.child_page?.title;
  const date = block?.created_time;

  if (type === 'child_page' && id && title && date) {
    return <_Card key={id} id={id} title={title} date={date} />;
  }
};

export default function PostsBlocks({ id, initialBlocks, currentPage }: PostsBlocksProps) {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(initialBlocks.length / itemsPerPage);

  const paginatedBlocks = initialBlocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul className="flex flex-wrap justify-center">
        {paginatedBlocks.map((block: any) => (
          <React.Fragment key={block.id}>
            {block?.type === 'child_page' && (
              <li className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 p-2">
                {renderCards(block)}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="py-4">
        <_Pagination totalPages={totalPages} currentPage={currentPage} basePath={`/posts/${id}`} />
      </div>
    </div>
  );
}
