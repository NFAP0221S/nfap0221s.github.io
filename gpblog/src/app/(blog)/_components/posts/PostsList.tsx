'use client';
import { Post } from "@/lib/notion";
import PostLink from "./PostLink";

interface Props{
  list: Post[]
}

const PostsList: React.FC<Props> = ({ list }) => {

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

export default PostsList;