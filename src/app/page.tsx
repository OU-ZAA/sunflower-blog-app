import { getAllPosts } from "@/lib/api";
import { Post } from "./posts/[slug]/page";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import Link from "next/link";

export const metadata = {
  title: "DEV Community",
  description: "Dev blogs home page",
};

export default async function Home() {
  const posts: Post[] = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
      <div className="max-w-2xl mx-auto mt-8">
        {posts.map((post) => (
          <Link href={`posts/${post.slug}`} key={post.slug}>
            <article className="mb-4 bg-white shadow rounded-md">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={`${post.title} blog cover`}
                  width={700}
                  height={300}
                />
              )}
              <div className="p-4">
                <div className="flex gap-3 mb-4 items-center">
                  <Image
                    src={post.author.picture}
                    alt={`${post.author.name} picture`}
                    width={30}
                    height={30}
                    className="rounded-full border-2 border-slate-500"
                  />
                  <div>
                    <p className="text-sm">{post.author.name}</p>
                    <p className="text-xs">
                      Posted on{" "}
                      <span>{format(parseISO(post.date), "LLL d")}.</span>
                    </p>
                  </div>
                </div>
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
