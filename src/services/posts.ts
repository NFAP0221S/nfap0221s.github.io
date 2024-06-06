import { getDatabase } from "@/lib/notion";

export default async function fetchPosts() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  return await getDatabase(databaseId);
};