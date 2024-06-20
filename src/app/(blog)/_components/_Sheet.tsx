
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MdDensityMedium as MenuButton} from "react-icons/md";
import SidebarContent from "./sidebar/SidebarContents";
import { fetchPosts } from "@/services/posts";
import { Post } from "@/lib/notion";

export async function _Sheet() {
  const categoryList: Post[] = await fetchPosts()
  
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
