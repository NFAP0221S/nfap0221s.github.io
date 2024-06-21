'use client'

import SidebarContent from "./SidebarContents";
import { useCategories } from "@/app/hooks";

export default function Sidebar() {
  const { data: categoryList, error } = useCategories();

  if (error) {
    <h2>{error.message}</h2>
  }

  if (categoryList ) {
    return(
      <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block`}>
        <SidebarContent categoryList={categoryList} />
      </aside>
    )
  }
};
