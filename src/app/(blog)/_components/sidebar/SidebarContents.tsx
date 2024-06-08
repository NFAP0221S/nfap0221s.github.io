'use client';

import { useThemeClass } from '@/app/hooks';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Post } from '@/lib/notion';
import React, { useEffect, useState } from 'react';
import CareerTime from '../CareerTime';

interface Props {
  postsList: Post[]
}

export default function SidebarContent({ postsList }: Props) {

  return (
    <ScrollArea className={`rounded-md border shadow-lg transition-transform -translate-x-full sm:translate-x-0`}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          <CareerTime />
          {/* Category */}
        </h4>
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
