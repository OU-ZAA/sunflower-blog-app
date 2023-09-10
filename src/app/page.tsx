import { getAllPosts } from "@/lib/api";
import { Post } from "./posts/[slug]/page";
import { parseISO, format } from "date-fns";
import Link from "next/link";

export const metadata = {
  title: "DEV Community",
  description: "Dev blogs home page",
};

export default async function Home() {
  const posts: Post[] = getAllPosts(["title", "date", "slug"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
      <div className="max-w-2xl mx-auto mt-20">
        {posts.map((post) => (
          <Link href={`posts/${post.slug}`} key={post.slug}>
            <article className="mb-4 bg-white shadow rounded-md">
              <div className="p-4">
                <p className="text-xs">
                  Posted on <span>{format(parseISO(post.date), "LLL d")}.</span>
                </p>
                <h1 className="text-2xl font-bold mb-2 hover:underline">
                  {post.title}
                </h1>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
