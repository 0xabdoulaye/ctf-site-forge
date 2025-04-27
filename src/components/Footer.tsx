
import { Mail, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:team@guineaoffensivesecurity.com" 
                 className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>team@guineaoffensivesecurity.com</span>
              </a>
              <a href="https://discord.gg/gos" 
                 className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Discord</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Accueil</a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="/join" className="block text-muted-foreground hover:text-primary transition-colors">Rejoindre</a>
              <a href="/sponsors" className="block text-muted-foreground hover:text-primary transition-colors">Sponsors</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Légal</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-accent/30 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Guinea Offensive Security. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
