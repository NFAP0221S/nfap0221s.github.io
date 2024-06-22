'use client'

import { NotionDB } from "@/lib/notion";
import SidebarContent from "./SidebarContents";
import { useCategories } from "@/app/hooks";

interface SidebarProps {
  categoryList? : NotionDB[]
}

export default function Sidebar({categoryList}: SidebarProps) {
  const { data: categories, error } = useCategories({
    queryKey: ['categories'],
    initialData: categoryList,
  });
  
  if (error) {
    <h2>{error.message}</h2>
  }

  if (categories ) {
    return(
      <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block`}>
        <SidebarContent categoryList={categories} />
      </aside>
    )
  }
};
