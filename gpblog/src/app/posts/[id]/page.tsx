import { getPage, getBlocks, getDatabase } from '../../../lib/notion';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getDatabase(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: any) {
  const { id } = params;
  const page: any = await getPage(id);
  const blocks = await getBlocks(id);

  if (!page) {
    notFound();
  }

  const renderBlock = (block: any) => {
    console.log('### block:', block)
    switch (block.type) {
      case 'paragraph':
        console.log('### paragraph')
        return <p>{block.paragraph.rich_text[0]?.plain_text}</p>;
      case 'heading_1':
        console.log('### heading_1')
        return <h1>{block.heading_1.rich_text[0]?.plain_text}</h1>;
      case 'heading_2':
        console.log('### heading_2')
        return <h2>{block.heading_2.rich_text[0]?.plain_text}</h2>;
      case 'heading_3':
        console.log('### heading_3')
        return <h3>{block.heading_3.rich_text[0]?.plain_text}</h3>;
      case 'bulleted_list_item':
        console.log('### bulleted_list_item', block.bulleted_list_item.rich_text)
        return <li>{block.bulleted_list_item.rich_text[0]?.plain_text}</li>;
      case 'numbered_list_item':
        console.log('### numbered_list_item')
        return <li>{block.numbered_list_item.rich_text[0]?.plain_text}</li>;
      default:
        return <div>Unsupported block type: {block.type}</div>;
    }
  };

  return (
    <div>
      <h1>{page.properties['이름'].title[0].plain_text}</h1>
      <div>
        {blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </div>
    </div>
  );
}
