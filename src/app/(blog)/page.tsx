'use client'
import { usePosts } from "@/app/hooks";

export default function Home() {
  const { data: categoryList, isLoading, error } = usePosts();
  
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading posts: {error.message}</div>;
  // console.log('categoryList', categoryList)
  // console.log('isLoading', isLoading)
  return (
    <div className={`p-4`}>
      <h1>Home 입니다.</h1>
      <h2>test test test...</h2>
      <ul>
        {categoryList?.map((data) => (
          <li key={data.id}>
            {data.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
