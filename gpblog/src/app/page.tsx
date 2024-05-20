import { Post, getDatabase } from '../lib/notion';
import PostLink from './components/PostLink';

const isProd = process.env.NODE_ENV === 'production';

export default async function Home() {
  const posts: Post[] = await getDatabase(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);

  return (
    <div>
      <h1>Home 입니다.</h1>
      <h2>배포 v1</h2>
      {isProd ? <h2>트루</h2> : <h2>펄스</h2>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostLink id={post.id} title={post.properties['이름'].title[0].plain_text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
