import { getBlocks } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blockId = searchParams.get('id');

  if (!blockId) {
    return NextResponse.json({ error: 'Missing blockId parameter' }, { status: 400 });
  }

  try {
    const blocks = await getBlocks(blockId);
    return NextResponse.json(blocks);
  } catch (error) {
    return NextResponse.error();
  }
}