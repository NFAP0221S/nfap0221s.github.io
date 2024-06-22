'use client'

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { NotionDB } from '@/lib/notion';
import React from 'react';
import SubCategories from './SubCategories';

interface Props {
  categoryList: NotionDB[]
}

export default function SidebarContent({ categoryList }: Props) {
  // 메인 카테고리와 서브 카테고리를 구분
  const 메인카테고리 = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'main');
  const 서브카테고리 = categoryList.filter(post => post.properties.level.rich_text[0].plain_text === 'sub');

  const getSubCategories = (mainGroup: string) => {
    return 서브카테고리.filter(sub => sub.properties.group.multi_select.some(group => group.name === mainGroup));
  };

  return (
    <ScrollArea>
      <div className="p-4">
        {메인카테고리.map(main => {
          const 메인태그 = main.properties.group.multi_select[0].name;
          const 매치된_서브_카테고리 = getSubCategories(메인태그);

          return (
            <React.Fragment key={main.id}>
              <div className="text-md font-semibold mb-2" title='메인_카테고리'>
                {main.properties.category.title[0].plain_text}
              </div>
              {매치된_서브_카테고리.length > 0 && (
                <div title='서브_카테고리'>
                  {매치된_서브_카테고리.map(sub => (
                    <React.Fragment key={sub.id}>
                      <SubCategories id={sub.id} subCategory={sub.properties.category.title[0].plain_text} />
                    </React.Fragment>
                  ))}
                </div>
              )}
              <Separator className="my-2" />
            </React.Fragment>
          );
        })}
      </div>
    </ScrollArea>
  );
}
