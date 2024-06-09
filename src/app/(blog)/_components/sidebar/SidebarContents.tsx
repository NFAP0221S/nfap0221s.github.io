'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Post } from '@/lib/notion';
import React from 'react';
import SubCategories from './SubCategories';
import { PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
// import CareerTime from '../CareerTime';

interface Props {
  categoryList: Post[]
  subCategoryList: PartialBlockObjectResponse[][]
}

export default function SidebarContent({ categoryList, subCategoryList }: Props) {

  return (
    <ScrollArea className={`fixed rounded-md border shadow-lg transition-transform -translate-x-full sm:translate-x-0`}>
      <div className="p-4">
        <h4 className="mb-4 text-md font-medium leading-none">
          {/* <CareerTime /> */}
          Category
        </h4>
        {categoryList.map((post, index) => (
          <React.Fragment key={post.id}>
            <div className="text-md">
              {post.properties["이름"].title[0].plain_text}
            </div>
            <SubCategories blocks={subCategoryList[index]} />
            {/* <SubCategories subCategoryList={subCategoryList} /> */}
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
