import { fetchPosts } from "@/services/posts";
import { Post, getBlocks } from "@/lib/notion";
import SidebarContent from "./SidebarContents";
import { PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function Sidebar() {
  const categoryList: Post[] = await fetchPosts()
  const subCategoryPromises = categoryList.map(post => getBlocks(post.id));
  const subCategoryList: PartialBlockObjectResponse[][] = await Promise.all(subCategoryPromises);

  return(
    <SidebarContent categoryList={categoryList} subCategoryList={subCategoryList} />
  )
};
