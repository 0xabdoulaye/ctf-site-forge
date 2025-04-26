
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { blogPosts, getAuthorByPost } from "@/data/blogPosts";
import { Calendar } from "lucide-react";

const Blog = () => {
  const [filter, setFilter] = useState<string>("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(filter.toLowerCase()) || 
    post.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#0A0E17] pb-20">
      <Navbar />
      <div className="pt-20 pb-10 bg-[#141B2D]">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog & Writeups</h1>
          <p className="text-secondary text-xl mb-8">
            Découvrez nos analyses techniques, writeups de CTF et recherches en cybersécurité
          </p>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher par titre ou tag..."
              className="w-full md:w-1/2 p-3 bg-[#0A0E17] border border-accent rounded-md text-white"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => {
            const author = getAuthorByPost(post);
            return (
              <Link to={`/blog/${post.slug}`} key={post.id} className="border border-accent rounded-lg overflow-hidden hover:neon-border transition-all duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                  <p className="text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${author?.avatar})` }}></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Par {author?.name}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#141B2D] text-xs text-accent rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-secondary">Aucun article trouvé</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
