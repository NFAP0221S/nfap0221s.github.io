'use client';

import Link from 'next/link';

interface PostLinkProps {
  id: string;
  title: string;
}

const PostLink: React.FC<PostLinkProps> = ({ id, title }) => {
  console.log('### PostLink postsId:', id);
  const clickLogHandler = (e: React.MouseEvent) => {
    console.log('### func postsId:', id);

    e.stopPropagation();
  };

  return (
    // <Link href={`/posts/${id}`} onClick={clickLogHandler}>
    //     {title}
    // </Link>
    <Link legacyBehavior href={`/posts/${id}`}>
      <a onClick={clickLogHandler}>
        {title}
      </a>
    </Link>
  );
};

export default PostLink;
