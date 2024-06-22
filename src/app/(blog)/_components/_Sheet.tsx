'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MdDensityMedium as MenuButton} from "react-icons/md";
import SidebarContent from "./sidebar/SidebarContents";
import { useCategories } from "@/app/hooks";
import { NotionDB } from "@/lib/notion";

interface SidebarProps {
  categoryList : NotionDB[]
}

export function _Sheet({categoryList}: SidebarProps) {
  const { data: categories, error } = useCategories({
    queryKey: ['categories'],
    initialData: categoryList,
  });


  if (error) {
    <h2>{error.message}</h2>
  }

  if (categories) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <MenuButton/>
        </SheetTrigger>
        <SheetContent side='left'>
          <SidebarContent categoryList={categories} />
        </SheetContent>
      </Sheet>
    )
  }
}
