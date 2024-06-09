import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateStaticParams() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  if (!databaseId) {
    throw new Error("NEXT_PUBLIC_NOTION_DATABASE_ID is not defined");
  }
  const posts = await getDatabase(databaseId);
  console.log('postsposts', posts)

  return posts.map((post) => ({
    id: post.id,
  }));

  // const allBlockIds = await Promise.all(
  //   posts.map(async (post) => {
  //     const blocks: any = await getBlocks(post.id);
  //     console.log('blocksblocks', blocks);

  //     // block.type이 'child_page'인 경우에만 반환
  //     return blocks
  //       .filter((block: { type: string; }) => block.type === 'child_page')
  //       .map((block: { id: string; }) => ({ id: block.id }));
  //   })
  // );

  // 플랫하게 변환하여 모든 블록 ID를 반환
  // return allBlockIds.flat();
}

export default async function Post({ params }: any) {
  const { id } = params;
  
  const page: any = await getPage(id);
  const blocks = await getBlocks(id);

  if (!page || !blocks) {
    notFound();
  }
  const  isChildren = async (id: string, text: string) => {
    const blocks: any = await getBlocks(id);
    if(text === '토글 자식:') {
      // console.log(text, blocks[0].paragraph.rich_text[0].plain_text)
      return blocks[0].paragraph.rich_text[0].plain_text
    }
    // console.log(text, blocks[0]?.bulleted_list_item)
  } 

  const renderTable = async (block: any) => {
    const rows = await getBlocks(block.id); // 테이블 블록의 자식 블록을 가져옴
    return (
      <table>
        <tbody>
          {rows.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {row.table_row.cells.map((cell: any, cellIndex: number) => (
                <td key={cellIndex}>{renderRichText(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderRichText = (richTextArray: any[]) => {
    richTextArray.map((text, index) => {
      // console.log('rich text:', text)
      // console.log('rich index:', text)
    });
    if(richTextArray.length === 0) {
      // console.log('길이xxxx')
      return <br/>
    }

    return richTextArray.map((text, index) => (
      <>
        {/* <span key={index}>
          {text.plain_text}
        </span> */}
        <span key={index}>
          {text.plain_text.split('\n').map((part:string, partIndex: number) => (
            <React.Fragment key={partIndex}>
              {part}
              {/* 한 라인에서 마지막 조각(배열에서 index)이 아닐때만 br 처리 */}
              {partIndex < text.plain_text.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </>
    ));
  };

  const renderBlock = (block: any) => {
    // console.log('최상위 블럭:',block)
    switch (block.type) {
      case 'paragraph':
        // console.log('paragraph 블럭:',block.paragraph.rich_text)
        return <p>{renderRichText(block.paragraph.rich_text)}</p>;
      case 'heading_1':
        return <h1>{renderRichText(block.heading_1.rich_text)}</h1>;
      case 'heading_2':
        return <h2>{renderRichText(block.heading_2.rich_text)}</h2>;
      case 'heading_3':
        return <h3>{renderRichText(block.heading_3.rich_text)}</h3>;
      case 'bulleted_list_item':
        if(block.has_children){
          isChildren(block.id, '불릿 자식:')
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
        // console.log('토글 블럭', block)

        let innerText: Promise<any>;
        if(block.has_children){
          innerText = isChildren(block.id, '토글 자식:')
          return (
            <details>
              <summary>{renderRichText(block.toggle.rich_text)}</summary>
              <div>{innerText}</div>
            </details>
          );
        }
        return (
          <details>
            <summary>{renderRichText(block.toggle.rich_text)}</summary>
            {/* <div>{block.children && block.children.map(renderBlock)}</div> */}
          </details>
        );
      case 'code':
        // console.log('코드 블럭:', block)
        return (
          <pre>
          <code>
            {renderRichText(block.code.rich_text)}
            {block.code.caption && <figcaption>{block.code.caption[0].plain_text}</figcaption>}
          </code>
        </pre>
        );
      case 'image':
        // console.log('이미지 블럭:', block.image.caption[0].plain_text)
        return (
          <figure>
            <img src={block.image.file.url} alt={block.image.caption} style={{ maxWidth: '100%' }} />
            {block.image.caption && <figcaption>{block.image.caption[0].plain_text}</figcaption>}
          </figure>
        );
      case 'callout':
        // console.log('콜아웃 블럭:', block.callout)
        return (
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <span style={{ marginRight: '10px' }}>{block.callout.icon.emoji}</span>
            <div>{renderRichText(block.callout.rich_text)}</div>
          </div>
      );
      case 'divider':
        // console.log('구분선 블럭: <hr /> 처리')
        return  <hr />
      case 'table':
        // console.log('테이블 블럭:', block);
        return renderTable(block);
      default:
        // console.log('디폴트 타입 블럭:', block)
        return <div>Unsupported block type: {block.type}</div>;
    }
  };

  return (
    <div>
      {/* <h1>{page.properties['이름'].title[0].plain_text}</h1> */}
      {/* <h1>{page.properties.title.title[0].plain_text}</h1>
      <div>
        {blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </div> */}
    </div>
  );
}
