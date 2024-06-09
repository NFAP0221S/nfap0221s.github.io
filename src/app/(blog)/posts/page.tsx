import { Post } from "@/lib/notion";

import PostsList from "../_components/posts/PostsList";
import { fetchPosts } from "@/services/posts";

export default async function PostPage() {
  const posts: Post[] = await fetchPosts()
  
  return (
    <div>
      <h1>posts 입니다.</h1>
      {/* <PostsList list={posts}/> */}
    </div>
  );
}
