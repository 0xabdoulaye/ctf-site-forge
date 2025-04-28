import React, { useEffect, useState } from "react";
import { loadMarkdownPosts } from "@/lib/loadMarkdownPosts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const loadedPosts = await loadMarkdownPosts();
        setPosts(loadedPosts);
      } catch (err) {
        setError("Erreur lors du chargement des articles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-blue-50">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-black mb-10 text-blue-300 tracking-tight">Blog</h1>
          <div className="text-blue-200">Chargement des articles...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-blue-50">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-black mb-10 text-blue-300 tracking-tight">Blog</h1>
          <div className="text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-blue-50">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-black mb-10 text-blue-300 tracking-tight">Blog</h1>
        {posts.length === 0 ? (
          <div className="text-blue-200">Aucun article disponible pour le moment.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="block border border-blue-700 rounded-lg p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-slate-900 to-blue-950"
              >
                {post.thumbnail && (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded mb-4 border border-blue-800"
                  />
                )}
                <h2 className="text-2xl font-bold mb-2 text-blue-200">{post.title}</h2>
                <p className="text-blue-100 mb-2">{post.excerpt}</p>
                <div className="text-xs text-blue-400">
                  {post.date} • {post.tags?.join(", ")}
                </div>
                <div className="mt-4 text-right">
                  <span className="inline-block px-4 py-1 bg-blue-800/60 text-blue-100 rounded hover:bg-blue-700 transition-colors font-semibold">
                    Lire l'article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}