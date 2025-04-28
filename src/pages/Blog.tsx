import React, { useEffect, useState } from "react";
import { loadMarkdownPosts } from "@/lib/loadMarkdownPosts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    loadMarkdownPosts().then(setPosts);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="block border border-accent rounded-lg p-6 hover:shadow-lg transition-all bg-secondary"
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-2xl font-bold mb-2 text-primary">{post.title}</h2>
            <p className="text-muted-foreground mb-2">{post.excerpt}</p>
            <div className="text-xs text-muted-foreground">
              {post.date} • {post.tags?.join(", ")}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}