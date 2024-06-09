
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Post } from '@/lib/notion';
import React from 'react';
import SubCategories from './SubCategories';
// import CareerTime from '../CareerTime';

interface Props {
  categoryList: Post[]
}

export default function SidebarContent({ categoryList }: Props) {

  const order = {
    index0: 'Frontend',
    index1: 'Backend',
    index2: 'Game',
    index3: 'Test',
  };

  // categoryList를 하드코딩된 순서 객체에 따라 정렬
  const sortedCategoryList = [...categoryList].sort((a, b) => {
    const nameA = a.properties["이름"].title[0].plain_text;
    const nameB = b.properties["이름"].title[0].plain_text;

    // 이름이 순서 객체에 없으면 마지막에 위치시키기 위해 높은 값을 할당
    const indexA = Object.values(order).indexOf(nameA) !== -1 ? Object.values(order).indexOf(nameA) : Object.keys(order).length;
    const indexB = Object.values(order).indexOf(nameB) !== -1 ? Object.values(order).indexOf(nameB) : Object.keys(order).length;

    return indexA - indexB;
  });

  return (
    <ScrollArea className={`fixed rounded-md border shadow-lg transition-transform -translate-x-full sm:translate-x-0`}>
      <div className="p-4">
        <h4 className="mb-4 text-md font-medium leading-none">
          {/* <CareerTime /> */}
          Category
        </h4>
        {sortedCategoryList.map((post) => (
          <React.Fragment key={post.id}>
            <div className="text-md">
              {post.properties["이름"].title[0].plain_text}
            </div>
            <SubCategories id={post.id} />
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
