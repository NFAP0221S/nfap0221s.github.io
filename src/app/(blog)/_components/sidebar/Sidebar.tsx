import { fetchPosts } from "@/services/posts";
import { Post } from "@/lib/notion";
import SidebarContent from "./SidebarContents";

export default async function Sidebar() {
  const postsList: Post[] = await fetchPosts()

  return(
    <SidebarContent postsList={postsList} />
    // <aside className="fixed top-0 left-0 z-40 w-48 h-screen bg-slate-700 shadow-lg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    //   <div className="p-4">사이드 바</div>
    //   <section className="p-4">
    //     <div className="font-bold">Frontend</div>
    //     <ul>
    //       <Link href="/posts">- Post 1</Link>
    //       <br />
    //       <Link href="/posts">- Post 2</Link>
    //     </ul>
    //   </section>
    //   <section className="p-4">
    //     <div className="font-bold">Backend</div>
    //     <ul>
    //       <Link href="/posts">- Post 1</Link>
    //       <br />
    //       <Link href="/posts">- Post 2</Link>
    //     </ul>
    //   </section>
    //   <section className="p-4">
    //     <div className="font-bold">DevOps</div>
    //     <ul>
    //       <Link href="/posts">- Post 1</Link>
    //       <br />
    //       <Link href="/posts">- Post 2</Link>
    //     </ul>
    //   </section>
    // </aside>
    
    // <ScrollArea className="h-72 w-48 rounded-md border">
    //   <div className="p-4">
    //     <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    //     {postsList.map((post) => (
    //       <>
    //         <div key={post.id} className="text-sm">
    //           {post.properties["이름"].title[0].plain_text}
    //         </div>
    //         <Separator className="my-2" />
    //       </>
    //     ))}
    //   </div>
    // </ScrollArea>
  )
};
