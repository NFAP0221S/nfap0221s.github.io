'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MdDensityMedium as MenuButton} from "react-icons/md";
import SidebarContent from "./sidebar/SidebarContents";
import { useCategories } from "@/app/hooks";

export function _Sheet() {
  const { data: categoryList, error } = useCategories();


  if (error) {
    <h2>{error.message}</h2>
  }

  if (categoryList) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <MenuButton/>
        </SheetTrigger>
        <SheetContent side='left'>
          <SidebarContent categoryList={categoryList} />
        </SheetContent>
      </Sheet>
    )
  }
}
