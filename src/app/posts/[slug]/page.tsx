import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import { parseISO, format } from "date-fns";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    picture: string;
    name: string;
  };
  content: string;
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post: Post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const data = parseISO(post.date);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="bg-slate-100">
      <div className="bg-white max-w-4xl mx-auto">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={`${post.title} blog cover`}
            width={900}
            height={300}
            className="mb-6"
          />
        ) : (
          <div></div>
        )}
        <article className="p-8">
          <div className="flex gap-3 mb-4 items-center">
            <Image
              src={post.author.picture}
              alt={`${post.author.name} picture`}
              width={50}
              height={50}
              className="rounded-full border-2 border-slate-500"
            />
            <div>
              <p className="font-bold">{post.author.name}</p>
              <p className="text-sm text-slate-400 font-semibold">
                Posted on <span>{format(data, "LLL d")}.</span>
              </p>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </div>
  );
}
