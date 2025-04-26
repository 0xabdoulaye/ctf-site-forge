
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { getPostBySlug, getAuthorByPost } from "@/data/blogPosts";
import { Calendar, ChevronLeft, User } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const author = post ? getAuthorByPost(post) : undefined;

  if (!post || !author) {
    return (
      <div className="min-h-screen bg-[#0A0E17]">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <h1 className="text-3xl text-primary text-center">Article non trouvé</h1>
          <div className="mt-8 text-center">
            <Link to="/blog" className="text-accent hover:text-primary flex items-center justify-center">
              <ChevronLeft className="mr-1" />
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E17]">
      <Navbar />
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0E17]"></div>
      </div>

      <div className="container mx-auto px-4 py-10 -mt-20 relative z-10">
        <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary mb-6">
          <ChevronLeft className="mr-1" />
          Retour au blog
        </Link>

        <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>

        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{author.name}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-[#141B2D] text-accent rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="border-t border-accent/30 pt-8 mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">À propos de l'auteur</h2>
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${author.avatar})` }}></div>
            <div>
              <h3 className="text-xl font-bold text-secondary">{author.name}</h3>
              <p className="text-primary mb-2">{author.role} • {author.specialty}</p>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
