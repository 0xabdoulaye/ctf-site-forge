import matter from "gray-matter";

// Fonction utilitaire pour charger tous les fichiers .md dans src/posts/ (Vite requis)
export async function loadMarkdownPosts() {
  try {
    // @ts-ignore - Vite's import.meta.glob
    const posts = import.meta.glob("../posts/*.md", { as: "raw" });

    if (!posts || Object.keys(posts).length === 0) {
      console.warn("Aucun fichier markdown trouvé dans le répertoire posts/");
      return [];
    }

    const loaded = await Promise.all(
      Object.entries(posts).map(async ([file, loader]) => {
        try {
          const raw = await loader();
          const { data, content } = matter(raw);
          
          if (!data.title) {
            console.warn(`Article sans titre trouvé dans ${file}`);
          }
          
          return {
            ...data,
            content,
            slug: data.slug || file.split("/").pop()?.replace(/\.md$/, ""),
          };
        } catch (err) {
          console.error(`Erreur lors du chargement de ${file}:`, err);
          return null;
        }
      })
    );

    // Filtrer les articles null et trier par date
    return loaded
      .filter((post): post is NonNullable<typeof post> => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (err) {
    console.error("Erreur lors du chargement des articles:", err);
    throw err;
  }
}