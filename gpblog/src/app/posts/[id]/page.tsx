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

  const  isChildren = async (id: string, text: string) => {
    const blocks = await getBlocks(id);
    if(text === '토글칠드런') console.log(text, blocks[0].paragraph.rich_text[0].plain_text)
    console.log(text, blocks[0]?.bulleted_list_item)
  } 

  const renderRichText = (richTextArray: any[]) => {
    return richTextArray.map((text, index) => (
      <span key={index}>
        {text.plain_text}
      </span>
    ));
  };

  const renderBlock = (block: any) => {
    console.log('zzzzs',block)
    switch (block.type) {
      case 'paragraph':
        return <p>{renderRichText(block.paragraph.rich_text)}</p>;
      case 'heading_1':
        return <h1>{renderRichText(block.heading_1.rich_text)}</h1>;
      case 'heading_2':
        return <h2>{renderRichText(block.heading_2.rich_text)}</h2>;
      case 'heading_3':
        return <h3>{renderRichText(block.heading_3.rich_text)}</h3>;
      case 'bulleted_list_item':
        if(block.has_children){
          isChildren(block.id, '점칠드런')
        }
        return <li>{renderRichText(block.bulleted_list_item.rich_text)}</li>;
      case 'numbered_list_item':
        return <li>{renderRichText(block.numbered_list_item.rich_text)}</li>;
      case 'to_do':
        return (
          <div>
            <label>
              <input type="checkbox" checked={block.to_do.checked} readOnly />
              {renderRichText(block.to_do.rich_text)}
            </label>
          </div>
        );
      case 'toggle':
        console.log('토글', block)
        if(block.has_children){
          isChildren(block.id, '토글칠드런')
        }
        return (
          <details>
            <summary>{renderRichText(block.toggle.rich_text)}</summary>
            <div>{block.children && block.children.map(renderBlock)}</div>
          </details>
        );
      case 'code':
        // console.log('토글', block.toggle)
        return (
          <pre>
          <code>
            {renderRichText(block.code.rich_text)}
          </code>
        </pre>
        );
      case 'image':
        console.log('ㄴㄴㄴㄴ', block.image.caption[0].plain_text)
        return (
          <figure>
            <img src={block.image.file.url} alt={block.image.caption} style={{ maxWidth: '100%' }} />
            {block.image.caption && <figcaption>{block.image.caption[0].plain_text}</figcaption>}
          </figure>
        );
      // default:
      //   console.log('디폴트', block.image)
      //   return (
      //     <figure>
      //       <img src={block.image.url} alt={block.image.caption} style={{ maxWidth: '100%' }} />
      //       {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
      //     </figure>
      //   );
      default:
        console.log('디폴트', block)
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
