import { fetchPosts } from "@/services/posts";
import { Post } from "@/lib/notion";
import SidebarContent from "./SidebarContents";

export default async function Sidebar() {
  const categoryList: Post[] = await fetchPosts()

  return(
    <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block`}>
    {/* <aside className={`fixed w-full h-[calc(100vh-3.5rem)] md:block hidden shrink-0`}> */}
      <SidebarContent categoryList={categoryList} />
    </aside>
  )
};
