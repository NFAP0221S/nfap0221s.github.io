import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Post, getBlocks } from '@/lib/notion';
import React from 'react';
import SubCategories from './SubCategories';

interface Props {
  categoryList: Post[]
}

export default async function SidebarContent({ categoryList }: Props) {
  // 메인 카테고리와 서브 카테고리를 구분
  const 메인카테고리 = categoryList.filter(post => post.properties.cat.rich_text[0].plain_text === 'main');
  const 서브카테고리 = categoryList.filter(post => post.properties.cat.rich_text[0].plain_text === 'sub');

  const getSubCategories = (mainTag: string) => {
    return 서브카테고리.filter(sub => sub.properties.tag.multi_select.some(tag => tag.name === mainTag));
  };

  return (
    <ScrollArea className={`overflow-hidden h-full py-6 pr-6 lg:py-8 rounded-md border shadow-lg transition-transform -translate-x-full md:translate-x-0`}>
      <div className="p-4">
        <h4 className="mb-4 text-md font-medium leading-none">
          Category
        </h4>
        {메인카테고리.map(main => {
          const 메인태그 = main.properties.tag.multi_select[0].name;
          const 매치된_서브_카테고리 = getSubCategories(메인태그);

          return (
            <React.Fragment key={main.id}>
              <div className="text-md font-bold mb-2">
                {main.properties.name.title[0].plain_text}
              </div>
              {매치된_서브_카테고리.length > 0 && (
                <div className="ml-4">
                  {매치된_서브_카테고리.map(sub => (
                    <React.Fragment key={sub.id}>
                      {/* <div className="text-sm mb-1">
                        {sub.properties["name"].title[0].plain_text}
                      </div> */}
                      <SubCategories id={sub.id} subCategory={sub.properties.name.title[0].plain_text} />
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
