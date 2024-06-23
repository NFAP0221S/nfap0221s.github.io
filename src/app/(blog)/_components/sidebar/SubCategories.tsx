'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  id: string
  subCategory: string
}

export default function SubCategories({ id, subCategory }: Props) {
  // const subCategoryList = await getBlocks(id);
  const renderBlock = (subCategory: any) => {
    switch (subCategory.type) {
      case 'child_page':
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
      {/* {subCategoryList && (
        )} */}
        <div className="ml-4">
          <Link href={`/posts/${id}/1`} className="text-md">
            <div>{subCategory}</div>
          </Link>
          {/* {subCategoryList.map((subCategory) => (
            <div key={subCategory.id} className="text-sm">
              {renderBlock(subCategory)}
            </div>
          ))} */}
        </div>
    </>
  );
}
