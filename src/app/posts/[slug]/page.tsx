import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

// type Post = {
//   title: string;
//   data: string;
//   author: {
//     name: string;
//     imgUrl: string;
//   };
//   content: string;
// };

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="max-w-2xl mx-auto">
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
