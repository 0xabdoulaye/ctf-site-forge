import matter from "gray-matter";

// Fonction utilitaire pour charger tous les fichiers .md dans src/posts/ (Vite requis)
export async function loadMarkdownPosts() {
  // @ts-ignore
  const posts = import.meta.glob("../posts/*.md", { as: "raw" });

  const loaded = await Promise.all(
    Object.entries(posts).map(async ([file, loader]) => {
      const raw = await loader();
      const { data, content } = matter(raw);
      return {
        ...data,
        content,
        slug: data.slug || file.split("/").pop()?.replace(/\.md$/, ""),
      };
    })
  );

  // Tri par date décroissante
  return loaded.sort((a, b) => (a.date < b.date ? 1 : -1));
}