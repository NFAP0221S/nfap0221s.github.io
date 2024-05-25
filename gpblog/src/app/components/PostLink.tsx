'use client';

import Link from 'next/link';

interface PostLinkProps {
  id: string;
  title: string;
}

const PostLink: React.FC<PostLinkProps> = ({ id, title }) => {
  
  return (
    <Link href={`/posts/${id}`}>
        {title}
    </Link>
  );
};

export default PostLink;
