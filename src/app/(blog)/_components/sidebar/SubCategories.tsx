// 'use client';

import React from 'react';
import Link from 'next/link';
import { getBlocks } from '@/lib/notion';

interface Props {
  // blocks: any[];
  id: string
}

export default async function SubCategories({ id }: Props) {
  const subCategoryList = await getBlocks(id);
  console.log('subCategoryList', subCategoryList)
  const renderBlock = (subCategory: any) => {
    switch (subCategory.type) {
      case 'child_page':
        console.log('clicked id:', subCategory.id)
        return (
          <Link href={`/posts/${subCategory.id}/`} className="text-md">
            <div>{subCategory.child_page.title}</div>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {subCategoryList && (
        <div className="ml-4">
          {subCategoryList.map((subCategory) => (
            <div key={subCategory.id} className="text-sm">
              {renderBlock(subCategory)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
