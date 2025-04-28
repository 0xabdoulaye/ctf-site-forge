import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    const posts = import.meta.glob("../../posts/*.md", { as: "raw" });
    const file = Object.keys(posts).find((path) =>
      path.includes(`${slug}.md`)
    );
    if (file) {
      posts[file]().then((raw: string) => {
        const { data, content } = matter(raw);
        setPost({ ...data, content });
      });
    }
  }, [slug]);

  if (!post) return <div className="container py-20">Chargement…</div>;

  return (
    <div className="container mx-auto py-12 max-w-3xl px-4">
      <Link to="/blog" className="text-accent hover:underline mb-4 inline-block">← Retour au blog</Link>
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>
      <div className="mb-4 text-muted-foreground text-sm">
        {post.date} • {post.tags?.join(", ")}
      </div>
      <ReactMarkdown className="prose prose-invert max-w-none">{post.content}</ReactMarkdown>
    </div>
  );
}