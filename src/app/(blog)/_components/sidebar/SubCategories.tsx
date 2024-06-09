'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  blocks: any[];
}

export default function SubCategories({ blocks }: Props) {
  
  const renderBlock = (block: any) => {
    switch (block.type) {
      case 'child_page':
        return (
          <Link href={`/posts/${block.id}/`} className="text-md">
            <div>{block.child_page.title}</div>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {blocks && (
        <div className="ml-4">
          {blocks.map((block) => (
            <div key={block.id} className="text-sm">
              {renderBlock(block)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
