// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { MdDensityMedium as MenuButton} from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "./sidebar/Sidebar";
import SidebarContent from "./sidebar/SidebarContents";
import { fetchPosts } from "@/services/posts";
import { Post } from "@/lib/notion";

export async function _Sheet() {
  const categoryList: Post[] = await fetchPosts()
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <MenuButton/>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <SidebarContent categoryList={categoryList} />
      </SheetContent>
    </Sheet>
  )
}
