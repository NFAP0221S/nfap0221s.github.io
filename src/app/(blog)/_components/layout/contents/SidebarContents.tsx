'use client';

import { useThemeClass } from '@/app/hooks';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Post } from '@/lib/notion';
import React from 'react';

interface Props{
  postsList: Post[]
}
export default function SidebarContent({ postsList }: Props) {

  return (
    <ScrollArea className={`rounded-md border shadow-lg transition-transform -translate-x-full sm:translate-x-0`}>
    {/* <ScrollArea className="fixed rounded-md border top-0 left-0 z-40 w-48 h-screen shadow-lg transition-transform -translate-x-full sm:translate-x-0"> */}
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Sidebar</h4>
        {postsList.map((post) => (
          <React.Fragment key={post.id}>
            <div className="text-sm">
              {post.properties["이름"].title[0].plain_text}
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>  
    </ScrollArea>
  );
}
