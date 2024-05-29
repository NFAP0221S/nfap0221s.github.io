'use client';
import { Post } from "@/lib/notion";

import PostLink from "./PostLink";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

interface Props{
  list: Post[]
}

const PostsList: React.FC<Props> = ({ list }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 강제 로드를 위해 2초 후에 로딩 상태를 false로 변경
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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