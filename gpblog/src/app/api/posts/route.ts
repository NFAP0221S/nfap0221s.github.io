import { NextResponse } from 'next/server';
import { fetchPosts } from '@/services/test';

export async function GET() {
  try {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}
