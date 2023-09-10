import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import { parseISO, format } from "date-fns";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post: Post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const data = parseISO(post.date);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="bg-slate-100 pt-20">
      <article className="bg-white max-w-4xl mx-auto p-8 shadow rounded-lg">
        <p className="text-sm mb-1">
          Posted on <span>{format(data, "LLL d")}.</span>
        </p>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}
