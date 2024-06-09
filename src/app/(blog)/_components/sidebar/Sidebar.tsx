import { fetchPosts } from "@/services/posts";
import { Post } from "@/lib/notion";
import SidebarContent from "./SidebarContents";

export default async function Sidebar() {
  const categoryList: Post[] = await fetchPosts()

  return(
    <SidebarContent categoryList={categoryList} />
  )
};
