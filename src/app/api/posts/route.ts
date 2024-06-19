import { fetchPosts } from '@/services/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}
