'use client';

import Link from 'next/link';

interface PostLinkProps {
  id: string;
  title: string;
}

export default function PostLink({ id, title }:PostLinkProps) {
  
  return (
    <Link href={`/posts/${id}`}>
        {title}
    </Link>
  );
};
