import Link from 'next/link';
import { getDatabase } from '../lib/notion';

export default async function Home() {
  const posts = await getDatabase(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);

  console.log('posts', posts[1])

  return (
    // <div>안녕하세요</div>
    <div>
      <h1>Home 입니다.</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.properties['이름'].title[0].plain_text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
