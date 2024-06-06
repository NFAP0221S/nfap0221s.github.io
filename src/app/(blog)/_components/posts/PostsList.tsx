'use client';
import { Post } from "@/lib/notion";
import PostLink from "./PostLink";

interface Props{
  list: Post[]
}

export default function PostsList({ list }: Props) {

  return (
    <ul>
      {list?.map((post) => (
        <li key={post.id}>
          <PostLink id={post.id} title={post.properties["이름"].title[0].plain_text} />
        </li>
      ))}
    </ul>
  );
};
