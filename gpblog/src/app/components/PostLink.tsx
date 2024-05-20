'use client';

import Link from 'next/link';

interface PostLinkProps {
  id: string;
  title: string;
}

const PostLink: React.FC<PostLinkProps> = ({ id, title }) => {
  const clickLogHandler = (e: React.MouseEvent) => {
    console.log('### postsId:', id);

    e.stopPropagation();
  };


  return (
    <Link legacyBehavior href={`/posts/${id}`}>
      <a onClick={clickLogHandler}>
        {title}
      </a>
    </Link>
  );
};

export default PostLink;
