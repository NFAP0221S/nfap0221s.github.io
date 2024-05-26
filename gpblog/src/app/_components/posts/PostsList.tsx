'use client';

import { usePosts } from "@/hooks/usePosts";
import PostLink from "./PostLink";
import { useEffect } from "react";

const PostsList: React.FC = () => {
  const { data: posts, isLoading, error } = usePosts();

  useEffect(() => {
    console.log('data:', posts)
  }, [posts])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <PostLink id={post.id} title={post.properties["이름"].title[0].plain_text} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;